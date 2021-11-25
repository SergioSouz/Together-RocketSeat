import React from 'react';
import {View,Text, Image } from 'react-native';
import IllustrationImg from '../../assets/illustration.png';
import {style} from './style'; 
import {ButtonIcon} from "../../components/BottonIcon/index";
import { useNavigation } from '@react-navigation/core';




export function SignIn() {
  const navigation = useNavigation();

  function handleSignIn(){
    navigation.navigate('Home');
  }

  return (
    <View style={style.container}>
      
      <Image resizeMode= 'stretch' style ={style.image} source={IllustrationImg}/>

      <View style={style.contant}>
        <Text style={style.title}>
          Conecte-se {`\n`}
          e organize suas {`\n`}
          jogatinas
        </Text>

        <Text style={style.subtitle}>
          Crie grupos para jogar seus games {`\n`}
          favoritos com seus amigos
        </Text>


        <ButtonIcon 
        title="Entrar com Discord" 
        onPress={handleSignIn}
        />
        
      </View>
    </View>
  );
}