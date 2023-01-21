import {createStackNavigator,CardStackStyleInterpolator} from '@react-navigation/stack';
import SignOutScreen from '../../screens/Main/SignOut/SignOutScreen';
import Register from '../../screens/Auth/Register/Register';
import LoginScreen from '../../screens/Auth/Login/LoginScreen';
import ForgetPassword from '../../screens/Auth/ForgetPassword/ForgetPassword';
import CurrentMood from '../../screens/Main/CurrentMood/CurrentMood';
import SearchCurrenMood from '../../screens/Main/CurrentMood/SearchCurrentMood/SearchCurrenMood';
import Tips from '../../screens/Main/Tips/Tips';
import ReferFriend from '../../screens/Main/ReferFriend/ReferFriend';
import PrivacyPolicy from '../../screens/Main/PrivacyPolicy/PrivacyPolicy';
import UpdateAccount from '../../screens/Main/UpdateAccount/UpdateAccount';
import DetailScreen from '../../screens/Main/DetailScreen/DetailScreen';
import Activities from '../../screens/Main/Activities/Activities';
import AddDog from '../../screens/Main/AddDog.js/AddDog';
import Profile from '../../screens/Main/Profile/Profile';
import CustomDrawer from '../CustomDrawer/CustomDrawer';
import {useSelector} from 'react-redux';
import {colors} from '../../utils/Colors';
import {useEffect} from 'react';

const MainStack = ({route}) => {
  const Stack = createStackNavigator();
 const colorModes=route.params
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false,
        screenInterpolator: CardStackStyleInterpolator.forHorizontal,
      }}
      initialRouteName={'CurrentMood'}
      >
      <Stack.Screen initialParams={colorModes} name="CustomDrawer" component={CustomDrawer} />
      <Stack.Screen initialParams={colorModes} name="Profile" component={Profile} />
      <Stack.Screen initialParams={colorModes} name="CurrentMood" component={CurrentMood} />
      <Stack.Screen initialParams={colorModes} name="SearchCurrenMood" component={SearchCurrenMood} />
      <Stack.Screen initialParams={colorModes} name="Signout" component={SignOutScreen} />
      <Stack.Screen initialParams={colorModes} name="Details" component={DetailScreen} />
      <Stack.Screen initialParams={colorModes} name="Activities" component={Activities} />
      <Stack.Screen initialParams={colorModes} name="Tips" component={Tips} />
      <Stack.Screen initialParams={colorModes} name="ReferFriend" component={ReferFriend} />
      <Stack.Screen initialParams={colorModes} name="PrivacyPolicy" component={PrivacyPolicy} />
      <Stack.Screen initialParams={colorModes} name="UpdateAccount" component={UpdateAccount} />
      <Stack.Screen initialParams={colorModes} name="AddDog" component={AddDog} />
    </Stack.Navigator>
  );
};

export default MainStack;
