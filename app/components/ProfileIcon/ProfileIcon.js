import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

function ProfileIcon() {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate("Profile");
  };

  return (
    <FontAwesome
      name="user-circle-o"
      size={31}
      style={styles.profile}
      onPress={onPress}
    />
  );
}

export default ProfileIcon;
