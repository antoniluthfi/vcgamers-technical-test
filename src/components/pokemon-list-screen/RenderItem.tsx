import React from 'react';
import useRandomThumbnailPicker from './hooks/useRandomThumbnailPicker';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Result} from './hooks/useFetchData';
import {themeSelector} from 'services/global-state/theme';
import {useRecoilValue} from 'recoil';

type PokemonListRenderItemProps = {item: Result; onPress: () => void};

const PokemonListRenderItem = ({item, onPress}: PokemonListRenderItemProps) => {
  const {image} = useRandomThumbnailPicker();
  const theme = useRecoilValue(themeSelector);

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={image} style={styles.image} resizeMode="contain" />

      <View
        style={[styles.titleContainer, {backgroundColor: theme.background}]}>
        <Text
          style={[
            styles.title,
            {
              color: theme.text,
            },
          ]}>
          {item.name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default PokemonListRenderItem;

const styles = StyleSheet.create({
  container: {
    width: '49%',
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 7,
    borderColor: 'grey',
    elevation: 4,
    marginBottom: 10,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    overflow: 'hidden',
  },
  image: {width: '100%', height: 150},
  titleContainer: {width: '100%', padding: 20},
  title: {
    textTransform: 'capitalize',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
