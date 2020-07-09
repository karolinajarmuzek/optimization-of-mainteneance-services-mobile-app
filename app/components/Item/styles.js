import EStyleSheet from "react-native-extended-stylesheet";

const styles = EStyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginHorizontal: 10
  },
  columnName: {
    color: "#023A5A",
    fontWeight: "bold",
    width: "50%",
    marginLeft: 10
  },
  columnValue: {
    fontSize: 20,
    color: "#023A5A",
    fontWeight: "bold",
    width: "50%"
  },
  columnText: {
    fontSize: 18,
    color: "#023A5A"
  },
  text: {
    fontSize: 20,
    color: "#B63181",
    fontWeight: "bold"
  },
  separator: {
    backgroundColor: "black",
    height: 10,
    marginLeft: 20
  }
});

export default styles;
