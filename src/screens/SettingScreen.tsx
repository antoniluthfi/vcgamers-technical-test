import DarkModeSwitcher from 'components/setting-screen/DarkModeSwitcher';
import LanguageSwitcher from 'components/setting-screen/LanguageSwitcher';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {themeSelector} from 'services/global-state/theme';
import {useRecoilValue} from 'recoil';

const SettingScreen = () => {
  const theme = useRecoilValue(themeSelector);

  return (
    <View style={[styles.container, {backgroundColor: theme.accent}]}>
      <DarkModeSwitcher />
      <LanguageSwitcher />
    </View>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
});
