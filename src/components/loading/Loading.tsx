import React from 'react';
import {ActivityIndicator, StyleSheet, View, Text} from 'react-native';
import {themeSelector} from 'services/global-state/theme';
import {useRecoilValue} from 'recoil';

const Loading: React.FC = () => {
  const theme = useRecoilValue(themeSelector);

  return (
    <View style={[styles.container, {backgroundColor: theme.accent}]}>
      <Text>
        <ActivityIndicator size="large" color={theme.tabIcon} />
      </Text>
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
