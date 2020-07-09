import EStyleSheet from "react-native-extended-stylesheet";
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;

const styles = EStyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: "#fff"
  },
  logoutIcon: {
    position: "absolute",
    marginTop: 20,
    marginLeft: windowWidth - 30 - 15,
    zIndex: 1
  },
  personalDetials: {
    height: "60%",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 50,
    backgroundColor: "#023A5A"
  },
  photo: {
    width: 240,
    height: 240,
    borderRadius: 120,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff"
  },
  fixDetails: {
    flexDirection: "row",
    height: "25%",
    width: "100%",
    alignContent: "center",
    justifyContent: "center"
  },
  fixDetail: {
    backgroundColor: "#023A5A",
    width: "40%",
    height: "100%",
    alignItems: "center",
    marginHorizontal: 2,
    paddingTop: "5%"
  },
  nameText: {
    color: "#fff",
    fontSize: 30,
    marginTop: 10
  },
  location: {
    flexDirection: "row",
    marginTop: 4
  },
  locationText: {
    color: "#fff",
    fontSize: 20
  },
  fixesCount: {
    fontSize: 60,
    color: "#B63181",
    fontWeight: "bold"
  },
  fixesText: {
    fontSize: 15,
    color: "#fff",
    flexWrap: "wrap"
  }
});

export default styles;
