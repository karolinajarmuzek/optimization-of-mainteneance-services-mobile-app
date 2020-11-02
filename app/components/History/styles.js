import EStyleSheet from "react-native-extended-stylesheet";

const styles = EStyleSheet.create({
  container: {
    height: "100%",
    padding: 30,
    paddingHorizontal: 30,
  },
  textContainer: {
    width: "100%",
    alignItems: "center",
  },
  text: {
    fontSize: 25,
    color: "#023A5A",
    fontWeight: "bold",
  },
  date: {
    width: "100%",
    alignItems: "center",
    marginBottom: 30,
    flexDirection: "row",
    justifyContent: "center",
  },
  dateText: {
    fontSize: 20,
    color: "#023A5A",
    fontWeight: "bold",
  },
  centerContent: {
    alignItems: "center",
  },
});

export default styles;
