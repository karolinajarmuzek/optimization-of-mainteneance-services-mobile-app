import EStyleSheet from "react-native-extended-stylesheet";
import { Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");

const styles = EStyleSheet.create({
  container: {
    flex: 1
  },
  detailContainer: {
    justifyContent: "center",
    alignItems: "center"
  },
  details: {
    position: "absolute",
    backgroundColor: "#fff",
    width: width * 0.8,
    height: height * 0.4,
    marginTop: height * 0.5,
    marginLeft: width * 0.1,
    borderRadius: 30,
    borderColor: "#023A5A",
    borderWidth: 1
  },
  textPanel: {
    width: "100%",
    height: "75%",
    paddingHorizontal: 50,
    justifyContent: "center"
  },
  element: {
    flexDirection: "row",
    marginBottom: 5
  },
  icon: {
    width: 30
  },
  fitIcon: {
    position: "absolute",
    marginTop: 20,
    marginLeft: 15
  },
  text: {
    fontSize: 18
  },
  separator: {
    height: 1,
    backgroundColor: "#023A5A",
    marginBottom: 5
  },
  button: {
    marginTop: 10,
    height: 40,
    width: "65%",
    backgroundColor: "#B63181",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    opacity: 0.9
  },
  buttonText: {
    fontSize: 20,
    color: "#fff"
  }
});

export default styles;
