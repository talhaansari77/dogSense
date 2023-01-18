import {createStackNavigator} from '@react-navigation/stack';
import Tips from '../../screens/Main/Tips/Tips';
import DetailScreen from '../../screens/Main/DetailScreen/DetailScreen';
import Activities from '../../screens/Main/Activities/Activities';

const MainStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={'Tips'}>
      <Stack.Screen name="Details" component={DetailScreen} />
      <Stack.Screen name="Activities" component={Activities} />
      <Stack.Screen name="Tips" component={Tips} />
    </Stack.Navigator>
  );
};

export default MainStack;
