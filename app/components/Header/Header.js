import React from "react";
import { View, Text } from "react-native";

import styles from "./styles";
import { ProfileIcon } from "../ProfileIcon";

function Header() {
  return (
    <View style={styles.container}>
      <ProfileIcon />
      <Text style={{ color: "#fff" }}> NANANNA</Text>
    </View>
  );
}

export default Header;
