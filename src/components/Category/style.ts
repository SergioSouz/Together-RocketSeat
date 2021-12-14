import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container:{
    width:104,
    height:120,
    justifyContent:'center',
    alignItems:'center',
    borderRadius: 8,
    marginRight:8,

  },
  content:{
    width:100,
    height:116,
    borderRadius: 8,
    justifyContent:'space-between',
    alignItems:'center',
    paddingVertical: 15,
  },
  title:{
    fontFamily:theme.fonts.title700,
    color:theme.color.heading,
    fontSize: 15,
    marginTop:20,
  },
  check:{
    position:'absolute',
    top:7,
    right:7,
    width:12,
    height:12,
    backgroundColor:theme.color.secondary100,
    borderColor:theme.color.secondary50,
    borderWidth:2,
    borderRadius:3,


  },
  checked:  {
    position:'absolute',
    top:7,
    right:7,
    width:10,
    height:10,
    backgroundColor:theme.color.primary,
  

    borderRadius:3,
  },

});