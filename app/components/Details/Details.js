import React from "react";
import { View } from "react-native";
import { useSelector } from "react-redux";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";

import { Map } from "../Map";
import styles from "./styles";
import DetialsTab from "./DetialsTab";
import DeviceTab from "./DeviceTab";

const TabDetails = () => <DetialsTab />;

const TabDevice = () => <DeviceTab />;

function Details() {
  const task = useSelector((state) => state.tasks.task);

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "details", title: "Failure details" },
    { key: "device", title: "Device" },
  ]);

  const renderScene = SceneMap({
    details: TabDetails,
    device: TabDevice,
  });

  const renderTabBar = (props) => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: "#B63181" }}
      style={{
        backgroundColor: "#fff",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
      }}
      labelStyle={{ color: "#000", fontSize: 15 }}
    />
  );

  return (
    <View style={styles.container}>
      <Map />
      <View style={styles.details}>
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          tabBarPosition='top'
          renderTabBar={renderTabBar}
        />
      </View>
    </View>
  );
}

export default Details;
