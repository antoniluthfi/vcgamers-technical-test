import BottomTabNavigator from './BottomTabNavigator';
import PokemonDetailScreen from 'screens/PokemonDetailScreen';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {themeSelector} from 'services/global-state/theme';
import {useRecoilValue} from 'recoil';
import {useTranslation} from 'react-i18next';

const Stack = createNativeStackNavigator<MainStackNavigatorParamList>();

const MainStackNavigator = () => {
  const theme = useRecoilValue(themeSelector);
  const {t} = useTranslation();

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.primary,
        },
        navigationBarColor: theme.tabBackground,
      }}>
      <Stack.Screen
        name="BottomTab"
        component={BottomTabNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PokemonDetail"
        component={PokemonDetailScreen}
        options={{
          headerTintColor: theme.text,
          headerTitle: t('pokemon_detail'),
        }}
      />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
