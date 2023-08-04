import React, {FC, useState} from 'react';
import {themeSelector} from 'services/global-state/theme';
import {useRecoilValue} from 'recoil';
import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

type SpritesDescriptionProps = {
  sprites: Sprites;
};

const SpritesDescription: FC<SpritesDescriptionProps> = ({sprites}) => {
  const theme = useRecoilValue(themeSelector);
  const [modalVisible, setModalVisible] = useState(false);
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');

  const data = [
    {
      title: 'Kembali Default',
      onPress: () => {
        setDescription('Kembali Default');
        setValue(sprites?.back_default);
        setModalVisible(true);
      },
    },
    {
      title: 'Kembali Mengkilap',
      onPress: () => {
        setDescription('Kembali Mengkilap');
        setValue(sprites?.back_shiny);
        setModalVisible(true);
      },
    },
    {
      title: 'Default Depan',
      onPress: () => {
        setDescription('Default Depan');
        setValue(sprites?.front_default);
        setModalVisible(true);
      },
    },
    {
      title: 'Depan Mengkilap',
      onPress: () => {
        setDescription('Depan Mengkilap');
        setValue(sprites?.front_shiny);
        setModalVisible(true);
      },
    },
  ];

  return (
    <View>
      <Text style={[styles.title, {color: theme.text}]}>Sprites</Text>

      {data.map((d, i) => (
        <View style={styles.descriptionContainer} key={`index_${i}`}>
          <Text style={[styles.description, {color: theme.text}]}>
            {d.title}
          </Text>
          <TouchableOpacity onPress={d.onPress}>
            <Text style={{color: theme.text}}>
              : <Text style={styles.value}>Lihat Gambar</Text>
            </Text>
          </TouchableOpacity>
        </View>
      ))}

      <Modal
        animationType="slide"
        transparent
        statusBarTranslucent
        visible={modalVisible}>
        <View style={styles.centeredView}>
          <View
            style={[
              styles.modalView,
              {backgroundColor: theme.background, borderColor: theme.border},
            ]}>
            <Text style={[styles.modalText, {color: theme.text}]}>
              {description}
            </Text>
            <Image
              source={{uri: value}}
              style={{width: 100, height: 100}}
              resizeMode="contain"
            />
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                setModalVisible(false);
                setDescription('');
                setValue('');
              }}>
              <Text style={styles.buttonTitle}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default SpritesDescription;

const styles = StyleSheet.create({
  descriptionContainer: {
    flexDirection: 'row',
    width: '90%',
    marginLeft: 20,
  },
  title: {fontWeight: 'bold'},
  description: {flexBasis: '50%', fontWeight: '500'},
  value: {
    color: 'blue',
    textDecorationColor: 'blue',
    textDecorationLine: 'underline',
  },
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
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '60%',
    borderWidth: 1,
  },
  modalText: {
    textAlign: 'center',
    fontWeight: '500',
  },
  button: {
    backgroundColor: 'orange',
    width: '100%',
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTitle: {
    color: 'black',
    fontWeight: 'bold',
  },
});
