import DarkModaSwitcher from 'components/setting-screen/DarkModaSwitcher';
import React from 'react';
import {themeSelector} from 'services/global-state/theme';
import {useRecoilValue} from 'recoil';
import {View} from 'react-native';

const SettingScreen = () => {
  const theme = useRecoilValue(themeSelector);

  return (
    <View style={{padding: 20, flex: 1, backgroundColor: theme.background}}>
      <DarkModaSwitcher />
    </View>
  );
};

export default SettingScreen;
