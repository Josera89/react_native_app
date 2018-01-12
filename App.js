import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Loading from './components/loading';
import Login from './components/login';


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <Login />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
