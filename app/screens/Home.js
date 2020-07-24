import React from "react";
import { Dimensions } from "react-native";
import { useDispatch } from "react-redux";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";

import { Container } from "../components/Container";
import { ActualTasks } from "../components/ActualTasks";
import { History } from "../components/History";

import { selectTask } from "../actions/tasks";
const ActualTab = () => <ActualTasks />;

const HistoryTab = () => <History />;

const initialLayout = { width: Dimensions.get("window").width };

function Home({ navigation }) {
  const dispatch = useDispatch();

  const handleDetails = (data) => {
    dispatch(selectTask(data));
    navigation.navigate("Details");
  };

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "actual", title: "Your tasks" },
    { key: "history", title: "History" },
  ]);

  const renderScene = SceneMap({
    actual: ActualTab,
    history: HistoryTab,
  });

  const renderTabBar = (props) => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: "#B63181" }}
      style={{ backgroundColor: "#012A41" }}
      labelStyle={{ color: "#fff", fontSize: 15 }}
    />
  );

  return (
    <Container>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        tabBarPosition='bottom'
        renderTabBar={renderTabBar}
      />
    </Container>
  );
}

export default Home;
