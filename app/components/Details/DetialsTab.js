import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

function DetailsTab() {
  const task = useSelector(state => state.tasks.task);
  const navigation = useNavigation();

  const elements = [
    [task.service.address, "location-arrow"],
    [task.date.date + " " + task.date.time, "calendar"],
    [task.service.estimatedTime + " min", "hourglass-1"],
    [
      task.customer.customerFirstName + " " + task.customer.customerLastName,
      "user"
    ],
    [task.customer.customerPhoneNumber, "phone"]
  ];

  const closeTask = () => {
    console.log("close");
    navigation.navigate("Home");
  };

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
      <TouchableOpacity activeOpacity={0.5} style={styles.button}>
        <Text style={styles.buttonText} onPress={closeTask}>
          Close report
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default DetailsTab;
