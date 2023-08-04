import Icon from 'react-native-vector-icons/Ionicons';
import React, {FC, useState} from 'react';
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import {themeSelector} from 'services/global-state/theme';
import {useRecoilValue} from 'recoil';

type SearchInputProps = {
  onChangeText: (text: string) => void;
};

const SearchInput: FC<SearchInputProps> = ({onChangeText}) => {
  const [keyword, setKeyword] = useState('');
  const theme = useRecoilValue(themeSelector);

  return (
    <View style={[styles.container, {borderColor: theme.border}]}>
      <TextInput
        style={{flexBasis: '90%', color: theme.text}}
        placeholderTextColor={theme.placeholder}
        placeholder="Cari data ..."
        value={keyword}
        onChangeText={text => {
          setKeyword(text);
          onChangeText(text);
        }}
      />
      <TouchableOpacity>
        <Icon name="search" size={30} color={theme.text} />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
