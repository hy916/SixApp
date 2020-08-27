// import React, { Component } from 'react';
// import { View, Text, SafeAreaView, StyleSheet, Image, Dimensions } from 'react-native';
// import { Avatar,Icon } from '@uiw/react-native';

// const BadgeData = {
//   data: [
//     {
//       icon: 'icon1',
//       title: 'Alisa分享',
//     },
//     {
//       icon: 'icon2',
//       title: '开心网分享',
//     },
//     {
//       icon: 'icon3',
//       title: 'QQ分享',
//     },
//     {
//       icon: 'icon4',
//       title: 'QQ空间分享',
//     },
//     {
//       icon: 'icon5',
//       title: 'QQ微博分享',
//     },
//     {
//       icon: 'icon6',
//       title: '人人网分享',
//     },
//     {
//       icon: 'icon7',
//       title: '微信分享',
//     },
//     {
//       icon: 'icon8',
//       title: '微博分享',
//     },
//     {
//       icon: 'icon9',
//       title: '朋友圈分享',
//     },
//     {
//       icon: 'icon10',
//       title: '短信分享',
//     },
//   ],
// };
// //屏幕的宽度
// const width = Dimensions.get('window').width;
// const height = Dimensions.get('window').height;
// //定义一些全局的变量
// const cols = 3;
// const boxW = 100;
// const vMargin = (width - cols * boxW) / (cols + 1);
// const hMargin = 25;

// // 返回所有的包
// renderAllBadge = () => {
//   // 定义数组装所有的子组件
//   let allBadge = [];
//   // 遍历json数据
//   for (var i = 0; i < BadgeData.data.length; i++) {
//     // 取出每一个数据对象
//     var badge = BadgeData.data[i];
//     // 装入数据
//     allBadge.push(
//       <View key={i} style={styles.outViewStyle}>
//         <Image style={styles.iconStyle} source={{ uri: badge.icon }} />
//         <Text style={styles.mainTitleStyle}>{badge.title}</Text>
//       </View>,
//     );
//   }
//   // 返回数组
//   return allBadge;
// };

// export default class MyScreen extends Component {
//   render() {
//     return (
//       <SafeAreaView>
//         <View style={styles.container}>
//           {/*返回6个包*/}
//           {renderAllBadge()}
//         </View>
//       </SafeAreaView>
//     );
//   }
// }

// //设置样式
// const styles = StyleSheet.create({
//   container: {
//     //    确定主轴的方向
//     flexDirection: 'row',
//     //    一行显示不完的话换行显示
//     flexWrap: 'wrap',
//     //    换行以后,
//     backgroundColor: '#F5FCFF',
//     height: '100%',
//   },
//   outViewStyle: {
//     //    设置侧轴的对齐方式
//     alignItems: 'center',
//     width: boxW,
//     height: boxW,
//     marginLeft: vMargin,
//     marginTop: hMargin,
//   },
//   iconStyle: {
//     width: 80,
//     height: 80,
//     marginBottom: 5,
//   },
// });

import React from 'react';
import { View, Text, SectionList, StyleSheet } from 'react-native';
import { Avatar, Icon } from '@uiw/react-native';

const HEIGHT = 50; // renderItem提前占据高度

export default class extends React.Component {
  state = {
    sections: [
      { title: '⭐️ 星标朋友', data: ['张三', 'item2', '张三', '张三'] },
      {
        title: 'A',
        data: ['item1', 'item2', 'item1', 'item2', 'item1', 'item2', 'item1', 'item2', 'item1', 'item2', 'item1', 'item2', 'item1', 'item2', 'item1', 'item2'],
      },
      { title: 'B', data: ['item3', 'item4'] },
      { title: 'C', data: ['item5', 'item6'] },
      { title: 'D', data: ['item5', 'item6'] },
      { title: 'E', data: ['item5', 'item6'] },
      { title: 'F', data: ['item5', 'item6'] },
      { title: 'G', data: ['item5', 'item6'] },
      { title: 'H', data: ['item5', 'item6'] },
      { title: 'I', data: ['item5', 'item6'] },
      { title: 'J', data: ['item5', 'item6'] },
      { title: 'K', data: ['item5', 'item6'] },
      { title: 'X', data: ['item5', 'item6'] },
      { title: 'Y', data: ['item5', 'item6'] },
      { title: 'Z', data: ['item5', 'item6'] },
    ],
    currentIndex: null,
  };

  _onScroll = (event) => {
    const { _frames } = this.refs._sectionlist._wrapperListRef._listRef;
    const { contentOffset } = event.nativeEvent;
    let titleArr = [];
    for (let i in _frames) {
      if (_frames[i].offset < contentOffset.y + 1) {
        titleArr.unshift(i.replace(':header', ''));
      }
    }
    this.state.sections[titleArr[0] * 1] && this.setState({ currentIndex: this.state.sections[titleArr[0] * 1].title });
  };
  _renderItem = ({ item, index, section }) => {
    return (
      <View key={index} style={[{ height: HEIGHT }, { justifyContent: 'center', backgroundColor: '#ffffff', padding: 5 }]}>
        <Text>{item}</Text>
      </View>
    );
  };

  _keyExtractor = (item, index) => index + '';
  /** !important **/
  _getItemLayout = (data, index) => ({ length: HEIGHT, offset: HEIGHT * index, index });
  _renderSectionHeader = ({ section: { title } }) => <Text style={{ fontWeight: 'bold', backgroundColor: '#f2f2f2', padding: 5 }}>{title}</Text>;
  _ItemSeparatorComponent = () => <View style={{ height: 1, backgroundColor: '#d4d4d4', marginLeft: 5 }} />;

  render() {
    return (
      <View>
        <View style={styles.header}>
          <Icon name="search" size={18} color="#bfbfc0" style={{ marginRight: 10 }} />
          <Text style={{ color: '#bfbfc0', fontSize: 18, fontWeight: '400' }}>搜索</Text>
        </View>
        <View style={{ justifyContent: 'center', flexDirection: 'row' }}>
          <SectionList
            ref={'_sectionlist'}
            style={{ width: '100%' }}
            stickySectionHeadersEnabled={true}
            showsVerticalScrollIndicator={false}
            sections={this.state.sections}
            onScroll={this._onScroll}
            renderItem={this._renderItem}
            keyExtractor={this._keyExtractor}
            getItemLayout={this._getItemLayout}
            renderSectionHeader={this._renderSectionHeader}
            ItemSeparatorComponent={this._ItemSeparatorComponent}
          />
          <View style={{ marginTop: '7.5%', height: '80%', justifyContent: 'center', backgroundColor: '#FFF' }}>
            {Array.apply(null, Array(26)).map((a, i) => {
              return (
                <View
                  key={i}
                  hitSlop={{ top: 10, left: 10, bottom: 10, right: 10 }}
                  onStartShouldSetResponder={() => this._handleScrollTo(String.fromCharCode(65 + i))}
                  style={[
                    this.state.currentIndex === String.fromCharCode(65 + i) && { backgroundColor: '#d4d4d4' },
                    { justifyContent: 'center', alignItems: 'center', width: 17, height: 17, borderRadius: 8.5 },
                  ]}
                >
                  <Text style={{ textAlign: 'center', color: '#007aff' }}>{String.fromCharCode(65 + i)}</Text>
                </View>
              );
            })}
          </View>
        </View>
      </View>
    );
  }

  _handleScrollTo = (title) => {
    let sectionIndex = this.state.sections.findIndex((pre) => {
      return pre.title === title;
    });
    if (sectionIndex > -1) {
      this.refs._sectionlist.scrollToLocation({ sectionIndex: sectionIndex - 1, itemIndex: -1 });
    }
  };
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    margin: 10,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
