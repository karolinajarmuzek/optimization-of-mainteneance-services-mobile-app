import React from "react";
import { View, Text } from "react-native";
import {
  FontAwesome,
  Entypo,
  MaterialCommunityIcons
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

function Profile() {
  const navigation = useNavigation();

  const logOut = () => {
    navigation.navigate("Login");
  };

  return (
    <View>
      <MaterialCommunityIcons
        name="logout"
        size={30}
        color={"#fff"}
        style={styles.logoutIcon}
        onPress={logOut}
      />
      <View style={styles.container}>
        <View style={styles.personalDetials}>
          <View style={styles.photo}>
            <FontAwesome name="user-circle-o" size={220} />
          </View>
          <Text style={styles.nameText}> Marek Nowak</Text>
          <View style={styles.location}>
            <Entypo name="location-pin" size={25} color={"#fff"} />
            <Text style={styles.locationText}> localization </Text>
          </View>
        </View>
        <View style={styles.fixDetails}>
          <View style={styles.fixDetail}>
            <Text style={styles.fixesCount}>10</Text>
            <Text style={styles.fixesText}>Pending</Text>
            <Text style={styles.fixesText}>repairs</Text>
          </View>
          <View style={styles.fixDetail}>
            <Text style={styles.fixesCount}>2</Text>
            <Text style={styles.fixesText}>Completed</Text>
            <Text style={styles.fixesText}>repairs</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

export default Profile;
