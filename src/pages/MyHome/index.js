import React, { Component } from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import { Button, List, Icon, Avatar } from '@uiw/react-native';
import { erweima, weixinzhifu, shoucang, xiangce, kabao, biaoqin, shezhi } from '../../components/icons/signin';

export default class MyScreen extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <SafeAreaView>
        <View style={{ backgroundColor: '#fff', height: '25%', marginBottom: 10 }}>
          <View style={{ flexDirection: 'row', marginLeft: 25, marginTop: 30 }}>
            <Avatar size={65} shape="square" rounded={5} src={require('../../utils/img/01.png')} />
            <View style={{ marginLeft: 20 }}>
              <Text style={{ fontSize: 20, fontWeight: '600', marginTop: 5 }}>Poison。</Text>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                <Text style={{ fontSize: 16, color: '#8a8a8a' }}>微信号：HY1106</Text>
                <View style={{ flexDirection: 'row', marginTop: 3, marginLeft: '33%' }}>
                  <Icon xml={erweima} fill="#abb0b5" size={15} />
                  <Icon style={{ marginLeft: 15 }} name="right" fill="#abb0b5" size={14} />
                </View>
              </View>
            </View>
          </View>
        </View>
        <List.Item style={{ borderBottomWidth: 0 }} extra={<Icon name="right" fill="#abb0b5" size={14} />} size="default" paddingLeft={15} onPress={() => {}}>
          <View style={{ flexDirection: 'row' }}>
            <Icon xml={weixinzhifu} size={25}></Icon>
            <Text style={{ fontSize: 16, marginLeft: 10, marginTop: 5 }}>支付</Text>
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
              <Icon xml={shoucang} size={25}></Icon>
              <Text style={{ fontSize: 16, marginLeft: 10, marginTop: 5 }}>收藏</Text>
            </View>
          </List.Item>

          <List.Item
            style={{ borderBottomWidth: 0 }}
            extra={<Icon name="right" fill="#abb0b5" size={14} />}
            size="default"
            paddingLeft={15}
            onPress={() => {}}
            style={{ borderBottomWidth: 0.3 }}
          >
            <View style={{ flexDirection: 'row' }}>
              <Icon xml={xiangce} size={23}></Icon>
              <Text style={{ fontSize: 16, marginLeft: 10, marginTop: 5 }}>相册</Text>
            </View>
          </List.Item>

          <List.Item
            style={{ borderBottomWidth: 0 }}
            extra={<Icon name="right" fill="#abb0b5" size={14} />}
            size="default"
            paddingLeft={15}
            onPress={() => {}}
            style={{ borderBottomWidth: 0.3 }}
          >
            <View style={{ flexDirection: 'row' }}>
              <Icon xml={kabao} size={25}></Icon>
              <Text style={{ fontSize: 16, marginLeft: 10, marginTop: 5 }}>卡包</Text>
            </View>
          </List.Item>

          <List.Item style={{ borderBottomWidth: 0 }} extra={<Icon name="right" fill="#abb0b5" size={14} />} size="default" paddingLeft={15} onPress={() => {}}>
            <View style={{ flexDirection: 'row' }}>
              <Icon xml={biaoqin} size={23}></Icon>
              <Text style={{ fontSize: 16, marginLeft: 10, marginTop: 5 }}>表情</Text>
            </View>
          </List.Item>
        </View>

        <List.Item
          style={{ borderBottomWidth: 0 }}
          extra={<Icon name="right" fill="#abb0b5" size={14} />}
          size="default"
          paddingLeft={15}
          onPress={() => navigation.replace('SignIn')}
        >
          <View style={{ flexDirection: 'row' }}>
            <Icon xml={shezhi} size={25}></Icon>
            <Text style={{ fontSize: 16, marginLeft: 10, marginTop: 5 }}>设置</Text>
          </View>
        </List.Item>
      </SafeAreaView>
      //  <List
      //   flat={true}
      //   data={[
      //     { title: '企业开票' },
      //     { title: '我的熟车' },
      //     { title: '设置', onPress: () => navigation.navigate('MyHomeSetting') },
      //     { title: '退出登录', onPress: () => navigation.replace('SignIn') },
      //   ]}
      //   renderItem={({ item, index }) => {
      //     return (
      //       <List.Item
      //         key={index}
      //         extra={<Icon name="right" fill="#abb0b5" size={14} />}
      //         size="large"
      //         paddingLeft={15}
      //         style={{ borderBottomWidth: 0, }}
      //         onPress={item.onPress || null}
      //       >
      //         <View>
      //           <Text>{item.title}</Text>
      //         </View>
      //       </List.Item>
      //     )
      //   }}
      // />
    );
  }
}
