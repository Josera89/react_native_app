import React from 'react';
import { StyleSheet } from 'react-native';
import styles from './styles';

import { Image, Platform, ScrollView } from 'react-native';
import { Container, Content, Text, InputGroup, Input, Button, Thumbnail, Icon, Item, View, Spinner } from 'native-base';
import Feather from 'react-native-vector-icons/Feather'; // 4.4.2

import SignUp from '../signUp'
import AppNavigator from '../appNavigator'
import { StackNavigator } from 'react-navigation';

const logo = require('../../images/logo.png');
const backgroundImage = require('../../images/glow2.png');

class Login extends React.Component {
  static navigationOptions = {
    header: false
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container style={styles.container} >

        <Content keyboardShouldPersistTaps="always" style={{ backgroundColor: '#e64a19' }}>
              <View style={styles.bg}>
                <View style={{ flexGrow: 1, paddingBottom:10 }}>
                  <Item underline style={{ borderBottomWidth:(Platform.OS === 'ios') ? 0.5 : 1 }}>
                    <Feather active name="user" />
                    <Input
                      placeholder="EMAIL"
                      placeholderTextColor="#FFF"
                      keyboardType="email-address"
                    />
                  </Item>
                </View>

                <View style={{ flexGrow: 1,marginTop:(Platform.OS === 'ios') ? -10: 10 }}>
                  <Item underline style={{ borderBottomWidth:(Platform.OS === 'ios') ? 0.5 : 1 }}>
                    <Feather name="unlock" />
                    <Input
                      placeholder="CONTRASEÑA"
                      placeholderTextColor="#FFF"
                      secureTextEntry
                    />
                  </Item>
                </View>

                <Button
                  transparent
                  style={{ alignSelf: 'flex-end', marginBottom: (Platform.OS === 'ios') ? 5 : 5, marginTop: 5 }}
                >
                  <Text style={{ color:'#fff' }}>
                    Recordar Contraseña
                  </Text>
                </Button>

                <Button
                  light
                  rounded
                  block
                  style={{ marginBottom: 5 }}
                  // Remove name lucy
                  onPress={() => this.props.navigation.navigate('AppNavigator', {name: 'Lucy'})}
                >
                  <Text style={{ color: '#d84315' }}>Log In</Text>
                </Button>

                <Button
                  transparent
                  style={{ alignSelf: 'center' }}
                  onPress={() => this.props.navigation.navigate('SignUp')}
                >
                  <Text style={{ color:'#fff' }}>
                    Registrate
                  </Text>
                </Button>
                </View>
          </Content>
      </Container>
    );
  }
}

const ModalStack = StackNavigator({
  Home: {
    screen: Login,
  },
  AppNavigator: {
    screen: AppNavigator,
    navigationOptions: {
      header: null
    }
  },
  SignUp: {
    screen: SignUp
  }
});

export default ModalStack;
