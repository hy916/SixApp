import React, { Component } from 'react';
import { View, Text, SafeAreaView, StatusBar, StyleSheet, Image, Dimensions, TextInput } from 'react-native';
import { Avatar, Icon, List, SwipeAction } from '@uiw/react-native';
import { getUniqueID, getSystemName } from 'react-native-device-info';

export default class MyScreen extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar barStyle="light-content" />
        <View style={{ padding: 5 }}>
          <View style={styles.header}>
            <Icon name="search" size={18} color="#bfbfc0" style={{ marginRight: 10 }} />
            <Text style={{ color: '#bfbfc0', fontSize: 18, fontWeight: '400' }}>搜索</Text>
          </View>
        </View>
        <View style={{ paddingBottom: 10, paddingLeft: 4, backgroundColor: '#fff', borderTopWidth: 0.5, borderTopColor: '#bfbfc0' }}>
          <View style={{ flexDirection: 'row', paddingTop: 10 }}>
            <Icon name="laptop" size={18} color="#818383" style={{ marginHorizontal: 20 }} />
            <Text style={{ color: '#818383', marginLeft: 2 }}>Mac 微信已登录</Text>
          </View>
        </View>
        <List
          style={{ borderTopWidth: 0.5, borderTopColor: '#bfbfc0' }}
          flat={true}
          data={[
            { date: '8:12', title: '核弹项目-前端对接群', des: '胡汉仨：{“id” : 1 }' },
            { date: '8:10', title: '喝咖啡写BUG群', des: '杨骊威：[图片]' },
            { date: '星期四', title: '相亲相爱一家人', des: '妈妈：哈哈' },
            { date: '昨天', title: '天天五黑群', des: '儿砸：来开黑' },
            { date: '2020/8/10', title: '吃鸡群', des: '我：[捂脸]' },
            { date: '8:12', title: '核弹项目-前端对接群', des: '胡汉仨：{“id” : 1 }' },
            { date: '8:10', title: '喝咖啡写BUG群', des: '杨骊威：[图片]' },
            { date: '星期四', title: '相亲相爱一家人', des: '妈妈：哈哈' },
            { date: '昨天', title: '天天五黑群', des: '儿砸：来开黑' },
            { date: '2020/8/10', title: '吃鸡群', des: '我：[捂脸]' },
          ]}
          renderItem={({ item, index }) => {
            return (
              <SwipeAction
                autoClose
                style={{ backgroundColor: 'transparent', marginBottom: 0 }}
                right={[
                  // {
                  //   text: '详情',
                  //   onPress: () => this.goFrequentList(item.validGoodsIds),
                  //   style: { backgroundColor: '#F5F5F5', color: 'black' },
                  // },
                  {
                    text: '编辑',
                    onPress: () => this._edit(item),
                    style: { backgroundColor: 'orange', color: 'white' },
                  },
                  {
                    text: '删除',
                    onPress: () => this._deleteRoute(item.id),
                    style: { backgroundColor: '#eb4f46', color: 'white' },
                  },
                ]}
                onOpen={() => {
                  this.setState({ visiavle: true });
                }}
                onClose={() => this.setState({ visiavle: false })}
                key={index}
              >
                <List.Item key={index} extra={<Text style={{ color: '#bfbfc0' }}>{item.date}</Text>} size="small" paddingLeft={8}>
                  <View style={{ flexDirection: 'row' }}>
                    <Image style={styles.tinyLogo} source={require('../../utils/img/07.png')}></Image>
                    <View style={{ flexDirection: 'column', marginLeft: 5, marginTop: 7 }}>
                      <Text style={{ fontSize: 16 }}>{item.title}</Text>
                      <Text style={{ fontSize: 14, color: '#bfbfc0', paddingTop: 5 }}>{item.des}</Text>
                    </View>
                  </View>
                </List.Item>
              </SwipeAction>
            );
          }}
        />
        {/* <View style={{ backgroundColor: '#EEEEF0', borderRadius: 5, flexDirection: 'row', alignItems: 'center' }}>
          <Icon name='search' size={18} style={{ marginHorizontal: 10, }}></Icon>
          <TextInput
            style={styles.searchInput}
            placeholder="搜索"
            maxLength={11}
            returnKeyType="done"
            keyboardType="numeric"
            placeholderTextColor="#8C8B91"
            onChangeText={async (text) => {
              update({ searchText: text });
              this.timer = setTimeout(async () => {
                await getcarOwnerBaseSelectList({ phone: text, page: 1, pageSize: 20 });
                if (text == '') {
                  await getcarOwnerBaseSelectList({ page: 1, pageSize: 20 });
                }
              }, 500);
            }}
          />
        </View> */}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    margin: 5,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchInput: {
    flex: 1,
    height: 35,
    color: '#111',
    paddingTop: 0,
    paddingBottom: 0,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
});
