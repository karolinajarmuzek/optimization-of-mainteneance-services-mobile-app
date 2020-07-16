import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  Text,
  ScrollView,
  RefreshControl,
  SafeAreaView,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { LinearGradient } from "expo-linear-gradient";
import { useIsFocused } from "@react-navigation/native";

import { Container } from "../Container";
import { TimeLine } from "../TimeLine";
import { Header } from "../Header";
import styles from "./styles";

//import { data } from "../../data";
import { ProfileIcon } from "../ProfileIcon";
import { UIActivityIndicator } from "react-native-indicators";

import { setActualTasks } from "../../actions/tasks";

import { URL_REPAIR_BYTOKEN } from "../../urls";

function ActualTasks() {
  const [data, setData] = useState([]);
  const [dataFetched, setDataFetched] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const token = useSelector((state) => state.user.token);
  const isFocused = useIsFocused();

  const dispatch = useDispatch();
  const setTasks = (tasks) => {
    dispatch(setActualTasks(tasks));
  };

  function fetchData() {
    console.debug("Data fetch started");
    fetch(URL_REPAIR_BYTOKEN + "/actual", {
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
        setDataFetched(true);
        setRefreshing(false);
      });
  }

  useEffect(() => {
    fetchData();
  }, [isFocused]);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setDataFetched(false);
    fetchData();
  }, []);

  return (
    <Container>
      <ProfileIcon />
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.text}> Check your today's tasks </Text>
        </View>
        <SafeAreaView>
          <ScrollView
            contentContainerStyle={styles.scrollView}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
          >
            {!dataFetched ? (
              <UIActivityIndicator color='#023A5A' />
            ) : data.length == 0 && dataFetched ? (
              <Text> No tasks available </Text>
            ) : (
              <TimeLine data={data} />
            )}
          </ScrollView>
        </SafeAreaView>
      </View>
    </Container>
  );
}

export default ActualTasks;
