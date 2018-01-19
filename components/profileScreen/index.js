import React from 'react';
import { View, Text, Image } from 'react-native';
import { DrawerNavigator } from 'react-navigation'; // 1.0.0-beta.14


const male = require('../../images/male.png');

const ProfileScreen = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Image style={{ height: 100, width: 100 }} source={male} />
    <Text>NOMBRE:</Text>
    <Text>Jose Ramon</Text>
    <Text>_________________________</Text>
    <Text>APELLIDO:</Text>
    <Text>Zuniga</Text>
    <Text>_________________________</Text>
    <Text>EMAIL:</Text>
    <Text>jose@gmail.com</Text>
    <Text>_________________________</Text>
    <Text>CUENTA:</Text>
    <Text>Standard</Text>
  </View>
);

export default ProfileScreen;
