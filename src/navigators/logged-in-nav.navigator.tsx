import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from '../screens/main.screen';

export type LoggedOutNavStackRouteName = 'Login';

const Stack = createNativeStackNavigator();

const LoggedInStackNav = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'fade',
      }}
    >
      <Stack.Screen name={'MAIN'} component={Main} />
    </Stack.Navigator>
  );
};

export default LoggedInStackNav;
