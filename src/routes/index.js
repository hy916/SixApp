import React from 'react';
import { Icon, Button } from '@uiw/react-native';

import Home from '../pages/Home';
import TransportHome from '../pages/TransportHome';
import SignIn from '../pages/SignIn';
import DevOptions from '../pages/DevOptions';
import MyHomeSetting from '../pages/MyHome/Setting';
import OrderHome from '../pages/OrderHome';
import { xiangji } from '../components/icons/signin';

headerBackTitle = '返回';

export const stackPageData = [
  //登录页面
  {
    name: 'SignIn',
    component: SignIn,
    options: {
      headerShown: false,
      header: () => null,
    },
  },

  {
    name: 'Home',
    component: Home,
    options: ({ navigation, route }) => {
      let tabName = 'TransportHome';
      if (route.state) {
        const { routeNames, index } = route.state;
        tabName = routeNames.filter((item, key) => key == index)[0];
      }
      return {
        headerBackTitleVisible: false,
        headerBackImage: () => <Image />,
        title: !tabName ? '微信(66)' : tabName == 'TransportHome' ? '微信(66)' : tabName == 'Find' ? '发现' : tabName == 'OrderHome' ? '通讯录' : '',
        headerStyle: { backgroundColor: tabName == 'MyHome' ? '#fff' : '#f2f2f2' },
        headerTintColor: '#333333',
        headerRight: () =>
          tabName == 'TransportHome' ? (
            <Button bordered={false} style={{ paddingRight: 20 }} onPress={() => navigation.navigate('')}>
              <Icon name="plus-circle-o" size={22} fill="#333333" />
            </Button>
          ) : tabName == 'OrderHome' ? (
            <Button bordered={false} style={{ paddingRight: 20 }} onPress={() => navigation.navigate('')}>
              <Icon name="user-add" size={22} fill="#333333" />
            </Button>
          ) : tabName != 'Find' ? (
            <Button bordered={false} style={{ paddingRight: 20 }} onPress={() => navigation.navigate('')}>
              <Icon xml={xiangji} size={22} fill="#333333" />
            </Button>
          ) : null,
      };
    },
  },

  {
    name: 'OrderHome',
    component: OrderHome,
    options: {
      title: '通讯录',
      headerStyle: { backgroundColor: '#f2f2f2' },
      headerTintColor: '#333333',
      headerRight: () => (
        <Button bordered={false} style={{ paddingRight: 20 }} onPress={() => navigation.navigate('')}>
          <Icon name="plus-circle-o" size={22} fill="#333333" />
        </Button>
      ),
    },
  },

  {
    name: 'DevOptions',
    component: DevOptions,
    options: {
      headerBackTitle,
      title: '其他',
      headerStyle: { backgroundColor: '#6395f5' },
      headerTintColor: '#ffffff',
    },
  },
  {
    name: 'MyHomeSetting',
    component: MyHomeSetting,
    options: {
      headerBackTitle,
      title: '设置',
      headerStyle: { backgroundColor: '#6395f5' },
      headerTintColor: '#ffffff',
    },
  },
];
