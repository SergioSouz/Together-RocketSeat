import React from 'react';
import {View,Text, Image } from 'react-native';
import {style} from './style'; 



export function SignIn() {
  return (
    <View style={style.container}>
      <Image source={IllustrationImg} />
    </View>
  );
}