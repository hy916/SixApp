import React, { Component } from 'react';
import { View, Text, SafeAreaView, StyleSheet, Image, Dimensions, ScrollView } from 'react-native';
import { Avatar, Icon, List } from '@uiw/react-native';
import { getUniqueID, getSystemName } from 'react-native-device-info';
import { penyouquan, saoyisao, yaoyiyao, souyisou, gouwu, youxi, kanyikan, xiaochengxu, fujin, shiping } from '../../components/icons/signin';

export default class MyScreen extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView>
          <List.Item style={{ borderBottomWidth: 0 }} extra={<Icon name="right" fill="#abb0b5" size={14} />} size="default" paddingLeft={15} onPress={() => {}}>
            <View style={{ flexDirection: 'row' }}>
              <Icon xml={penyouquan}></Icon>
              <Text style={{ fontSize: 16, marginLeft: 10, marginTop: 5 }}>朋友圈</Text>
            </View>
          </List.Item>
          <View style={{ marginVertical: 10 }}>
            <List.Item
              style={{ borderBottomWidth: 0 }}
              extra={<Icon name="right" fill="#abb0b5" size={14} />}
              size="default"
              paddingLeft={15}
              onPress={() => {}}
            >
              <View style={{ flexDirection: 'row' }}>
                <Icon xml={shiping}></Icon>
                <Text style={{ fontSize: 16, marginLeft: 10, marginTop: 5 }}>视频号</Text>
              </View>
            </List.Item>
          </View>
          <List.Item
            style={{ borderBottomWidth: 0 }}
            extra={<Icon name="right" fill="#abb0b5" size={14} />}
            size="default"
            paddingLeft={15}
            onPress={() => {}}
            style={{ borderBottomWidth: 0.3 }}
          >
            <View style={{ flexDirection: 'row' }}>
              <Icon xml={saoyisao}></Icon>
              <Text style={{ fontSize: 16, marginLeft: 10, marginTop: 5 }}>扫一扫</Text>
            </View>
          </List.Item>
          <List.Item style={{ borderBottomWidth: 0 }} extra={<Icon name="right" fill="#abb0b5" size={14} />} size="default" paddingLeft={15} onPress={() => {}}>
            <View style={{ flexDirection: 'row' }}>
              <Icon xml={yaoyiyao}></Icon>
              <Text style={{ fontSize: 16, marginLeft: 10, marginTop: 5 }}>摇一摇</Text>
            </View>
          </List.Item>
          <View style={{ marginVertical: 10 }}>
            <List.Item
              style={{ borderBottomWidth: 0 }}
              extra={<Icon name="right" fill="#abb0b5" size={14} />}
              size="default"
              paddingLeft={15}
              onPress={() => {}}
              style={{ borderBottomWidth: 0.3 }}
            >
              <View style={{ flexDirection: 'row' }}>
                <Icon xml={kanyikan}></Icon>
                <Text style={{ fontSize: 16, marginLeft: 10, marginTop: 5 }}>看一看</Text>
              </View>
            </List.Item>
            <List.Item
              style={{ borderBottomWidth: 0 }}
              extra={<Icon name="right" fill="#abb0b5" size={14} />}
              size="default"
              paddingLeft={15}
              onPress={() => {}}
            >
              <View style={{ flexDirection: 'row' }}>
                <Icon xml={souyisou}></Icon>
                <Text style={{ fontSize: 16, marginLeft: 10, marginTop: 5 }}>搜一搜</Text>
              </View>
            </List.Item>
          </View>
          <List.Item style={{ borderBottomWidth: 0 }} extra={<Icon name="right" fill="#abb0b5" size={14} />} size="default" paddingLeft={15} onPress={() => {}}>
            <View style={{ flexDirection: 'row' }}>
              <Icon xml={fujin}></Icon>
              <Text style={{ fontSize: 16, marginLeft: 10, marginTop: 5 }}>附近的人</Text>
            </View>
          </List.Item>
          <View style={{ marginVertical: 10 }}>
            <List.Item
              style={{ borderBottomWidth: 0 }}
              extra={<Icon name="right" fill="#abb0b5" size={14} />}
              size="default"
              paddingLeft={15}
              onPress={() => {}}
              style={{ borderBottomWidth: 0.3 }}
            >
              <View style={{ flexDirection: 'row' }}>
                <Icon xml={gouwu}></Icon>
                <Text style={{ fontSize: 16, marginLeft: 10, marginTop: 5 }}>购物</Text>
              </View>
            </List.Item>
            <List.Item
              style={{ borderBottomWidth: 0 }}
              extra={<Icon name="right" fill="#abb0b5" size={14} />}
              size="default"
              paddingLeft={15}
              onPress={() => {}}
            >
              <View style={{ flexDirection: 'row' }}>
                <Icon xml={youxi}></Icon>
                <Text style={{ fontSize: 16, marginLeft: 10, marginTop: 5 }}>游戏</Text>
              </View>
            </List.Item>
          </View>
          <List.Item style={{ borderBottomWidth: 0 }} extra={<Icon name="right" fill="#abb0b5" size={14} />} size="default" paddingLeft={15} onPress={() => {}}>
            <View style={{ flexDirection: 'row' }}>
              <Icon xml={xiaochengxu}></Icon>
              <Text style={{ fontSize: 16, marginLeft: 10, marginTop: 5 }}>小程序</Text>
            </View>
          </List.Item>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
