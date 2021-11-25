import React from "react";

import { MaterialCommunityIcons} from '@expo/vector-icons';
import { RectButton, RectButtonProps } from "react-native-gesture-handler";

import { styles } from "./style";
import { theme } from "../../global/styles/theme";



export function ButtonAdd({...rest}:RectButtonProps){
  return(

    <RectButton 
      style={styles.container}
      {...rest}
    >
     
      <MaterialCommunityIcons
      name= "plus"
      color= {theme.color.heading}
      size ={24}
      />

     
    </RectButton>
  );
}