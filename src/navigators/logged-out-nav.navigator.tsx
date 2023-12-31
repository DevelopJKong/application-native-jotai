import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/login.screen';

export type LoggedOutNavStackRouteName = 'Login';

const Stack = createNativeStackNavigator();

const LoggedOutNav = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'fade',
      }}
    >
      <Stack.Screen name={'LOGIN'} component={Login} />
    </Stack.Navigator>
  );
};

export default LoggedOutNav;
