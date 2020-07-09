import EStyleSheet from "react-native-extended-stylesheet";

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa"
  },
  panel: {
    flex: 1,
    backgroundColor: "white",
    position: "relative"
  },
  panelHeader: {
    height: 65,
    backgroundColor: "#012A41",
    justifyContent: "center",
    alignItems: "center"
  },
  textHeader: {
    fontSize: 18,
    color: "#FFF"
  },
  gradientStyle: {
    width: "100%",
    height: "100%",
    position: "absolute"
  }
});

export default styles;
