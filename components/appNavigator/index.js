import React from 'react';
import { View, Text } from 'react-native';
import { DrawerNavigator } from 'react-navigation'; // 1.0.0-beta.14
import Feather from 'react-native-vector-icons/Feather'; // 4.4.2

import MainMenu from '../mainMenu'
import Login from '../login';
import Clients from '../clients'
import ProfileScreen from '../profileScreen'
import Calculate from '../calculate'
import Schedule from '../schedule'

import { Container, Header, Left, Right, Button, Icon } from 'native-base';

const HomeScreen = ({ navigation }) => (
  <Container>
    <Header style={{backgroundColor: '#e64a19'}}>
      <Left>
        <Button
          transparent
          onPress={() => navigation.navigate('DrawerOpen')}
        >
          <Icon name='ios-menu' style={{color: 'white'}} />
        </Button>
      </Left>
    </Header>
    <MainMenu />
  </Container>
);

const DrivingDistance = ({ navigation }) => (
  <Container>
    <Header style={{backgroundColor: '#e64a19'}}>
      <Left>
        <Button
          transparent
          onPress={() => navigation.navigate('DrawerOpen')}
        >
          <Icon name='ios-menu' style={{color: 'white'}}/>
        </Button>
      </Left>
    </Header>
    <Calculate />
  </Container>
);

const ScheduleAgenda = ({ navigation }) => (
  <Container>
    <Header style={{backgroundColor: '#e64a19'}}>
      <Left>
        <Button
          transparent
          onPress={() => navigation.navigate('DrawerOpen')}
        >
          <Icon name='ios-menu' style={{color: 'white'}}/>
        </Button>
      </Left>
    </Header>
    <Schedule />
  </Container>
);

const ContactList = ({ navigation }) => (
  <Container>
    <Header style={{backgroundColor: '#e64a19'}}>
    <Left>
      <Button
        transparent
        onPress={() => navigation.navigate('DrawerOpen')}
      >
        <Icon name='ios-menu' style={{color: 'white'}}/>
      </Button>
    </Left>
    <Right>
      <Button transparent>
        <Icon name='md-add' style={{color: 'white'}}/>
      </Button>
    </Right>
    </Header>
    <Clients />
  </Container>
);

const Settings = ({ navigation }) => (
  <Container>
    <Header style={{backgroundColor: '#e64a19'}}>
      <Left>
        <Button
          transparent
          onPress={() => navigation.navigate('DrawerOpen')}
        >
          <Icon name='ios-menu' style={{color: 'white'}}/>
        </Button>
      </Left>
    </Header>
    <ProfileScreen />
  </Container>
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
  Calculate: {
    screen: DrivingDistance,
    navigationOptions: {
      drawerLabel: 'Cotizador',
      drawerIcon: ({ tintColor, focused }) => (
        <Feather
          name={'map'}
          size={24}
          style={{ color: tintColor }}
        />
      ),
    },
  },
  Schedule: {
    screen: ScheduleAgenda,
    navigationOptions: {
      drawerLabel: 'Agenda',
      drawerIcon: ({ tintColor, focused }) => (
        <Feather
          name={'calendar'}
          size={24}
          style={{ color: tintColor }}
        />
      ),
    },
  },
  Clients: {
    screen: ContactList,
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
  Profile: {
    screen: Settings,
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
