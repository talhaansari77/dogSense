import {createStackNavigator} from '@react-navigation/stack';
import Tips from '../../screens/Main/Tips/Tips';
import ReferFriend from '../../screens/Main/ReferFriend/ReferFriend';
import PrivacyPolicy from '../../screens/Main/PrivacyPolicy/PrivacyPolicy';
import UpdateAccount from '../../screens/Main/UpdateAccount/UpdateAccount';
import DetailScreen from '../../screens/Main/DetailScreen/DetailScreen';
import Activities from '../../screens/Main/Activities/Activities';


const MainStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={'UpdateAccount'}>
      <Stack.Screen name="AddDesign" component={AddDesignScreen} />
      <Stack.Screen name="Signout" component={SignOutScreen} />
      <Stack.Screen name="Details" component={DetailScreen} />
      <Stack.Screen name="Activities" component={Activities} />

      <Stack.Screen name="Tips" component={Tips} />
      <Stack.Screen name="ReferFriend" component={ReferFriend} />
      <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
      <Stack.Screen name="UpdateAccount" component={UpdateAccount} />
    </Stack.Navigator>
  );
};

export default MainStack;
