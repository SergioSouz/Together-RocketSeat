import React from 'react';
import { View,Text, Image,FlatList } from 'react-native';

import { Guild } from '../../components/Guild';

import { style } from './style'; 

export function Guilds() {

  const guilds = [
    {
      id: '1',
      name: 'lendários',
      icon: null,
      owner:true
    }
  ]
  return (
    <View style={style.container}>
      <FlatList
        data = {guilds}
        keyExtractor = {item=> item.id}
        renderItem = {({item}) =>(
          <Guild data = {item}/>
        )}
        >
      </FlatList>
    </View>
    
  );
}