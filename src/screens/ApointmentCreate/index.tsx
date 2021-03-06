import React, { useState } from "react";
import{ Text, View, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import{ RectButton} from 'react-native-gesture-handler';
import{ Feather } from '@expo/vector-icons';




import{ styles } from './style';
import{ theme } from "../../global/styles/theme";

import{ CategorySelect } from  '../../components/CategorySelect';
import{ Background } from  '../../components/Background';
import{ SmallInput } from  '../../components/SmallInput';
import{ TextArea } from  '../../components/TextArea';
import{ Header } from  '../../components/Header';
import{ GuildIcon } from  '../../components/GuildIcon';
import{ Button } from  '../../components/Button';




export function ApointmentCreate(){

  const [category, setCategory] = useState('')
  return(
    <KeyboardAvoidingView 
    style={styles.container}
    behavior={Platform.OS ==='ios' ? "padding": "height"}
    >  
      <ScrollView>
        <Header 
          title="Agendar partida"
        />
        <Text style={[
          styles.label,
          { marginLeft:24, marginTop:36,marginBottom:18}
        ]}>
          
          Categorias
        </Text>
        <CategorySelect
          hasCheckBox
          setCategoty={setCategory}
          categorySelected={category}
          
        />
        <View style={styles.form}>
          <RectButton>
            <View style={styles.select}> 
              {
                /* <View style={styles.image}> </View> */
                <GuildIcon/>
              }

              <View style={styles.selectBody}> 
                <Text style={styles.label}>
                  Selecione um servidor
                </Text>
              </View>

              <Feather
                  name="chevron-right"
                  color={theme.color.heading}
                  size={19}
                />
            </View>
          </RectButton>
          
          <View style={styles.field}>
            <View>
              <Text style={styles.label}>
                Dia e mês
              </Text>
              <View style={styles.column}>
                <SmallInput maxLength={2}/>
                <Text style={styles.divider}> / </Text>
                <SmallInput maxLength={2}/>
              </View>
            </View>

            <View>
              <Text style={styles.label}>
                Hora e minuto
              </Text>
              <View style={styles.column}>
                <SmallInput maxLength={2}/>
                <Text style={styles.divider}> : </Text>
                <SmallInput maxLength={2}/>
              </View>
            </View>

          </View>

          <View style={[styles.field,{marginBottom:12}]}>
            <Text style={styles.label}>
              Descrição
            </Text>
            <Text style={styles.caracteresLimit}>
              Max 100 caracteres
            </Text>
          </View>
          <TextArea
            multiline
            maxLength = {100}
            numberOfLines={5}
            autoCorrect={false}
          />

          <View style ={styles.footer}>
            <Button 
              title="Agendar"
            />
          </View>

        </View>
      
      </ScrollView>
    </KeyboardAvoidingView>
  );
}