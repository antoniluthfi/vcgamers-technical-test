import DarkModaSwitcher from 'components/setting-screen/DarkModaSwitcher';
import React from 'react';
import {View} from 'react-native';

const SettingScreen = () => {
  return (
    <View style={{padding: 20}}>
      <DarkModaSwitcher />
    </View>
  );
};

export default SettingScreen;
