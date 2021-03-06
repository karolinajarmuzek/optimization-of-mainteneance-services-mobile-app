import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { useSelector } from "react-redux";
import {
  FontAwesome,
  Entypo,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { UIActivityIndicator } from "react-native-indicators";

import styles from "./styles";

import { setToken } from "../../actions/user";

import { URL_REPAIR_BYTOKEN } from "../../urls";

function Profile(props) {
  const navigation = useNavigation();
  const [pendingRepairs, setPendingRepair] = useState(null);
  const [closedRepairs, setClosedRepairs] = useState(null);
  const token = useSelector((state) => state.user.token);

  function fetchData() {
    console.debug("Data fetch started");
    fetch(URL_REPAIR_BYTOKEN, {
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
        const pending = json.filter((obj) => obj.status !== "FINISHED").length; //ASSGINED
        const closed = json.filter((obj) => obj.status === "FINISHED").length;
        setPendingRepair(pending);
        setClosedRepairs(closed);
      })
      .catch((error) => {
        console.debug("Error during fetching user data: " + error);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  const logOut = () => {
    setToken("");
    navigation.navigate("Login");
  };

  return (
    <View>
      <MaterialCommunityIcons
        name='logout'
        size={30}
        color={"#fff"}
        style={styles.logoutIcon}
        onPress={logOut}
      />
      <View style={styles.container}>
        <View style={styles.personalDetials}>
          <View style={styles.photo}>
            <FontAwesome name='user-circle-o' size={220} />
          </View>
          <Text style={styles.nameText}>
            {" "}
            {props.firstName} {props.lastName}
          </Text>
          <Text style={styles.experienceText}>
            Experience level: {props.experience}
          </Text>
          <View style={styles.location}>
            <Entypo name='location-pin' size={25} color={"#fff"} />
            <Text style={styles.locationText}> {props.localization} </Text>
          </View>
        </View>
        {pendingRepairs != null && closedRepairs != null ? (
          <View style={styles.fixDetails}>
            <View style={styles.fixDetail}>
              <Text style={styles.fixesCount}>{pendingRepairs}</Text>
              <Text style={styles.fixesText}>Pending</Text>
              <Text style={styles.fixesText}>repairs</Text>
            </View>
            <View style={styles.fixDetail}>
              <Text style={styles.fixesCount}>{closedRepairs}</Text>
              <Text style={styles.fixesText}>Completed</Text>
              <Text style={styles.fixesText}>repairs</Text>
            </View>
          </View>
        ) : (
          <UIActivityIndicator color='#023A5A' />
        )}
      </View>
    </View>
  );
}

export default Profile;
