import React from 'react';
import useRandomThumbnailPicker from './hooks/useRandomThumbnailPicker';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {Result} from './hooks/useFetchData';

type PokemonListRenderItemProps = {item: Result; onPress: () => void};

const PokemonListRenderItem = ({item, onPress}: PokemonListRenderItemProps) => {
  const {image} = useRandomThumbnailPicker();

  return (
    <TouchableOpacity
      style={{
        width: '49%',
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 7,
        borderColor: 'grey',
        elevation: 4,
        marginBottom: 10,
        shadowColor: 'rgba(0, 0, 0, 0.25)',
        overflow: 'hidden',
      }}
      onPress={onPress}>
      <Image
        source={image}
        style={{width: '100%', height: 150}}
        resizeMode="contain"
      />

      <View style={{width: '100%', backgroundColor: 'orange', padding: 20}}>
        <Text
          style={{
            textTransform: 'capitalize',
            color: 'black',
            fontWeight: 'bold',
            fontSize: 16,
          }}>
          {item.name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default PokemonListRenderItem;
