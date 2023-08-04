import MainStackNavigator from './src/navigator/MainStackNavigator';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {RecoilRoot} from 'recoil';
import {StatusBar} from 'react-native';
import {themeSelector} from 'services/global-state/theme';
import {useRecoilValue} from 'recoil';
import {darkModeAtom} from 'services/global-state/darkMode';

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

function AppComponent() {
  const theme = useRecoilValue(themeSelector);
  const isDarkMode = useRecoilValue(darkModeAtom);

  return (
    <NavigationContainer>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={theme.primary}
      />
      <MainStackNavigator />
    </NavigationContainer>
  );
}

const App = () => {
  return (
    <RecoilRoot>
      <AppComponent />
    </RecoilRoot>
  );
};

export default App;
