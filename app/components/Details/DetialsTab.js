import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

import { URL_CLOSE_REPAIR } from "../../urls";

function DetailsTab() {
  const task = useSelector((state) => state.tasks.task);
  const token = useSelector((state) => state.user.token);
  const navigation = useNavigation();

  const elements = [
    [task.reportResponse.address, "location-arrow"],
    [task.date + " " + task.time, "calendar"],
    [task.time + " min", "hourglass-1"],
    [
      task.reportResponse.customerPayload.firstName +
        " " +
        task.reportResponse.customerPayload.lastName,
      "user",
    ],
    [task.reportResponse.customerPayload.phoneNumber, "phone"],
  ];

  const closeTask = () => {
    console.debug("Closing task process started");
    fetch(URL_CLOSE_REPAIR + task.id, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    })
      .then((response) => {
        if (response.status == 200) {
          console.debug("Closing task process completed successfully");
          navigation.navigate("Home");
        } else {
          throw new Error("Network response was not ok!");
        }
      })
      .catch((error) => {
        console.debug("Error during closing task " + error);
      });
  };

  return (
    <View style={styles.detailContainer}>
      <View style={[styles.textPanel, { paddingHorizontal: 50 }]}>
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
                <Text style={styles.text}> {element[0]} </Text>
              </View>
              {elements.length !== index + 1 ? (
                <View style={styles.separator} />
              ) : null}
            </View>
          );
        })}
        {task.status === "REPAIRING" ? (
          <TouchableOpacity activeOpacity={0.5} style={styles.button}>
            <Text style={styles.buttonText} onPress={closeTask}>
              Close report
            </Text>
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
}

export default DetailsTab;
