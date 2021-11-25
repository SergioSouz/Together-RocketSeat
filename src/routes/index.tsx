import React from "react";
import {NavigationContainer} from '@react-navigation/native';

import{AuthRoutes} from './auth.Routes';
import { Background } from "../components/Background";

export function Routes(){
  return(

      <NavigationContainer>
          <AuthRoutes/>
      </NavigationContainer>
    
  )

}

