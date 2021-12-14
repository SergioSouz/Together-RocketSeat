import React from "react";
import { Fontisto} from '@expo/vector-icons';
import { BorderlessButton } from "react-native-gesture-handler";
import { ImageBackground, Text, View, FlatList } from 'react-native';


import { theme } from "../../global/styles/theme";
import { styles } from "./style";
import BannerImg from '../../assets/banner.png'

import { ListHeader } from "../../components/ListHeader";
import { Background } from  '../../components/Background';
import { ListDivider } from "../../components/ListDivider";
import { Header } from  '../../components/Header';
import { Members } from "../../components/Members";
import { ButtonIcon } from "../../components/ButtonIcon";



export function ApointmentDetails(){

  const members = [ 
    {
      id: '1',
      username: 'Jyoti Puri',
      avatar_url: 'https://github.com/jpuri.png',
      status: 'online',

    },
    {
      id: '2',
      username: 'Devon Govett',
      avatar_url: 'https://github.com/devongovett.png',
      status: 'offline',
      
    }
  ]


  return(
    <Background>
      <Header 
        title="Detalhes"
        action = {
          <BorderlessButton>
            <Fontisto
              name= "share"
              size = {24}
              color = {theme.color.primary}
            />
          </BorderlessButton>
        }
      />

      <ImageBackground 
      source = {BannerImg}
      style= {styles.banner}
      >
        <View style={styles.bannerContent}>
          <Text  style= {styles.title}>
            Lendários
          </Text>
          <Text  style= {styles.subtitle}>
          É hoje que vamos chegar ao challenger sem {'\n'}
          perder uma partida da md10
          </Text>
        </View>
      </ImageBackground>

      <ListHeader
        title='Jogadores'
        subtitle= "Total 3"
        
      />
      <FlatList
        data={members}
        keyExtractor = {item => item.id}
        renderItem = {({item}) =>(
          <Members 
          data= { item }/>
        )}
        ItemSeparatorComponent = {() => <ListDivider/>}
        style={styles.members}
      />
      <View style={styles.footer}>
        <ButtonIcon
          title= 'Entrar na partida'
        />
      </View>
    </Background>
  );
}