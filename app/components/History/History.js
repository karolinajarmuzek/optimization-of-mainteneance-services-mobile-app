import React, { useState } from "react";
import { View, Text } from "react-native";
import { useDispatch } from "react-redux";
import { Icon } from "react-native-elements";
import DatePicker from "react-native-datepicker";
import { LinearGradient } from "expo-linear-gradient";

import { Container } from "../Container";
import { selectTask } from "../../actions/tasks";
import { TimeLine } from "../TimeLine";
import styles from "./styles";

import { ProfileIcon } from "../ProfileIcon";
import { data } from "../../data";

function History({}) {
  var tempDate = new Date();
  tempDate.setDate(tempDate.getDate() - 1);
  console.log("e", tempDate);
  const [date, setDate] = useState(
    String(tempDate.getDate()) +
      "-" +
      String(tempDate.getMonth() + 1) +
      "-" +
      tempDate.getFullYear()
  );
  const dispatch = useDispatch();

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
            mode="date"
            placeholder="select date"
            format="DD-MM-YYYY"
            minDate="2019-01-01"
            maxDate={tempDate}
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
              dateText: {
                color: "#023A5A",
                fontSize: 20,
                fontWeight: "bold"
              },
              dateInput: {
                borderWidth: 0,
                borderColor: "#023A5A"
              }
            }}
            onDateChange={date => {
              setDate(date);
            }}
            iconComponent={
              <Icon
                name="calendar"
                size={23}
                type="font-awesome"
                color="#023A5A"
              />
            }
          />
        </View>
        <TimeLine data={data} />
      </View>
    </Container>
  );
}

export default History;
