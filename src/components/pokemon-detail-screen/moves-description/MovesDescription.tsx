import React, {FC, useMemo, useState} from 'react';
import {Row, Rows, Table} from 'react-native-table-component';
import {Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import VersionGroupDetailModal from './VersionGroupDetailModal';

type MovesDescriptionProps = {
  moves: Moves[];
};

const MovesDescription: FC<MovesDescriptionProps> = ({moves}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [description, setDescription] = useState('');
  const [value, setValue] = useState(null);
  const tableHead = ['No', 'Nama', 'Aksi'];

  const element = (data: Moves, index: number) => (
    <TouchableOpacity
      style={styles.btn}
      onPress={() => {
        setDescription(data?.move?.name);
        setValue(data?.version_group_details);
        setModalVisible(true);
      }}>
      <Text style={styles.btnText}>Detail</Text>
    </TouchableOpacity>
  );

  const tableData = useMemo(() => {
    if (moves?.length) {
      return moves.map((move, i) => [
        i + 1,
        move?.move?.name,
        element(move, i),
      ]);
    }

    return [];
  }, [moves?.length]);

  return (
    <View style={{marginTop: 10}}>
      <Text style={styles.title}>Pergerakan</Text>

      <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
        <Row
          data={tableHead}
          style={styles.head}
          textStyle={{textAlign: 'center'}}
          flexArr={[1, 4, 2]}
        />
        <Rows
          data={tableData}
          textStyle={styles.tableData}
          flexArr={[1, 4, 2]}
          heightArr={Array.from({length: tableData.length}, () => 50)}
        />
      </Table>

      <VersionGroupDetailModal
        visible={modalVisible}
        description={description}
        values={value}
        onClose={() => {
          setModalVisible(false);
          setDescription('');
          setValue(null);
        }}
      />
    </View>
  );
};

export default MovesDescription;

const styles = StyleSheet.create({
  head: {height: 40, backgroundColor: '#f1f8ff'},
  tableData: {marginVertical: 5, marginLeft: 5, textAlign: 'center'},
  title: {fontWeight: 'bold', color: 'black', marginBottom: 5},
  btn: {
    width: 58,
    backgroundColor: 'orange',
    borderRadius: 5,
    alignSelf: 'center',
  },
  btnText: {textAlign: 'center', color: 'black', padding: 5},
  text: {margin: 6},
  row: {flexDirection: 'row'},
});
