import React from "react";
import { View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { Container } from "../Container";
import { TimeLine } from "../TimeLine";
import { Header } from "../Header";
import styles from "./styles";

import { data } from "../../data";
import { ProfileIcon } from "../ProfileIcon";

function ActualTasks() {
  return (
    <Container>
      <ProfileIcon />
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.text}> Check your today's tasks </Text>
        </View>
        <TimeLine data={data} />
      </View>
    </Container>
  );
}

export default ActualTasks;
