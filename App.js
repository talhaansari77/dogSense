import {View, Text, LogBox, StatusBar} from 'react-native';
import React from 'react';
import RootNavigator from './src/routes';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import DetailScreen from './src/screens/Main/DetailScreen/DetailScreen';
import Activities from './src/screens/Main/Activities/Activities';

LogBox.ignoreLogs(['VirtualizedLists', 'Warning:...']);
LogBox.ignoreAllLogs();

const App = () => {

  return (
    <Provider store={store}>
      {/* <RootNavigator /> */}
      <Activities/>
      <StatusBar barStyle="light-content" translucent={true} backgroundColor="transparent" />
    </Provider>
  );
};

export default App;
