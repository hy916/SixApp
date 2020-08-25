import React, { Component } from 'react';
import { View, Text, SafeAreaView, StyleSheet, Image, Dimensions } from 'react-native';
import { Avatar } from '@uiw/react-native';

const BadgeData = {
  data: [
    {
      icon: 'icon1',
      title: 'Alisa分享',
    },
    {
      icon: 'icon2',
      title: '开心网分享',
    },
    {
      icon: 'icon3',
      title: 'QQ分享',
    },
    {
      icon: 'icon4',
      title: 'QQ空间分享',
    },
    {
      icon: 'icon5',
      title: 'QQ微博分享',
    },
    {
      icon: 'icon6',
      title: '人人网分享',
    },
    {
      icon: 'icon7',
      title: '微信分享',
    },
    {
      icon: 'icon8',
      title: '微博分享',
    },
    {
      icon: 'icon9',
      title: '朋友圈分享',
    },
    {
      icon: 'icon10',
      title: '短信分享',
    },
  ],
};
//屏幕的宽度
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
//定义一些全局的变量
const cols = 3;
const boxW = 100;
const vMargin = (width - cols * boxW) / (cols + 1);
const hMargin = 25;

// 返回所有的包
renderAllBadge = () => {
  // 定义数组装所有的子组件
  let allBadge = [];
  // 遍历json数据
  for (var i = 0; i < BadgeData.data.length; i++) {
    // 取出每一个数据对象
    var badge = BadgeData.data[i];
    // 装入数据
    allBadge.push(
      <View key={i} style={styles.outViewStyle}>
        <Image style={styles.iconStyle} source={{ uri: badge.icon }} />
        <Text style={styles.mainTitleStyle}>{badge.title}</Text>
      </View>,
    );
  }
  // 返回数组
  return allBadge;
};

export default class MyScreen extends Component {
  render() {
    return (
      <SafeAreaView>
        <View style={styles.container}>
          {/*返回6个包*/}
          {renderAllBadge()}
        </View>
      </SafeAreaView>
    );
  }
}

//设置样式
const styles = StyleSheet.create({
  container: {
    //    确定主轴的方向
    flexDirection: 'row',
    //    一行显示不完的话换行显示
    flexWrap: 'wrap',
    //    换行以后,
    backgroundColor: '#F5FCFF',
    height: '100%',
  },
  outViewStyle: {
    //    设置侧轴的对齐方式
    alignItems: 'center',
    width: boxW,
    height: boxW,
    marginLeft: vMargin,
    marginTop: hMargin,
  },
  iconStyle: {
    width: 80,
    height: 80,
    marginBottom: 5,
  },
});
