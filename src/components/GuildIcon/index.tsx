import React from "react";
import {Image, View,Text } from "react-native";

import { styles } from "./style";
import { Avatar } from "../Avatar";

export function GuildIcon(){
  const uri = 'https://www.freeiconspng.com/uploads/discord-metro-style-icon-0.png';

  return(
    <View style={styles.container}>
      <Image
        source={{uri}}
        resizeMode= "cover"
        style ={styles.image}      
      />
      
    </View>
  );
}