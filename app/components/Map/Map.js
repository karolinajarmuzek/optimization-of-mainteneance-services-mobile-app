import React, { Component } from "react";
import { View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { Container } from "../Container";
import styles from "./styles";
import { MaterialIcons } from "@expo/vector-icons";

import { ProfileIcon } from "../ProfileIcon";

class Map extends Component {
  constructor() {
    super();
    this.state = {
      region: {
        latitude: 52.404031 - 0.0015,
        longitude: 16.949793,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005
      },
      marker: {
        latitude: 52.404031,
        longitude: 16.949793
      }
    };
  }

  onRegionChange = region => {
    this.setState({ region });
  };

  centerRegion = () => {
    this.setState({
      region: {
        latitude: 52.404031 - 0.0015,
        longitude: 16.949793,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005
      }
    });
  };

  fitAllMarkers = () => {
    this.map.animateToRegion({
      latitude: 52.404031 - 0.0015,
      longitude: 16.949793,
      latitudeDelta: 0.005,
      longitudeDelta: 0.005
    });
  };

  render() {
    return (
      <Container>
        <MaterialIcons
          name="my-location"
          size={25}
          color="#B63181"
          style={styles.icon}
          onPress={this.fitAllMarkers}
        />
        <ProfileIcon />
        <View style={styles.container}>
          <MapView
            ref={ref => {
              this.map = ref;
            }}
            style={styles.map}
            initialRegion={this.state.region}
            onRegionChange={this.onRegionChange}
          >
            <Marker
              coordinate={{
                latitude: this.state.marker.latitude,
                longitude: this.state.marker.longitude
              }}
              title={this.state.marker.title}
              description={this.state.marker.description}
              pinColor="#B63181"
            />
          </MapView>
        </View>
      </Container>
    );
  }
}

export default Map;
