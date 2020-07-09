import React from "react";
import { View, StatusBar, Text } from "react-native";
import PropTypes from "prop-types";

import styles from "./styles";

const Container = ({ children }) => (
  <View style={styles.container}>
    <StatusBar translucent={false} barStyle="light-content" />
    {children}
  </View>
);

Container.protoTypes = {
  children: PropTypes.any
};

export default Container;
