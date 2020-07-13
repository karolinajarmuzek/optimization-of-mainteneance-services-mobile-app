import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

import { URL_SERVICEMAN_BYTOKEN } from "../../urls";

import styles from "./styles";

function ProfileIcon() {
  const navigation = useNavigation();
  const token = useSelector((state) => state.user.token);

  const onPress = () => {
    fetch(URL_SERVICEMAN_BYTOKEN, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    })
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          throw new Error("Network response was not ok!");
        }
      })
      .then((json) => {
        navigation.navigate("Profile", {
          firstName: json["firstName"],
          lastName: json["lastName"],
          localization: json["startLocalization"],
        });
      })
      .catch((error) => {
        console.debug("Error during getting user detils " + error);
      });
  };

  return (
    <FontAwesome
      name='user-circle-o'
      size={31}
      style={styles.profile}
      onPress={onPress}
    />
  );
}

export default ProfileIcon;
