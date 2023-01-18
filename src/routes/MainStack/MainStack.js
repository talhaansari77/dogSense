import {View, Text, Image, Platform} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import AddDesignScreen from '../../screens/Main/AddDesign/AddDesignScreen';
import SignOutScreen from '../../screens/Main/SignOut/SignOutScreen';
import Tips from '../../screens/Main/Tips/Tips';
import ReferFriend from '../../screens/Main/ReferFriend/ReferFriend';
import PrivacyPolicy from '../../screens/Main/PrivacyPolicy/PrivacyPolicy';
import UpdateAccount from '../../screens/Main/UpdateAccount/UpdateAccount';

const MainStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={'UpdateAccount'}>
      <Stack.Screen name="AddDesign" component={AddDesignScreen} />
      <Stack.Screen name="Signout" component={SignOutScreen} />
      <Stack.Screen name="Tips" component={Tips} />
      <Stack.Screen name="ReferFriend" component={ReferFriend} />
      <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
      <Stack.Screen name="UpdateAccount" component={UpdateAccount} />
    </Stack.Navigator>
  );
};

export default MainStack;
