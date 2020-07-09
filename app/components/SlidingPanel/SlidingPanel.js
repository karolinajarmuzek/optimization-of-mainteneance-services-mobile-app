import React, { Component } from "react";
import { Text, View, Dimensions, Animated } from "react-native";
import { connect } from "react-redux";

import { LinearGradient } from "expo-linear-gradient";
import SlidingUpPanel from "rn-sliding-up-panel";
import { Map } from "../Map";
import { Details } from "../Details";
const { height } = Dimensions.get("window");

import styles from "./styles";

class SlidingPanel extends Component {
  static defaultProps = {
    draggableRange: { top: height - 90, bottom: 350 }
  };

  _draggedValue = new Animated.Value(10);

  render() {
    const backgoundOpacity = this._draggedValue.interpolate({
      inputRange: [height - 48, height],
      outputRange: [1, 0],
      extrapolate: "clamp"
    });

    return (
      <View style={styles.container}>
        <Map />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return { task: state.tasks.task };
};

export default connect(mapStateToProps)(SlidingPanel);
