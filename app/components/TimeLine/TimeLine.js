import React from "react";
import Timeline from "react-native-timeline-flatlist";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";

import { selectTask } from "../../actions/tasks";

function TimeLine({ data }) {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleDetails = data => {
    console.log("handle", data["element"]);
    dispatch(selectTask(data["element"]));
    navigation.navigate("Details");
  };

  const converData = data => {
    let newData = [];
    data.forEach(element => {
      var task = {};
      console.log("task", task);
      task["time"] = element["date"]["time"];
      task["title"] = element["service"]["title"];
      task["description"] = element["service"]["description"];
      task["element"] = element;
      console.log("task", task);
      newData.push(task);
    });
    console.log("newdata " + newData);
    return newData;
  };

  return (
    <Timeline
      style={{ flex: 1, marginTop: 0 }}
      data={converData(data)}
      circleSize={20}
      innerCircle={"dot"}
      circleColor="#023A5A"
      lineColor="#023A5A"
      columnFormat="two-column"
      timeContainerStyle={{ minWidth: 65 }}
      timeStyle={{
        textAlign: "center",
        backgroundColor: "#B63181",
        color: "white",
        paddingVertical: 7,
        borderRadius: 13,
        fontSize: 16
      }}
      separator={false}
      detailContainerStyle={{
        marginBottom: 20,
        paddingHorizontal: 5,
        paddingBottom: 5,
        backgroundColor: "#4AB7F6",
        borderRadius: 15
      }}
      descriptionStyle={{ color: "#fff", fontSize: 15 }}
      options={{
        style: { paddingTop: 5 }
      }}
      titleStyle={{ fontWeight: "bold", fontSize: 18, color: "#023A5A" }}
      onEventPress={handleDetails}
    />
  );
}

export default TimeLine;
