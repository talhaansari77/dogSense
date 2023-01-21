import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../../screens/Auth/Login/LoginScreen';
import ForgetPassword from '../../screens/Auth/ForgetPassword/ForgetPassword';
import Register from '../../screens/Auth/Register/Register';
import SignOutScreen from '../../screens/Main/SignOut/SignOutScreen';

const AuthStack = ({navigation, route}) => {
  const Stack = createStackNavigator();
  const colorModes=route.params
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={'LoginScreen'}>
      {/* <Stack.Screen name="LoginScreen" component={LoginScreen} /> */}
      <Stack.Screen initialParams={colorModes}  name="LoginScreen" component={LoginScreen} />
      <Stack.Screen initialParams={colorModes}  name="ForgetPassword" component={ForgetPassword} />
      <Stack.Screen initialParams={colorModes} name="Register" component={Register} />
      {/* <Stack.Screen initialParams={colorModes}  name="Signout" component={SignOutScreen} /> */}
    </Stack.Navigator>
  );
};

export default AuthStack;
