import React, {FC} from 'react';
import RowDescription from '../RowDescription';
import {themeSelector} from 'services/global-state/theme';
import {useRecoilValue} from 'recoil';
import {useTranslation} from 'react-i18next';
import {
  Dimensions,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

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
  const theme = useRecoilValue(themeSelector);
  const {t} = useTranslation();

  return (
    <Modal
      animationType="slide"
      transparent
      statusBarTranslucent
      visible={visible}
      onRequestClose={onRequestClose}>
      <View style={styles.centeredView}>
        <View
          style={[
            styles.modalView,
            {backgroundColor: theme.background, borderColor: theme.border},
          ]}>
          <Text style={[styles.modalText, {color: theme.text}]}>
            {description}
          </Text>

          <ScrollView>
            {!!values &&
              values.map((val, i) => (
                <View
                  style={[
                    styles.valueContainer,
                    {borderBottomColor: theme.border},
                  ]}
                  key={`index_${i}`}>
                  <RowDescription
                    description={t('level_learned_at')}
                    value={val?.level_learned_at}
                    descriptionWidth="60%"
                  />
                  <RowDescription
                    description={t('version_group')}
                    value={val?.version_group?.name}
                    descriptionWidth="60%"
                  />
                  <RowDescription
                    description={t('move_learn_method')}
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
    borderWidth: 1,
  },
  modalText: {
    textAlign: 'center',
    fontWeight: '500',
    marginBottom: 10,
    fontSize: 16,
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
  },
  singleHead: {width: 80, height: 40, backgroundColor: '#c8e1ff'},
  head: {flex: 1, backgroundColor: '#c8e1ff'},
  title: {flex: 2, backgroundColor: '#f6f8fa'},
  titleText: {marginRight: 6, textAlign: 'right'},
  text: {textAlign: 'center'},
});
