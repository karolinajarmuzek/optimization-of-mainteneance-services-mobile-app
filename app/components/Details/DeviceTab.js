import React from "react";
import { Text, View } from "react-native";
import { useSelector } from "react-redux";
import { FontAwesome } from "@expo/vector-icons";

import styles from "./styles";

function DeviceTab() {
  const task = useSelector(state => state.tasks.task);
  const elements = [
    [task.service.device.name, "bookmark"],
    [task.service.device.type, "list-alt"],
    [task.service.device.producer, "tags"],
    [task.service.serviceType, "briefcase"],
    [task.service.description, "comment"]
  ];
  return (
    <View style={styles.detailContainer}>
      <View style={[styles.textPanel, { height: "90%" }]}>
        {elements.map((element, index) => {
          return (
            <View key={index}>
              <View style={styles.element}>
                <FontAwesome
                  name={element[1]}
                  size={25}
                  color="#023A5A"
                  style={styles.icon}
                />
                <Text style={styles.text}> {element[0]} </Text>
              </View>
              {elements.length !== index + 1 ? (
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
