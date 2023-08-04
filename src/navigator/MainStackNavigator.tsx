import BottomTabNavigator from './BottomTabNavigator';
import PokemonDetailScreen from 'screens/PokemonDetailScreen';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {themeSelector} from 'services/global-state/theme';
import {useRecoilValue} from 'recoil';

const Stack = createNativeStackNavigator<MainStackNavigatorParamList>();

const MainStackNavigator = () => {
  const theme = useRecoilValue(themeSelector);

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
        options={{headerTintColor: theme.text}}
      />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
