import React, { useState } from "react";
import {View,FlatList} from 'react-native'

import{styles} from './style';


import { Profile } from "../../components/Profile";
import { ButtonAdd } from "../../components/ButtonAdd";
import { CategorySelect } from '../../components/CategorySelect';
import { ListHeader } from '../../components/ListHeader';
import { Appointment } from "../../components/Appoinment";
import { ListDivider } from "../../components/ListDivider";


export function Home(){
  const [category, setCategory] = useState('');
  const appointments = [
    {
      id:'1',
      guild: {
        id:'1',
        name:'lendários',
        icon: null,
        owmer: true,
      },
      category: '1',
      date: '24/11 as 20:40n',
      description: 'É hoje que vamos chegar ao challenger em perder uma partida da md10'
    },
    {
      id:'2',
      guild: {
        id:'1',
        name:'lendários',
        icon: null,
        owmer: true,
      },
      category: '1',
      date: '24/11 as 20:40n',
      description: 'É hoje que vamos chegar ao challenger em perder uma partida da md10'
    },
    
  ]



  function handleCategorySelect(categoryId:string){
    categoryId === category? setCategory('') : setCategory(categoryId);
  }


  return(
    <View>
      <View style={styles.header}>
        <Profile/>
        <ButtonAdd/>
      </View>
      <CategorySelect 
        categorySelected = {category}
        setCategoty ={handleCategorySelect}
       />
        <View style={styles.content}>
          <ListHeader 
            title='Partidas agendadas'
            subtitle='Total 6'
          />

          <FlatList 
              data = {appointments}
              keyExtractor = {item => item.id}
              renderItem= {({ item }) => (
                <Appointment data= {item}/>
            )}
            ItemSeparatorComponent = {()=><ListDivider/>}
            style={styles.matches}
            showsVerticalScrollIndicator = {false}
            
          />

        
        </View>
    </View>

    
  );
}