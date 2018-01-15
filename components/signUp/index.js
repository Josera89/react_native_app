import React from 'react';
import { StyleSheet } from 'react-native';
import styles from './styles';

import { Image, Platform, ScrollView } from 'react-native';
import { Container, Header, Left, Body, Title, Right, Content, Text, InputGroup, Input, Button, Thumbnail, Icon, Item, View, Spinner } from 'native-base';
import Feather from 'react-native-vector-icons/Feather'; // 4.4.2

import Login from '../login'
import AppNavigator from '../appNavigator'
import { StackNavigator } from 'react-navigation';

import AuthService from '../../services/AuthService.js'


const logo = require('../../images/logo.png');
const backgroundImage = require('../../images/glow2.png');

class SignUp extends React.Component {
  static navigationOptions = {
    header: false
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container style={styles.container} >

        <Header>
          <Left>
            <Button transparent >
              <Icon name="arrow-back" style={{ fontSize: 30, lineHeight: 32 }} />
            </Button>
          </Left>
          <Body>
            <Title>Sign Up</Title>
          </Body>
          <Right />
        </Header>

        <Content padder style={{ backgroundColor: 'transparent' }} keyboardShouldPersistTaps="always">
          <View padder>
            <View style={styles.mb25}>
              <Item underline style={{ borderBottomWidth:(Platform.OS === 'ios') ? 1 : 1 }}>
                <Feather name="mail" />
                <Input
                  placeholderTextColor="white"
                  placeholder="Email"
                  keyboardType="email-address"
                />
              </Item>
            </View>


            <View style={styles.mb25}>
              <Item underline style={{ borderBottomWidth:(Platform.OS === 'ios') ? 1 : 1 }}>
                <Feather name="user" />
                <Input
                  placeholder="Name"
                  placeholderTextColor="white"
                />
              </Item>
            </View>

            <View style={styles.mb25}>
              <Item underline style={{ borderBottomWidth:(Platform.OS === 'ios') ? 1 : 1 }}>
                <Feather name="lock" />
                <Input
                  placeholderTextColor="white"
                  placeholder="Password"
                  secureTextEntry
                />
              </Item>
            </View>

            <View style={styles.mb25}>
              <Item underline style={{ borderBottomWidth:(Platform.OS === 'ios') ? 1 : 1 }}>
                <Feather name="unlock" />
                <Input
                  placeholder="Re-Type Password"
                  secureTextEntry
                  placeholderTextColor="white"
                />
              </Item>
            </View>

            <Button
              rounded
              block
              style={{ backgroundColor: '#fff', marginTop: 20 }}
              textStyle={{ color: '#00b8d4' }}
              onPress={() => AuthService.signup()}
            >
              <Text style={{ color: 'rgba(1,188,140,1)' }}>Save and Continue</Text>
            </Button>
          </View>
        </Content>

      </Container>
    );
  }
}

// const ModalStack = StackNavigator({
//   // Home: {
//   //   screen: Login,
//   // },
//   AppNavigator: {
//     screen: AppNavigator,
//     navigationOptions: {
//       header: null
//     }
//   },
//   SignUp: {
//     screen: SignUp
//   }
// });

export default SignUp;
