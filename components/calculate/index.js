import React, { Component } from 'react';
import { Dimensions, StyleSheet, View, Text, Slider } from 'react-native';
import { Container, Header, Content, List, ListItem, Left, Right, Button, Icon, Card, CardItem, Thumbnail, Body, Item, Form, Input, Label, CheckBox } from 'native-base';
import { DrawerNavigator } from 'react-navigation'; // 1.0.0-beta.14
import MapView from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import styles from "./styles";

const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 19.432608;
const LONGITUDE = -99.133209;
const LATITUDE_DELTA = 1;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

//Move to .env or similar
const GM_APIKEY = 'AIzaSyCv0PqqkTJLRxyEAB6FSwXqVJ9ySsy13v0';

class Calculate extends Component {

  constructor(props) {
    super(props);

    this.state = {
      coordinates: [],
      distance: 0,
      duration: 0,
      costKm: 30
    };
    this.mapView = null;
  }

  getVal(val){
    // console.warn(val);
    this.setState({
      costKm: val,
    });
  }

  onMapPress = (e) => {
    this.setState({
      coordinates: [
        ...this.state.coordinates,
        e.nativeEvent.coordinate,
      ],
    });
  }

  render() {
    return (
      <Container>
          <Content>

            <Card>
              <CardItem>
                <Left>
                  <Body>
                    <Text style={styles.title}>Datos del Cliente</Text>
                      <Form style={{flexDirection: 'row'}}>
                        <Item style={{width: 150}}>
                          <Input placeholder="Nombre" />
                        </Item>
                        <Item style={{width: 150}}>
                          <Input placeholder="Telefono" />
                        </Item>
                      </Form>

                      <Form style={{flexDirection: 'row'}}>
                        <Item style={{width: 150}}>
                          <Input placeholder="Mail" />
                        </Item>
                        <Item style={{width: 150}}>
                          <Input placeholder="Grupo" />
                        </Item>
                      </Form>
                      <ListItem>
                       <CheckBox checked={false} />
                       <Body>
                         <Text> AGREGAR A AGENDA</Text>
                       </Body>
                      </ListItem>
                  </Body>
                </Left>
              </CardItem>
            </Card>


            <Card>
              <CardItem>
                <Left>
                  <Body>
                    <Text style={styles.title}>Datos del Viaje</Text>
                      <Form style={{flexDirection: 'row'}}>
                        <Item style={{width: 150}}>
                          <Input placeholder="Origen" />
                        </Item>
                        <Item style={{width: 150}}>
                          <Input placeholder="Destino" />
                        </Item>
                      </Form>

                      <Form style={{flexDirection: 'row'}}>
                        <Item style={{width: 150}}>
                          <Input placeholder="Otro" />
                        </Item>
                        <Item style={{width: 150}}>
                          <Input placeholder="Motivo" />
                        </Item>
                      </Form>
                      <Form style={{flexDirection: 'row'}}>
                        <Item style={{width: 150}}>
                          <Input placeholder="Fecha Salida" />
                        </Item>
                        <Item style={{width: 150}}>
                          <Input placeholder="Fecha regreso" />
                        </Item>
                      </Form>
                      <ListItem>
                       <CheckBox checked={false} />
                       <Body>
                         <Text> FRA</Text>
                       </Body>
                      </ListItem>
                  </Body>
                </Left>
              </CardItem>
            </Card>

            <Card>
              <CardItem>
                <Left>
                  <Thumbnail source={{uri: 'Image URL'}} />
                  <Body>
                    <Text style={styles.title}>SELECCIONA LA RUTA</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem cardBody>
                <MapView
                  initialRegion={{
                    latitude: LATITUDE,
                    longitude: LONGITUDE,
                    latitudeDelta: LATITUDE_DELTA,
                    longitudeDelta: LONGITUDE_DELTA,
                  }}
                  style={styles.mapView}
                  ref={c => this.mapView = c}
                  onPress={this.onMapPress}
                >
                  {this.state.coordinates.map((coordinate, index) =>
                    <MapView.Marker key={`coordinate_${index}`} coordinate={coordinate} />
                  )}
                  {(this.state.coordinates.length >= 2) && (
                    <MapViewDirections
                      origin={this.state.coordinates[0]}
                      waypoints={ (this.state.coordinates.length > 2) ? this.state.coordinates.slice(1, -1): null}
                      destination={this.state.coordinates[this.state.coordinates.length-1]}
                      apikey={GM_APIKEY}
                      region="ES"
                      strokeWidth={3}
                      strokeColor="hotpink"
                      onReady={(result) => {
                        this.mapView.fitToCoordinates(result.coordinates, {
                          edgePadding: {
                            right: (width / 20),
                            bottom: (height / 20),
                            left: (width / 20),
                            top: (height / 20),
                          }
                        });
                        console.log('Distance:');
                        console.log(result.coordinates);
                        console.log(result.distance);
                        console.log(result.duration);
                        this.setState({
                          distance: result.distance,
                          duration: result.duration
                        });
                      }}
                      onError={(errorMessage) => {
                        console.log('GOT AN ERROR');
                      }}
                    />
                  )}
                </MapView>
              </CardItem>

              <CardItem>
                <Left>
                  <Text style={styles.distanceText}>Distancia: </Text>
                  <Text style={styles.distanceText}>{this.state.distance} Km</Text>
                </Left>
              </CardItem>
            </Card>

            <Card>
              <CardItem>
                <Content>
                  <Left>
                    <Text style={styles.priceText}>Precio por Km: ${this.state.costKm}</Text>
                  </Left>
                  <Slider
                    style={styles.slider}
                    step={1}
                    minimumValue={1}
                    maximumValue={100}
                    value={this.state.costKm}
                    onValueChange={val => this.setState({ costKm: val })}
                  />
                </Content>
              </CardItem>
            </Card>

            <Card>
              <CardItem>
                <Content>
                  <Left>
                    <Text style={styles.totalText}>Costo del Viaje</Text>
                    <Text style={styles.totalPrice}>$ {(this.state.costKm)*(this.state.distance)}</Text>
                  </Left>
                </Content>
              </CardItem>
            </Card>
          </Content>

          <Button block success style={styles.confirmationButton}>
            <Text style={styles.confirmationText}>RESERVAR VIAJE</Text>
          </Button>

        </Container>
    );
  }
}

export default Calculate;
