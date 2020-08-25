import React, { Component } from 'react';
import { View, Text, SafeAreaView, StyleSheet, Image, Dimensions } from 'react-native';
import { Avatar } from '@uiw/react-native';
import { DeviceInfo } from 'react-native-device-info';

export default class MyScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SafeAreaView>
        <View style={{ padding: 5 }}>
          <Avatar size={40} shape="circle" src={require('../../utils/img/01.png')} />
          <Text>风之子</Text>
          <Text></Text>
        </View>
      </SafeAreaView>
    );
  }
}
