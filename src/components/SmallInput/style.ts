import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container:{
    flexDirection: "row",
    width:48,
    height:48,
    backgroundColor:theme.color.secondary40,
    color:theme.color.heading,
    borderRadius:8,
    fontFamily:theme.fonts.text400,
    fontSize:13,
    marginRight:4,
    textAlign:"center",
  },

});