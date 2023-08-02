import React, {FC, useState} from 'react';
import {TextInput, TouchableOpacity, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

type SearchInputProps = {
  onChangeText: (text: string) => void;
};

const SearchInput: FC<SearchInputProps> = ({onChangeText}) => {
  const [keyword, setKeyword] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={{flexBasis: '90%'}}
        placeholder="Cari data ..."
        value={keyword}
        onChangeText={text => {
          setKeyword(text);
          onChangeText(text);
        }}
      />
      <TouchableOpacity>
        <Icon name="search" size={30} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 5,
    paddingHorizontal: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
