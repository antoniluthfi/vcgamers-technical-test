import React, {FC, useState} from 'react';
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
      <Text style={styles.title}>Sprites</Text>

      {data.map((d, i) => (
        <View style={styles.descriptionContainer} key={`index_${i}`}>
          <Text style={styles.description}>{d.title}</Text>
          <TouchableOpacity onPress={d.onPress}>
            <Text style={{color: 'black'}}>
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
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{description}</Text>
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
  title: {fontWeight: 'bold', color: 'black'},
  description: {flexBasis: '50%', fontWeight: '500', color: 'black'},
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
  },
  modalText: {
    textAlign: 'center',
    fontWeight: '500',
    color: 'black',
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
