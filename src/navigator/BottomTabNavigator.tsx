import Icon from 'react-native-vector-icons/Ionicons';
import PokemonListScreen from 'screens/PokemonListScreen';
import React from 'react';
import SettingScreen from 'screens/SettingScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {themeSelector} from 'services/global-state/theme';
import {useRecoilValue} from 'recoil';

const BottomTabNavigator = () => {
  const Tab = createBottomTabNavigator();
  const theme = useRecoilValue(themeSelector);

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerStyle: {
          backgroundColor: `${theme.primary}`,
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
          backgroundColor: theme.background,
        },
      })}>
      <Tab.Screen
        name="Home"
        component={PokemonListScreen}
        options={{
          headerTitle: 'Daftar Nama Pokemon',
          headerTintColor: theme.text,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingScreen}
        options={{headerTintColor: theme.text}}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
