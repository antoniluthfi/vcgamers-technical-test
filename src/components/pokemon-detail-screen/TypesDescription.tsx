import React, {FC, useMemo} from 'react';
import {Row, Rows, Table} from 'react-native-table-component';
import {StyleSheet, Text, View} from 'react-native';
import {themeSelector} from 'services/global-state/theme';
import {useRecoilValue} from 'recoil';

type TypesDescriptionProps = {
  types: Types[];
};

const TypesDescription: FC<TypesDescriptionProps> = ({types}) => {
  const theme = useRecoilValue(themeSelector);

  const tableHead = ['No', 'Nama', 'Slot'];
  const tableData = useMemo(() => {
    if (types?.length) {
      return types.map((type, i) => [i + 1, type?.type?.name, type?.slot]);
    }

    return [];
  }, [types?.length]);

  return (
    <View>
      <Text style={[styles.title, {color: theme.text}]}>Jenis</Text>

      <Table borderStyle={{borderWidth: 2, borderColor: theme.tableBorder}}>
        <Row
          data={tableHead}
          style={styles.head}
          textStyle={{textAlign: 'center'}}
          flexArr={[1, 4, 2]}
        />
        <Rows
          data={tableData}
          textStyle={[styles.tableData, {color: theme.text}]}
          flexArr={[1, 4, 2]}
          heightArr={Array.from({length: tableData.length}, () => 50)}
        />
      </Table>
    </View>
  );
};

export default TypesDescription;

const styles = StyleSheet.create({
  head: {height: 40, backgroundColor: '#f1f8ff'},
  tableData: {marginVertical: 5, marginLeft: 5, textAlign: 'center'},
  title: {fontWeight: 'bold', marginBottom: 5},
});
