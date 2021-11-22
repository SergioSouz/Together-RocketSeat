import React from 'react';
import {View,Text, Image,StatusBar} from 'react-native';
import IllustrationImg from '../../assets/illustration.png';
import {style} from './style'; 
import {ButtonIcon} from "../../components/BottonIcon/index";



export function SignIn() {
  return (
    <View style={style.container}>
       <StatusBar 
       barStyle= 'light-content' 
       backgroundColor= 'transparent'
       translucent
       />
      <Image resizeMode= 'stretch' style ={style.image} source={IllustrationImg}/>

      <View style={style.contant}>
        <Text style={style.title}>
          Organize {`\n`}
          suas jogatinas {`\n`}
          facilmente
        </Text>

        <Text style={style.subtitle}>
          Crie grupos para jogar seus games {`\n`}
          favoritos com seus amigos
        </Text>


        <ButtonIcon 
        title="Entrar com Discord" 
        activeOpacity = {0.6} 
        />
        
      </View>
    </View>
  );
}