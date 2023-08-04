import i18n from './src/language/i18n';
import MainStackNavigator from './src/navigator/MainStackNavigator';
import React from 'react';
import {darkModeAtom} from 'services/global-state/darkMode';
import {NavigationContainer} from '@react-navigation/native';
import {RecoilRoot} from 'recoil';
import {StatusBar} from 'react-native';
import {themeSelector} from 'services/global-state/theme';
import {useRecoilValue} from 'recoil';

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

const initI18n = i18n;
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
