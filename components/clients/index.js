import React, { Component } from 'react';

import Feather from 'react-native-vector-icons/Feather';
import { Container, Header, Content, List, ListItem, Text, Left, Right, Button, Icon, Item, Input } from 'native-base';

import { DrawerNavigator } from 'react-navigation'; // 1.0.0-beta.14

export default class Clients extends Component {

  render() {
    return (
        <Content>

        <Item searchBar rounded style={{ marginTop: 10 }}>
          <Icon name="ios-search" />
          <Input placeholder="Search" />
          <Icon name="ios-people" />
        </Item>

          <Button transparent>
            <Text>Search</Text>
          </Button>


          <List>
            <ListItem itemDivider>
              <Text>A</Text>
            </ListItem>
            <ListItem >
              <Text> Aaron Bennet</Text>
            </ListItem>
            <ListItem>
              <Text> Ali Connors</Text>
            </ListItem>
            <ListItem itemDivider>
              <Text>B</Text>
            </ListItem>
            <ListItem>
              <Text> Bradley Horowitz</Text>
            </ListItem>
          </List>
          
        </Content>
    );
  }
}
