import Icon from 'react-native-vector-icons/Ionicons';
import Loading from 'components/loading/Loading';
import MovesDescription from 'components/pokemon-detail-screen/moves-description/MovesDescription';
import React, {useEffect} from 'react';
import RowDescription from 'components/pokemon-detail-screen/RowDescription';
import SpritesDescription from 'components/pokemon-detail-screen/SpritesDescription';
import TypesDescription from 'components/pokemon-detail-screen/TypesDescription';
import useFetchData from 'components/pokemon-detail-screen/hooks/useFetchData';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {ScrollView, TouchableOpacity, View} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {themeSelector} from 'services/global-state/theme';
import {useRecoilValue} from 'recoil';

const PokemonDetailScreen = () => {
  const route =
    useRoute<RouteProp<MainStackNavigatorParamList, 'PokemonDetail'>>();
  const navigation =
    useNavigation<StackNavigationProp<MainStackNavigatorParamList>>();
  const theme = useRecoilValue(themeSelector);
  const {data, loading, getData} = useFetchData(route.params.name);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={getData}>
          <Icon name="reload" size={30} color={theme.text} />
        </TouchableOpacity>
      ),
    });
  }, []);

  if (loading) return <Loading />;
  return (
    <ScrollView
      contentContainerStyle={{padding: 20, backgroundColor: theme.background}}>
      <View
        style={{
          backgroundColor: theme.background,
          borderWidth: 1,
          borderRadius: 7,
          borderColor: theme.border,
          elevation: 4,
          paddingHorizontal: '5%',
          paddingVertical: 20,
          shadowColor: 'rgba(0, 0, 0, 0.25)',
          width: '100%',
        }}>
        <RowDescription description="Name" value={data?.name} />
        <RowDescription description="Tinggi" value={data?.height} />
        <RowDescription description="Berat" value={data?.weight} />
        <SpritesDescription sprites={data?.sprites} />
        <TypesDescription types={data?.types} />
        <MovesDescription
          moves={
            data?.moves?.length > 10 ? data?.moves?.slice(0, 10) : data?.moves
          }
        />
      </View>
    </ScrollView>
  );
};

export default PokemonDetailScreen;
