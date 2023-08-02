import Icon from 'react-native-vector-icons/Ionicons';
import Loading from 'components/loading/Loading';
import PokemonListRenderItem from 'components/pokemon-list-screen/RenderItem';
import React, {useEffect} from 'react';
import {FlatList, TouchableOpacity, View} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import useFetchData, {
  Result,
} from 'components/pokemon-list-screen/hooks/useFetchData';

const PokemonListScreen = () => {
  const navigation =
    useNavigation<StackNavigationProp<MainStackNavigatorParamList>>();
  const {data, loading, getData, handleGetMoreData} = useFetchData();

  const renderItem = ({item}: {item: Result}) => {
    return (
      <PokemonListRenderItem
        item={item}
        onPress={() =>
          navigation.navigate('PokemonDetail', {name: item.name, url: item.url})
        }
      />
    );
  };

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={getData}>
          <Icon name="reload" size={30} color="black" />
        </TouchableOpacity>
      ),
    });
  }, []);

  if (loading) return <Loading />;
  return (
    <View style={{flex: 1}}>
      <FlatList
        contentContainerStyle={{padding: 20}}
        data={data?.results || []}
        keyExtractor={(_, i) => `index_${i}`}
        renderItem={renderItem}
        numColumns={2}
        columnWrapperStyle={{gap: 5}}
        onEndReached={() => handleGetMoreData()}
        initialNumToRender={8}
        windowSize={5}
        maxToRenderPerBatch={8}
        updateCellsBatchingPeriod={30}
      />
    </View>
  );
};

export default PokemonListScreen;
