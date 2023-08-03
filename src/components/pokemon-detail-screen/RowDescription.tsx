import React, {FC} from 'react';
import {Text, View, StyleSheet} from 'react-native';

type RowDescriptionProps = {
  description: string;
  descriptionWidth?: string;
  value: string | number;
};

const RowDescription: FC<RowDescriptionProps> = ({
  description,
  descriptionWidth,
  value,
}) => {
  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.description,
          {flexBasis: (descriptionWidth as any) || '20%'},
        ]}>
        {description}
      </Text>
      <Text style={styles.value}>: {value}</Text>
    </View>
  );
};

export default RowDescription;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
  },
  description: {flexBasis: '20%', fontWeight: 'bold', color: 'black'},
  value: {color: 'black', flexWrap: 'wrap'},
});
