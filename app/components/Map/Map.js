import React, { Component } from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import MapView, { Marker } from "react-native-maps";
import { Container } from "../Container";
import styles from "./styles";
import { MaterialIcons } from "@expo/vector-icons";

import { ProfileIcon } from "../ProfileIcon";

const delta = 0.0015;

class Map extends Component {
  _isMounted = false;

  constructor() {
    super();
    this.state = {
      region: {},
      marker: {},
      ready: false,
    };
  }

  componentDidMount() {
    this._isMounted = true;
    this.setState({
      region: {
        latitude: parseFloat(this.props.task.reportResponse.latitude) - delta,
        longitude: parseFloat(this.props.task.reportResponse.longitude),
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      },
      marker: {
        latitude: parseFloat(this.props.task.reportResponse.latitude),
        longitude: parseFloat(this.props.task.reportResponse.longitude),
      },
      ready: true,
    });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  onRegionChange = (region) => {
    this.setState({ region });
  };

  centerRegion = () => {
    this.setState({
      region: {
        latitude: parseFloat(this.props.task.reportResponse.latitude) - delta,
        longitude: parseFloat(this.props.task.reportResponse.longitude),
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      },
    });
  };

  fitAllMarkers = () => {
    this.map.animateToRegion({
      latitude: parseFloat(this.props.task.reportResponse.latitude) - delta,
      longitude: parseFloat(this.props.task.reportResponse.longitude),
      latitudeDelta: 0.005,
      longitudeDelta: 0.005,
    });
  };

  render() {
    return (
      <Container>
        <MaterialIcons
          name='my-location'
          size={25}
          color='#B63181'
          style={styles.icon}
          onPress={this.fitAllMarkers}
        />
        <ProfileIcon />

        {this.state.ready ? (
          <View style={styles.container}>
            <MapView
              ref={(ref) => {
                this.map = ref;
              }}
              style={styles.map}
              initialRegion={this.state.region}
              onRegionChange={this.onRegionChange}
            >
              <Marker
                coordinate={{
                  latitude: this.state.marker.latitude,
                  longitude: this.state.marker.longitude,
                }}
                title={this.state.marker.title}
                description={this.state.marker.description}
                pinColor='#B63181'
              />
            </MapView>
          </View>
        ) : null}
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({ task: state.tasks.task });

export default connect(mapStateToProps)(Map);
