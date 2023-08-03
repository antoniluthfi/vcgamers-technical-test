import MainStackNavigator from './src/navigator/MainStackNavigator';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {RecoilRoot} from 'recoil';
import {StatusBar, useColorScheme} from 'react-native';
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <NavigationContainer>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={'orange'}
      />
      <RecoilRoot>
        <MainStackNavigator />
      </RecoilRoot>
    </NavigationContainer>
  );
}

export default App;
