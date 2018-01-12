import React from 'react';
import { View, Text } from 'react-native';
import { DrawerNavigator } from 'react-navigation'; // 1.0.0-beta.14
import Feather from 'react-native-vector-icons/Feather'; // 4.4.2

import MainMenu from '../mainMenu'
import Login from '../login';
import Clients from '../clients'
import ProfileScreen from '../profileScreen'
import Calculate from '../calculate'
import Reservation from '../reservation'

const HomeScreen = () => (
  <MainMenu />
);

const RootDrawer = DrawerNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      drawerLabel: 'Menú Principal',
      drawerIcon: ({ tintColor, focused }) => (
        <Feather
          name={'pie-chart'}
          size={24}
          style={{ color: tintColor }}
        />
      ),
    },
  },
  Clients: {
    screen: Clients,
    navigationOptions: {
      drawerLabel: 'Clientes',
      drawerIcon: ({ tintColor, focused }) => (
        <Feather
          name={'users'}
          size={24}
          style={{ color: tintColor }}
        />
      ),
    },
  },
  Calculate: {
    screen: Calculate,
    navigationOptions: {
      drawerLabel: 'Cotizador',
      drawerIcon: ({ tintColor, focused }) => (
        <Feather
          name={'info'}
          size={24}
          style={{ color: tintColor }}
        />
      ),
    },
  },
  Reservation: {
    screen: Reservation,
    navigationOptions: {
      drawerLabel: 'Reservaciones',
      drawerIcon: ({ tintColor, focused }) => (
        <Feather
          name={'calendar'}
          size={24}
          style={{ color: tintColor }}
        />
      ),
    },
  },
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      drawerLabel: 'Configurar Perfil',
      drawerIcon: ({ tintColor, focused }) => (
        <Feather
          name={'settings'}
          size={24}
          style={{ color: tintColor }}
        />
      ),
    },
  },
});

export default RootDrawer;
