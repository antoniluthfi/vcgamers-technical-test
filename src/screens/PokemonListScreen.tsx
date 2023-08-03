import Icon from 'react-native-vector-icons/Ionicons';
import Loading from 'components/loading/Loading';
import PokemonListRenderItem from 'components/pokemon-list-screen/RenderItem';
import React, {useEffect, useState} from 'react';
import SearchInput from 'components/search-input/SearchInput';
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
  const [keyword, setKeyword] = useState('');

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
        <TouchableOpacity onPress={getData} style={{marginRight: 20}}>
          <Icon name="reload" size={30} color="black" />
        </TouchableOpacity>
      ),
    });
  }, []);

  if (loading) return <Loading />;
  return (
    <View style={{flex: 1}}>
      <View style={{padding: 20}}>
        <SearchInput onChangeText={setKeyword} />
      </View>

      <FlatList
        contentContainerStyle={{paddingHorizontal: 20}}
        data={
          data?.results?.filter(val =>
            val?.name?.toLowerCase()?.match(keyword?.toLowerCase()),
          ) || []
        }
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
