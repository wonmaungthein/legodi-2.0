import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";
// Colors passed from the Constants => yellow and green
const { primaryColor, secondaryColor } = Colors;

const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 100,
    marginTop: 20,
    backgroundColor: secondaryColor,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    color: "#fff",
    fontWeight: "bold",
    paddingTop: 10
  },
  corner: {
    width: 20,
    height: 20,
    position: "absolute",
    top: 0,
    right: 0,
    borderWidth: 10,
    borderBottomColor: "black",
    borderLeftColor: "black",
    borderTopColor: primaryColor,
    borderRightColor: primaryColor
  }
});

export default styles;
