import React, {FC} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {themeSelector} from 'services/global-state/theme';
import {useRecoilValue} from 'recoil';

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
  const theme = useRecoilValue(themeSelector);

  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.description,
          {flexBasis: (descriptionWidth as any) || '20%', color: theme.text},
        ]}>
        {description}
      </Text>
      <Text style={{color: theme.text}}>: {value}</Text>
    </View>
  );
};

export default RowDescription;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
  },
  description: {flexBasis: '20%', fontWeight: 'bold'},
});
