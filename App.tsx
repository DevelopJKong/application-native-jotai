import { SafeAreaView, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './src/navigators/root.navigator';

export default function App() {
  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <NavigationContainer>
          <StatusBar barStyle='light-content' />
          <RootNavigator />
        </NavigationContainer>
      </SafeAreaView>
    </>
  );
}
