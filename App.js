import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Loading from './components/loading';
import Login from './components/login';
import MainMenu from './components/mainMenu';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <MainMenu />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
