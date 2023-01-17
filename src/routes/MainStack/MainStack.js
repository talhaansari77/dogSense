import {View, Text, Image, Platform} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import AddDesignScreen from '../../screens/Main/AddDesign/AddDesignScreen';
import SignOutScreen from '../../screens/Main/SignOut/SignOutScreen';
import Tips from '../../screens/Main/Tips/Tips';


const MainStack = () => {

  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={"Tips"}
    >
      <Stack.Screen name="AddDesign" component={AddDesignScreen} />
      <Stack.Screen name="Signout" component={SignOutScreen} />
      <Stack.Screen name="Tips" component={Tips} />


    </Stack.Navigator>
  );
 
};

export default MainStack;
