import React from "react";
import { View,Text } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";

import PlayerSvg from '../../assets/player.svg';
import CalendarSvg from '../../assets/calendar.svg';
import { styles } from "./style";

import { GuildIcon } from '../GuildIcon';
import { Categories } from "../../utils/categories";
import { theme } from "../../global/styles/theme";


export type GuildProps ={
  id: string;
  name: string,
  icon: null,
  owmer: boolean,
}

export type AppointmentProps = {
  id:string;
  guild: GuildProps;
  category:string;
  date: string;
  description: string;
}

type Props = RectButtonProps & {
  data: AppointmentProps;
}
export function Appointment({data, ...rest}:Props){
  const [category] = Categories.filter(item => item.id === data.category); 
  const { owmer } = data.guild;
  const { primary, on } = theme.color;


  return(

    <RectButton {...rest}>
      <View  style={styles.container}>
        
        <GuildIcon/>

        <View style={styles.content}>            
          <View style={styles.header}> 
            <Text style={styles.title}>
              { data.guild.name }
            </Text>
            <Text style={styles.category}>
              { category.title }
            </Text>
          </View>

          <View style={styles.footer}>
            <View style={styles.dateInfo}>
              <CalendarSvg/>
              <Text style={styles.date}>{data.date}</Text>
            </View>
        
              <View style={styles.playersInfo}>
                <PlayerSvg fill= { owmer ? primary : on }/>
                <Text style={[
                  styles.player, 
                  { color: owmer ? primary : on} 
                ]}>
                  {owmer ? 'Anfitrião' : 'Visitante'}
                </Text>
              </View>
          </View>
        </View>
      </View>
    </RectButton>
  );
}