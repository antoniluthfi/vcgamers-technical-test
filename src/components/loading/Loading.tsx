import React from 'react';
import {ActivityIndicator, StyleSheet, View, Text} from 'react-native';

const Loading: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>
        <ActivityIndicator size="large" color="orange" />
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
