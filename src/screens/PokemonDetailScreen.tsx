import Icon from 'react-native-vector-icons/Ionicons';
import Loading from 'components/loading/Loading';
import MovesDescription from 'components/pokemon-detail-screen/moves-description/MovesDescription';
import React, {useEffect} from 'react';
import RowDescription from 'components/pokemon-detail-screen/RowDescription';
import SpritesDescription from 'components/pokemon-detail-screen/SpritesDescription';
import TypesDescription from 'components/pokemon-detail-screen/TypesDescription';
import useFetchData from 'components/pokemon-detail-screen/hooks/useFetchData';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {themeSelector} from 'services/global-state/theme';
import {useRecoilValue} from 'recoil';
import {useTranslation} from 'react-i18next';
import EvolveChainDescription from 'components/pokemon-detail-screen/EvolveChainDescription';

const PokemonDetailScreen = () => {
  const route =
    useRoute<RouteProp<MainStackNavigatorParamList, 'PokemonDetail'>>();
  const navigation =
    useNavigation<StackNavigationProp<MainStackNavigatorParamList>>();
  const theme = useRecoilValue(themeSelector);
  const {data, loading, getData} = useFetchData(route.params.name);
  const {t} = useTranslation();

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
      contentContainerStyle={[
        styles.container,
        {
          backgroundColor: theme.accent,
        },
      ]}>
      <View
        style={[
          styles.card,
          {
            backgroundColor: theme.background,
            borderColor: theme.border,
          },
        ]}>
        <RowDescription description={t('name')} value={data?.name} />
        <RowDescription description={t('height')} value={data?.height} />
        <RowDescription description={t('weight')} value={data?.weight} />
        <SpritesDescription sprites={data?.sprites} />
        <TypesDescription types={data?.types} />
        <MovesDescription
          moves={
            data?.moves?.length > 10 ? data?.moves?.slice(0, 10) : data?.moves
          }
        />
        <EvolveChainDescription urlSpecies={data?.species?.url} />
      </View>
    </ScrollView>
  );
};

export default PokemonDetailScreen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 70,
  },
  card: {
    borderWidth: 1,
    borderRadius: 7,
    elevation: 4,
    paddingHorizontal: '5%',
    paddingVertical: 20,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    width: '100%',
  },
});
