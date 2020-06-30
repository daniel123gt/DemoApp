import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from './modulos/contenedores/login.js';
import Inicio from './modulos/contenedores/inicio';
import Registro from './modulos/contenedores/registro';
import Home from './modulos/contenedores/home';

const LoginNavigator = createStackNavigator({
  
  Inicio : {
    screen : Inicio,
  },
  
  Login : {
    screen : Login,
  },

  Registro : {
    screen : Registro,
  },

  Home : {
    screen : Home,
  }

},{headerMode: 'none'});

export default createAppContainer(LoginNavigator);
