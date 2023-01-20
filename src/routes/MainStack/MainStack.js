import {createStackNavigator} from '@react-navigation/stack';
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
import Logout from '../../screens/Main/Logout/Logout';


const MainStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={"Logout"}
    >
      
      {/* <Stack.Screen name="CurrentMood" component={CurrentMood} /> */}
      <Stack.Screen name="SearchCurrenMood" component={SearchCurrenMood} />


      <Stack.Screen name="Signout" component={SignOutScreen} />
      <Stack.Screen name="Details" component={DetailScreen} />
      <Stack.Screen name="Activities" component={Activities} />

      <Stack.Screen name="Tips" component={Tips} />
      <Stack.Screen name="ReferFriend" component={ReferFriend} />
      <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
      <Stack.Screen name="UpdateAccount" component={UpdateAccount} />
      <Stack.Screen name="AddDog" component={AddDog} />
      <Stack.Screen name="Logout" component={Logout} />
    </Stack.Navigator>
  );
};

export default MainStack;
