import React from "react";
import { Text, View } from "react-native";
import { useSelector } from "react-redux";
import { FontAwesome } from "@expo/vector-icons";

import styles from "./styles";

function DeviceTab() {
  const task = useSelector((state) => state.tasks.task);
  const elements = [
    [
      task.reportResponse.devicePayload.name +
        "\n " +
        task.reportResponse.devicePayload.type,
      "bookmark",
    ],
    [task.reportResponse.failurePayload.type, "briefcase"],
    [task.reportResponse.description, "comment"],
  ];
  return (
    <View style={styles.detailContainer}>
      <View style={styles.textPanel}>
        {elements.map((element, index) => {
          return (
            <View key={index}>
              <View style={styles.element}>
                <FontAwesome
                  name={element[1]}
                  size={25}
                  color='#023A5A'
                  style={styles.icon}
                />
                <View style={styles.textContainer}>
                  <Text style={styles.text}> {element[0]} </Text>
                </View>
              </View>
              {elements.length !== index + 1 &&
              elements[index + 1][1] != null ? (
                <View style={styles.separator} />
              ) : null}
            </View>
          );
        })}
      </View>
    </View>
  );
}

export default DeviceTab;
