import React from "react";

import {ScrollView} from 'react-native';
import { RectButton, RectButtonProps } from "react-native-gesture-handler";

import { styles } from "./style";
import { theme } from "../../global/styles/theme";
import { Categories } from "../../utils/categories";
import { Category } from "../Category";


type Props = {
  categorySelected:string;
  setCategoty: (categoryId:string) => void;
  hasCheckBox? : boolean;

}

export function CategorySelect({
    categorySelected,
    setCategoty,
    hasCheckBox = false
    }:Props){
  return(
    <ScrollView
      horizontal
      style= {styles.container}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingRight:40}}
    >
      {
        Categories.map(category => (
          <Category
            key={category.id}
            title={category.title}
            icon={category.icon}
            checked={ category.id === categorySelected}
            onPress = {() => setCategoty( category.id)}
            hascheckBox = {hasCheckBox}
          />
        ))
      }

    </ScrollView>

  );
}