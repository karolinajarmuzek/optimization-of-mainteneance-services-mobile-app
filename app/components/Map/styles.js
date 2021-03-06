import EStyleSheet from "react-native-extended-stylesheet";
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = EStyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  map: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 0,
  },
  icon: {
    position: "absolute",
    marginTop: windowHeight - 60,
    marginLeft: windowWidth - 40,
    zIndex: 1,
  },
});

export default styles;
