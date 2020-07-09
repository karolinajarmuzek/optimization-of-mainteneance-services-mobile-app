import EStyleSheet from "react-native-extended-stylesheet";
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;

const styles = EStyleSheet.create({
  profile: {
    position: "absolute",
    marginTop: 17,
    marginLeft: windowWidth - 31 - 15,
    zIndex: 1
  }
});

export default styles;
