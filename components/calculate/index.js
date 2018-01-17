// import React from 'react';
import { Container, Header, Content, List, ListItem, Left, Right, Button, Icon, Card, CardItem, Thumbnail, Body, Item, Input } from 'native-base';
import { View, Text, Slider } from 'react-native';
import { DrawerNavigator } from 'react-navigation'; // 1.0.0-beta.14

import React, { Component } from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 19.432608;
const LONGITUDE = -99.133209;
const LATITUDE_DELTA = 1;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

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
                  <Thumbnail source={{uri: 'Image URL'}} />
                  <Body>
                    <Text>SELECCIONA LA RUTA</Text>
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
                  style={{height: 200, width: null, flex: 1}}
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
                      mode="transit"
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
                  <Text>Distancia: </Text>
                  <Text>{this.state.distance} Km</Text>
                </Left>
                <Right>
                  <Text>Tiempo: </Text>
                  <Text>{this.state.duration} hrs</Text>
                </Right>
              </CardItem>
            </Card>

            <Card>
              <CardItem>
                <Content>
                  <Left>
                    <Text>Precio por Km: ${this.state.costKm}</Text>
                  </Left>
                  <Slider
                    style={{ width: 300 }}
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
                  <Text>Costo deL Viaje</Text>
                  <Text>$ {(this.state.costKm)*(this.state.distance)}</Text>
                </Content>
              </CardItem>
            </Card>
          </Content>

          <Button block success style={{ width: 300, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Reservar Viaje</Text>
          </Button>

        </Container>
    );
  }
}

export default Calculate;
