import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { LinearGradient } from "expo-linear-gradient";
import { useIsFocused } from "@react-navigation/native";

import { Container } from "../Container";
import { TimeLine } from "../TimeLine";
import { Header } from "../Header";
import styles from "./styles";

//import { data } from "../../data";
import { ProfileIcon } from "../ProfileIcon";

import { setActualTasks } from "../../actions/tasks";

import { URL_REPAIR_BYTOKEN } from "../../urls";

function ActualTasks() {
  const [data, setData] = useState([]);
  const token = useSelector((state) => state.user.token);
  const isFocused = useIsFocused();

  const dispatch = useDispatch();
  const setTasks = (tasks) => {
    dispatch(setActualTasks(tasks));
  };

  function fetchData() {
    console.debug("Data fetch started");
    fetch(URL_REPAIR_BYTOKEN + "/status=PENDING", {
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
  }, [isFocused]);

  return (
    <Container>
      <ProfileIcon />
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.text}> Check your today's tasks </Text>
        </View>
        {data.length > 1 ? (
          <TimeLine data={data} />
        ) : (
          <Text> "Data loading" </Text>
        )}
      </View>
    </Container>
  );
}

export default ActualTasks;
