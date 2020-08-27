import { Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { userLogin } from '../services/users';
import Global from '../global';

export default {
  state: {
    userData: null,
    remember: false, // Whether to remember password
    formData: {
      username: '腻霸霸🍎',
      password: '666666',
    },
  },
  reducers: {
    update: (state, payload) => ({ ...state, ...payload }),
    updateForm: (state, payload) => ({
      ...state,
      formData: { ...state.formData, ...payload },
    }),
  },
  effects: (dispatch) => ({
    // 登录
    async login(_, { users, global }) {
      const data = users.formData;
      if (data.password != '666666') {
        Alert.alert('用户名或密码不正确', '', [{ text: '确定' }]);
        return;
      }
      if (Global.navigation) {
        Global.navigation.replace('Home');
      } else if (data && data.message) {
        Alert.alert(`Login failed - ${data.error}`, data.message);
      }
    },
    async logout() {
      await AsyncStorage.removeItem('token');
      await AsyncStorage.removeItem('userData');
      dispatch.global.update({ token: null });
      dispatch.users.update({ userData: null });
      Global.navigation.navigate('SignIn');
    },
  }),
};
