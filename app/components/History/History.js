import React, { useState, useEffect, useCallback } from "react";
import { View, Text, Platform } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { Icon } from "react-native-elements";
import DateTimePicker from "@react-native-community/datetimepicker";
import { UIActivityIndicator } from "react-native-indicators";

import { Container } from "../Container";
import { TimeLine } from "../TimeLine";
import styles from "./styles";

import { ProfileIcon } from "../ProfileIcon";

import { URL_REPAIR_BYTOKEN } from "../../urls";
import { value } from "react-native-extended-stylesheet";

function History({}) {
  const [data, setData] = useState([]);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [dataFetched, setDataFetched] = useState(false);
  const token = useSelector((state) => state.user.token);

  var tempDate = new Date();
  const [date, setDate] = useState(new Date());
  const dispatch = useDispatch();

  function fetchData() {
    console.debug("Data fetch started");
    fetch(
      URL_REPAIR_BYTOKEN + "/status=FINISHED/date=" + formatDate(date, "."),
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
      })
      .catch((error) => {
        console.debug("Error during fetching finished repairs: " + error);
      });
  }

  function formatDate(dateToFormat, separator) {
    var tempDate = new Date(dateToFormat);
    var dateString =
      String(("0" + tempDate.getDate()).slice(-2)) +
      separator +
      String(("0" + (tempDate.getMonth() + 1)).slice(-2)) +
      separator +
      tempDate.getFullYear();
    return dateString;
  }

  const onChange = (event, selectedDate) => {
    setShowDatePicker(Platform.OS === "ios");
    const currentDate = selectedDate || date;
    if (currentDate != date) setDataFetched(false);
    setDate(currentDate);
  };

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
          <Text style={styles.dateText}> {formatDate(date, "-")} </Text>
          <Icon
            name='calendar'
            size={23}
            type='font-awesome'
            color='#023A5A'
            onPress={() => setShowDatePicker(true)}
          />
          {showDatePicker ? (
            <DateTimePicker
              value={date}
              mode='date'
              placeholder='select date'
              dateFormat='dayofweek day month'
              minimumDate={new Date(2019, 0, 1)}
              maximumDate={tempDate}
              onChange={onChange}
            />
          ) : null}
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
