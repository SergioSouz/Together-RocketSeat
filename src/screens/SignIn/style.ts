import {StyleSheet} from 'react-native';
import { theme } from '../../global/styles/theme';


export const style = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
 
   

  },
  image:{
    width: '100%',
    height: 300,

  },
  contant:{
    marginTop: -40,
    paddingHorizontal:50,

  },
  title:{
    color: theme.color.heading,
    textAlign: 'center',
    fontSize: 40,
    marginBottom : 16,
    fontFamily: theme.fonts.title700,
    lineHeight: 40,

  }, 
  subtitle:{
    color: theme.color.heading,
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 64,
    fontFamily: theme.fonts.title500,
    lineHeight: 25,
  },

});