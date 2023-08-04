import Icon from 'react-native-vector-icons/Ionicons';
import React from 'react';
import {darkModeAtom} from 'services/global-state/darkMode';
import {StyleSheet, Switch, Text, View} from 'react-native';
import {useRecoilState, useRecoilValue} from 'recoil';
import {themeSelector} from 'services/global-state/theme';

const DarkModaSwitcher = () => {
  const [isDarkMode, setDarkMode] = useRecoilState(darkModeAtom);
  const theme = useRecoilValue(themeSelector);
  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  return (
    <View style={[styles.container, {borderBottomColor: theme.border}]}>
      <Icon name={isDarkMode ? 'moon' : 'sunny'} size={30} color={theme.text} />
      <Text style={[styles.title, {color: theme.text}]}>Dark Mode</Text>
      <Switch onValueChange={toggleDarkMode} value={isDarkMode} />
    </View>
  );
};

export default DarkModaSwitcher;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    paddingVertical: 10,
  },
  title: {fontSize: 16, fontWeight: 'bold'},
});
