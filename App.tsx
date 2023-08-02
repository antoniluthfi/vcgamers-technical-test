import MainStackNavigator from './src/navigator/MainStackNavigator';
import React from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar, useColorScheme} from 'react-native';
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={'white'}
      />
      <MainStackNavigator />
    </NavigationContainer>
  );
}

export default App;
