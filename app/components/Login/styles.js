import EStyleSheet from "react-native-extended-stylesheet";
import { black } from "ansi-colors";

const styles = EStyleSheet.create({
  loginBackground: {
    height: "100%",
    justifyContent: "center",
  },
  loginContainer: {
    backgroundColor: "black",
    width: "100%",
    height: "100%",
    opacity: 0.6,
    position: "absolute",
  },
  container: {
    alignItems: "center",
    marginVertical: 10,
    paddingHorizontal: 30,
  },
  loginHeader: {
    color: "#B63181",
    fontSize: 70,
    fontWeight: "bold",
    marginBottom: 20,
    textShadowColor: "black",
    textShadowOffset: { width: -1, height: -1 },
    textShadowRadius: 5,
  },
  inputContainer: {
    height: 60,
    width: "100%",
    marginTop: 10,
    backgroundColor: "#4AB7F6",
    borderRadius: 30,
    paddingLeft: 20,
    alignItems: "center",
    flexDirection: "row",
    opacity: 0.7,
  },
  icon: {
    marginRight: 15,
  },
  input: {
    color: "white",
    fontSize: 18,
    height: 60,
    width: "90%",
  },
  button: {
    marginTop: 20,
    height: 60,
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
});

export default styles;
