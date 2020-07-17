import EStyleSheet from "react-native-extended-stylesheet";

const styles = EStyleSheet.create({
  container: {
    height: "100%",
    padding: 30,
    paddingHorizontal: 30,
    backgroundColor: "#fff",
  },
  textContainer: {
    width: "100%",
    alignItems: "center",
    marginBottom: 30,
  },
  text: {
    fontSize: 25,
    color: "#023A5A",
    fontWeight: "bold",
  },
  scrollView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default styles;
