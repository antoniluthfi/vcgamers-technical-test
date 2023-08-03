import React, {FC} from 'react';
import {
  Dimensions,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  Cell,
  Col,
  Cols,
  Table,
  TableWrapper,
} from 'react-native-table-component';
import RowDescription from '../RowDescription';

type VersionGroupDetailModalProps = {
  visible: boolean;
  onRequestClose?: () => void;
  onClose: () => void;
  description: string;
  values: VersionGroupDetails[];
};

const WINDOW_HEIGHT = Dimensions.get('window').height;
const VersionGroupDetailModal: FC<VersionGroupDetailModalProps> = ({
  visible,
  onRequestClose,
  onClose,
  description,
  values,
}) => {
  return (
    <Modal
      animationType="slide"
      transparent
      statusBarTranslucent
      visible={visible}
      onRequestClose={onRequestClose}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>{description}</Text>

          <ScrollView>
            {!!values &&
              values.map(val => (
                <View style={styles.valueContainer}>
                  <RowDescription
                    description="Level yang Dipelajari pada"
                    value={val?.level_learned_at}
                    descriptionWidth="60%"
                  />
                  <RowDescription
                    description="Grup Versi"
                    value={val?.version_group?.name}
                    descriptionWidth="60%"
                  />
                  <RowDescription
                    description="Metode Belajar Bergerak"
                    value={val?.move_learn_method?.name}
                    descriptionWidth="60%"
                  />
                </View>
              ))}
          </ScrollView>

          <TouchableOpacity style={styles.button} onPress={onClose}>
            <Text style={styles.buttonTitle}>OK</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default VersionGroupDetailModal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingVertical: 35,
    paddingHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '90%',
    height: WINDOW_HEIGHT / 1.3,
  },
  modalText: {
    textAlign: 'center',
    fontWeight: '500',
    color: 'black',
    marginBottom: 10,
    fontSize: 16
  },
  button: {
    backgroundColor: 'orange',
    width: '100%',
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonTitle: {
    color: 'black',
    fontWeight: 'bold',
  },
  valueContainer: {
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  singleHead: {width: 80, height: 40, backgroundColor: '#c8e1ff'},
  head: {flex: 1, backgroundColor: '#c8e1ff'},
  title: {flex: 2, backgroundColor: '#f6f8fa'},
  titleText: {marginRight: 6, textAlign: 'right'},
  text: {textAlign: 'center'},
});
