import React, { Component } from 'react';

import Feather from 'react-native-vector-icons/Feather';
import { Container, Header, Content, List, ListItem, Text, Left, Button, Icon } from 'native-base';

import { DrawerNavigator } from 'react-navigation'; // 1.0.0-beta.14

export default class Clients extends Component {

  render() {
    return (
      <Container>

        <Header>
        <Left>
          <Button transparent>
            <Icon name='ios-menu' />
          </Button>
        </Left>

        </Header>

        <Content>

        </Content>

      </Container>
    );
  }
}
