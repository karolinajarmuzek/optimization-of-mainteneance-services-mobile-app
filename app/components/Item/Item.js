import React, { Component } from "react";
import { View, Text } from "react-native";
import { Icon } from "react-native-elements";

import styles from "./styles";

class Item extends Component {
  render() {
    return (
      <View style={styles.row}>
        <Icon
          name={this.props.icon}
          size={this.props.size}
          type="font-awesome"
          color="#023A5A"
        />
        <View style={styles.columnName}>
          <Text style={styles.columnText}> {this.props.title} </Text>
        </View>
        <View style={styles.columnValue}>
          <Text style={styles.text}> {this.props.value}</Text>
        </View>
      </View>
    );
  }
}

export default Item;
