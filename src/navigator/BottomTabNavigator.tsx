import Icon from 'react-native-vector-icons/Ionicons';
import PokemonListScreen from 'screens/PokemonListScreen';
import React from 'react';
import SettingScreen from 'screens/SettingScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {themeSelector} from 'services/global-state/theme';
import {useRecoilValue} from 'recoil';
import {useTranslation} from 'react-i18next';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const theme = useRecoilValue(themeSelector);
  const {t} = useTranslation();

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerStyle: {
          backgroundColor: theme.primary,
        },
        tabBarIcon: ({focused, size}) => {
          let iconName: string;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'settings-outline';
          }

          // You can return any component that you like here!
          return <Icon name={iconName} size={size} color={theme.tabIcon} />;
        },
        tabBarActiveTintColor: theme.tabIcon,
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: theme.tabBackground,
        },
      })}>
      <Tab.Screen
        name="Home"
        component={PokemonListScreen}
        options={{
          headerTitle: t('pokemon_name_list'),
          headerTintColor: theme.text,
          tabBarLabel: t('home'),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingScreen}
        options={{headerTintColor: theme.text, tabBarLabel: t('settings')}}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
