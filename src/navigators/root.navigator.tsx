import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { ILoadableData, ILogin, writableLoadableAtom } from '../atoms/main.atom';
import { useAtomValue } from 'jotai';
import LoggedOutNav from './logged-out-nav.navigator';
import LoggedInStackNav from './logged-in-nav.navigator';
const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  const login = useAtomValue(writableLoadableAtom);

  const loggedInScreen = [
    //
    <Stack.Screen key={'STACK'} name={'STACK'} component={LoggedInStackNav} />,
  ];

  const loggedOutScreen = [
    //
    <Stack.Screen key={'LOGOUT'} name={'LOGOUT'} component={LoggedOutNav} />,
  ];

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'fade',
      }}
    >
      {(login as ILoadableData<ILogin>).data?.token ? loggedInScreen : loggedOutScreen}
    </Stack.Navigator>
  );
};

export default RootNavigator;
