import {View, Text, LogBox, StatusBar} from 'react-native';
import React from 'react';
import RootNavigator from './src/routes';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import DetailScreen from './src/screens/Main/DetailScreen/DetailScreen';
import Activities from './src/screens/Main/Activities/Activities';
import CurrentMood from './src/screens/Main/CurrentMood/CurrentMood';
import ReferFriend from './src/screens/Main/ReferFriend/ReferFriend';
import LoginScreen from './src/screens/Auth/Login/LoginScreen';
import TestScreen from './src/screens/Main/TestScreen/TestScreen';
import UpdateAccount from './src/screens/Main/UpdateAccount/UpdateAccount';

LogBox.ignoreLogs(['VirtualizedLists', 'Warning:...']);
LogBox.ignoreAllLogs();

const App = () => {

  return (
    <Provider store={store}>
      {/* <RootNavigator /> */}
      {/* <Activities/> */}
      {/* <DetailScreen/> */}
    {/* <CurrentMood/> */}
    <LoginScreen/>
    {/* <TestScreen/> */}
    {/* <UpdateAccount/> */}
    <StatusBar barStyle="light-content" translucent={true} backgroundColor="transparent" />
    </Provider>
  );
};

export default App;
