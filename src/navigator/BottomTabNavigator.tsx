import Icon from 'react-native-vector-icons/Ionicons';
import PokemonListScreen from 'screens/PokemonListScreen';
import React from 'react';
import SettingScreen from 'screens/SettingScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const BottomTabNavigator = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerStyle: {
          backgroundColor: 'orange',
        },
        tabBarIcon: ({focused, color, size}) => {
          let iconName: string;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'settings-outline';
          }

          // You can return any component that you like here!
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen
        name="Home"
        component={PokemonListScreen}
        options={{headerTitle: 'Daftar Nama Pokemon'}}
      />
      <Tab.Screen name="Settings" component={SettingScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
