import React, { useState } from "react";
import { Text, View, Button } from "react-native";
import { useSelector } from "react-redux";
import { FontAwesome } from "@expo/vector-icons";
import Modal from "react-native-modal";

import styles from "./styles";
import { value } from "react-native-extended-stylesheet";

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
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={styles.detailContainer}>
      <View style={styles.textPanel}>
        <Modal
          isVisible={isModalVisible}
          onBackdropPress={() => setModalVisible(false)}
        >
          <View style={styles.modal}>
            <Text style={styles.modalTitle}> Spare parts needed </Text>
            {Object.keys(task.reportResponse.spareParts).length > 0 ? (
              Object.entries(task.reportResponse.spareParts).map(
                ([key, value]) => {
                  return (
                    <Text key={key}>
                      {key}: {value}
                    </Text>
                  );
                }
              )
            ) : (
              <Text> You do not need any spare parts.</Text>
            )}
            <Text style={styles.closeModal} onPress={toggleModal}>
              Close
            </Text>
          </View>
        </Modal>
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
        <Text style={styles.spareParts} onPress={toggleModal}>
          Show needed spare parts
        </Text>
      </View>
    </View>
  );
}

export default DeviceTab;
