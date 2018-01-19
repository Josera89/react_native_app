import React, { Component } from 'react';
import { TouchableOpacity, Slider, Image } from "react-native";
import { Container, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon, H1 } from 'native-base';
import Ionicon from 'react-native-vector-icons/Ionicons';
import styles from "./styles";

import Modal from "react-native-modal";

const cards = [
  {
    text: 'Vehiculos',
    name: 'One',
  },
];
export default class DeckSwiperExample extends Component {

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
        <View>
          <DeckSwiper
            dataSource={cards}
            renderItem={item =>
              <Card style={{ elevation: 8 }}>
                <CardItem>
                  <Left>
                    <Thumbnail source={item.image} />
                    <Body>
                      <H1 style={{color: '#e64a19', marginTop: 10, fontSize: 30}}>Vehiculos Totales</H1>
                      <Ionicon name="md-bus" style={styles.busIconGreen} > {this.state.vehicules}</Ionicon>
                      <Ionicon name="md-bus" style={styles.busIconRed} > 0</Ionicon>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                </CardItem>
                <CardItem>
                  <View style={styles.container}>
                    {this._renderButton("Editar", () =>
                      this.setState({ visibleModal: 1 })
                    )}
                    <Modal isVisible={this.state.visibleModal === 1}>
                      {this._renderModalContent()}
                    </Modal>
                  </View>
                </CardItem>
              </Card>
            }
          />
        </View>
      </Container>
    );
  }
}
