import EStyleSheet from "react-native-extended-stylesheet";
import { Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");

const styles = EStyleSheet.create({
  container: {
    flex: 1,
  },
  detailContainer: {
    justifyContent: "center",
    alignItems: "center",
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
    borderWidth: 1,
  },
  textPanel: {
    width: "100%",
    height: "100%",
    paddingHorizontal: 30,
    justifyContent: "center",
  },
  element: {
    flexDirection: "row",
    marginBottom: 5,
  },
  icon: {
    width: 30,
  },
  fitIcon: {
    position: "absolute",
    marginTop: 20,
    marginLeft: 15,
  },
  textContainer: {
    paddingRight: 30,
  },
  text: {
    fontSize: 18,
    textAlign: "justify",
  },
  separator: {
    height: 1,
    backgroundColor: "#023A5A",
    marginBottom: 5,
  },
  button: {
    marginTop: 10,
    height: 40,
    width: "100%",
    backgroundColor: "#B63181",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    opacity: 0.9,
  },
  buttonText: {
    fontSize: 20,
    color: "#fff",
  },
  modal: {
    backgroundColor: "#fff",
    paddingVertical: 20,
    justifyContent: "center",
    alignItems: "center",
    color: "#023A5A",
    fontSize: 18,
  },
  modalTitle: {
    fontSize: 20,
    color: "#B63181",
    marginBottom: 15,
  },
  closeModal: {
    fontSize: 16,
    marginTop: 20,
    color: "#B63181",
  },
  spareParts: {
    fontSize: 18,
    color: "#B63181",
    paddingHorizontal: 20,
    marginTop: 10,
  },
});

export default styles;
