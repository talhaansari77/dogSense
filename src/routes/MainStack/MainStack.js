import {View, Text, Image, Platform} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import AddDesignScreen from '../../screens/Main/AddDesign/AddDesignScreen';
import SignOutScreen from '../../screens/Main/SignOut/SignOutScreen';
import Register from '../../screens/Auth/Register/Register';
import LoginScreen from '../../screens/Auth/Login/LoginScreen';
import ForgetPassword from '../../screens/Auth/ForgetPassword/ForgetPassword';
import CurrentMood from '../../screens/Main/CurrentMood/CurrentMood';
import SearchCurrenMood from '../../screens/Main/CurrentMood/SearchCurrentMood/SearchCurrenMood';


const MainStack = () => {

  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      // initialRouteName={"Signout"}
    >
      
      {/* <Stack.Screen name="CurrentMood" component={CurrentMood} /> */}
      <Stack.Screen name="SearchCurrenMood" component={SearchCurrenMood} />




    </Stack.Navigator>
  );
 
};

export default MainStack;
