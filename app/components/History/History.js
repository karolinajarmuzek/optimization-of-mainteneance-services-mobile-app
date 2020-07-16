import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { Icon } from "react-native-elements";
import DatePicker from "react-native-datepicker";
import { LinearGradient } from "expo-linear-gradient";

import { Container } from "../Container";
import { selectTask } from "../../actions/tasks";
import { TimeLine } from "../TimeLine";
import styles from "./styles";

import { ProfileIcon } from "../ProfileIcon";

import { URL_REPAIR_BYTOKEN } from "../../urls";

function History({}) {
  const [data, setData] = useState([]);
  const token = useSelector((state) => state.user.token);

  var tempDate = new Date();
  tempDate.setDate(tempDate.getDate() - 1);
  const [date, setDate] = useState(
    String(tempDate.getDate()) +
      "." +
      String(("0" + (tempDate.getMonth() + 1)).slice(-2)) +
      "." +
      tempDate.getFullYear()
  );
  const dispatch = useDispatch();

  function fetchData() {
    console.debug("Data fetch started");
    fetch(URL_REPAIR_BYTOKEN + "/status=FINISHED/date=" + date, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    })
      .then((response) => response.json())
      .then((json) => {
        console.debug("Data fetch completed successfully");
        setData(json);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

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
            format='DD.MM.YYYY'
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
        {data.length >= 1 ? (
          <TimeLine data={data} />
        ) : (
          <Text> "Data loading" </Text>
        )}
      </View>
    </Container>
  );
}

export default History;
