type BottomTabNavigatorParamList = {
    PokemonList: undefined;
    Settings: undefined;
}

type MainStackNavigatorParamList = {
    BottomTab: BottomTabNavigatorParamList;
    PokemonDetail: {
        name: string;
        url: string;
    }
}