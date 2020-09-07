import React, { useState, useEffect, useCallback } from "react";
import { View, Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { Icon } from "react-native-elements";
import DatePicker from "react-native-datepicker";
import { UIActivityIndicator } from "react-native-indicators";

import { Container } from "../Container";
import { TimeLine } from "../TimeLine";
import styles from "./styles";

import { ProfileIcon } from "../ProfileIcon";

import { URL_REPAIR_BYTOKEN } from "../../urls";

function History({}) {
  const [data, setData] = useState([]);
  const [dataFetched, setDataFetched] = useState(false);
  const token = useSelector((state) => state.user.token);

  var tempDate = new Date();
  const [date, setDate] = useState(
    String(("0" + tempDate.getDate()).slice(-2)) +
      "-" +
      String(("0" + (tempDate.getMonth() + 1)).slice(-2)) +
      "-" +
      tempDate.getFullYear()
  );
  const dispatch = useDispatch();

  function fetchData() {
    console.debug("Data fetch started");
    fetch(
      URL_REPAIR_BYTOKEN + "/status=FINISHED/date=" + date.replace(/-/g, "."),
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      }
    )
      .then((response) => response.json())
      .then((json) => {
        console.debug("Data fetch completed successfully");
        setData(json);
        setDataFetched(true);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    fetchData();
  }, [date]);

  return (
    <Container>
      <ProfileIcon />
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.text}> Check your old tasks </Text>
        </View>
        <View style={styles.date}>
          <DatePicker
            style={{ width: 140 }}
            date={date}
            mode='date'
            placeholder='select date'
            format='DD-MM-YYYY'
            minDate='2019-01-01'
            maxDate={tempDate}
            confirmBtnText='Confirm'
            cancelBtnText='Cancel'
            customStyles={{
              dateText: {
                color: "#023A5A",
                fontSize: 20,
                fontWeight: "bold",
              },
              dateInput: {
                borderWidth: 0,
                borderColor: "#023A5A",
              },
            }}
            onDateChange={(date) => {
              setDate(date);
              dataFetched(false);
            }}
            iconComponent={
              <Icon
                name='calendar'
                size={23}
                type='font-awesome'
                color='#023A5A'
              />
            }
          />
        </View>
        {!dataFetched ? (
          <View style={styles.centerContent}>
            <UIActivityIndicator color='#023A5A' />
          </View>
        ) : data.length == 0 && dataFetched ? (
          <View style={styles.centerContent}>
            <Text> No tasks available </Text>
          </View>
        ) : (
          <TimeLine data={data} />
        )}
      </View>
    </Container>
  );
}

export default History;
