import React, { Component } from 'react';

import Feather from 'react-native-vector-icons/Feather';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { Container, Header, Content, List, ListItem, Text, Left, Button, Icon, View } from 'native-base';

import { DrawerNavigator } from 'react-navigation'; // 1.0.0-beta.14

export default class Clients extends Component {

  render() {

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Content>
          <Text>Main Menu </Text>
          <Ionicon name="md-bus"></Ionicon>
        </Content>
      </View>

    );
  }
}
