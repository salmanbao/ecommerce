import { StyleSheet } from "react-native";
import { BasicColor } from "./Colors";

export default StyleSheet.create({
  header: {
    borderBottomColor: BasicColor.green10,
    borderBottomWidth: 2,
    shadowColor: "transparent",
    elevation: 0,
    shadowRadius: 0,
    shadowOffset: {
      width: 0,
      height: 0,
    },
  },
});
