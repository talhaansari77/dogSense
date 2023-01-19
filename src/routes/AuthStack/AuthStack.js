import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../../screens/Auth/Login/LoginScreen';
import ForgetPassword from '../../screens/Auth/ForgetPassword/ForgetPassword';
import Register from '../../screens/Auth/Register/Register';
import SignOutScreen from '../../screens/Main/SignOut/SignOutScreen';

const AuthStack = ({navigation}) => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={"Register"}
    >
     {/* <Stack.Screen name="LoginScreen" component={LoginScreen} /> */}
       <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Signout" component={SignOutScreen} />  


    </Stack.Navigator>
  );
};

export default AuthStack;
