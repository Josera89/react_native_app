import React, { Component } from 'react';


import Feather from 'react-native-vector-icons/Feather';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { Container, Header, Content, List, ListItem, Left, Button, Icon} from 'native-base';

import { DrawerNavigator } from 'react-navigation'; // 1.0.0-beta.14

import { Text, TouchableOpacity, View, Slider } from "react-native";
import Modal from "react-native-modal";
import styles from "./styles";

export default class Clients extends Component {

  constructor(props){
    super(props);
    this.state = {
      vehicules: 10,
    }
  }
  state = {
    visibleModal: null
  };

  _renderButton = (text, onPress) => (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text>{text}</Text>
      </View>
    </TouchableOpacity>
  );

  _renderModalContent = () => (
    <View style={styles.modalContent}>
      <Ionicon name="md-bus" style={styles.busIcon} ></Ionicon>
      <Text style={styles.modalText}>
        {this.state.vehicules}
      </Text>
      <Slider
        style={{ width: 300 }}
        step={1}
        minimumValue={1}
        maximumValue={30}
        value={this.state.vehicules}
        onValueChange={val => this.setState({ vehicules: val })}
      />
      {this._renderButton("Cerrar", () => this.setState({ visibleModal: null }))}
    </View>
  );

  render() {

    return (
      <Container>
        <Content>
          <Text>{this.state.vehicules}</Text>
          <Ionicon name="md-bus" style={styles.busIcon} ></Ionicon>
        </Content>

        <Content>
          <View style={styles.container}>
            {this._renderButton("Editar", () =>
              this.setState({ visibleModal: 1 })
            )}
            <Modal isVisible={this.state.visibleModal === 1}>
              {this._renderModalContent()}
            </Modal>
          </View>
        </Content>

      </Container>

    );
  }
}
