import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../pages/login.page';
import Main from '../pages/main.page';

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
