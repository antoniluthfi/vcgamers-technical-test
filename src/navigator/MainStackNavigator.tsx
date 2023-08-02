import PokemonDetailScreen from 'screens/PokemonDetailScreen';
import PokemonListScreen from 'screens/PokemonListScreen';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator<MainStackNavigatorParamList>();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="PokemonList"
      screenOptions={{
        headerStyle: {
          backgroundColor: 'orange',
        },
      }}>
      <Stack.Screen
        name="PokemonList"
        component={PokemonListScreen}
        options={{title: 'Daftar Nama Pokemon'}}
      />
      <Stack.Screen name="PokemonDetail" component={PokemonDetailScreen} />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
