import EStyleSheet from "react-native-extended-stylesheet";

const styles = EStyleSheet.create({
  container: {
    alignItems: "center",
    marginVertical: 10,
    paddingHorizontal: 30
  },
  loginBackground: {
    height: "100%",
    justifyContent: "center"
  },
  loginContainer: {
    backgroundColor: "black",
    width: "100%",
    height: "100%",
    opacity: 0.6,
    position: "absolute"
  },
  inputContainer: {
    height: 60,
    width: "100%",
    borderColor: "#023A5A",
    borderWidth: 2,
    marginTop: 10,
    backgroundColor: "white",
    borderRadius: 30,
    color: "#4AB7F6",
    paddingLeft: 20,
    alignItems: "center",
    flexDirection: "row",
    opacity: 0.5
  },
  detailsContainer: {
    flexDirection: "row",
    height: 230,
    borderColor: "#B63181",
    borderWidth: 2,
    borderRadius: 20
  },
  imageContainer: {
    width: "40%",
    borderColor: "black",
    borderRadius: 2,
    alignItems: "center",
    justifyContent: "center"
  },
  details: {
    width: "60%",
    height: "100%"
  },
  loginHeader: {
    color: "#B63181",
    fontSize: 50,
    fontWeight: "bold",
    marginBottom: 20
  },
  buttonText: {
    fontSize: 20,
    color: "#fff"
  },
  input: {
    color: "#fff",
    fontSize: 18,
    height: 60,
    width: "90%"
  },
  icon: {
    marginRight: 15
  },
  button: {
    marginTop: 20,
    height: 60,
    width: "100%",
    backgroundColor: "#4AB7F6",
    borderColor: "#023A5A",
    borderRadius: 30,
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    color: "#fff"
  },
  image: {
    width: 100,
    height: 200
  },
  container1: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  map: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  }
});

export default styles;
