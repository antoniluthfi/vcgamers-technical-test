import Icon from 'react-native-vector-icons/Ionicons';
import React, {useState} from 'react';
import {Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {themeSelector} from 'services/global-state/theme';
import {useRecoilValue, useRecoilState} from 'recoil';
import {languageAtom} from 'services/global-state/language';
import {useTranslation} from 'react-i18next';

const LanguageSwitcher = () => {
  const theme = useRecoilValue(themeSelector);
  const [language, setLanguage] = useRecoilState(languageAtom);
  const [modalVisible, setModalVisible] = useState(false);
  const {t, i18n} = useTranslation();
  const LANG_OPT = [
    {
      value: 'id',
      label: 'Bahasa Indonesia',
    },
    {
      value: 'en',
      label: 'English',
    },
  ];

  const changeLanguage = (lang: 'id' | 'en') => {
    setLanguage(lang);
    i18n.changeLanguage(lang);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setModalVisible(true)}>
        <Icon name="language" size={30} color="black" />
        <Text style={styles.buttonName}>{t('change_language')}</Text>
      </TouchableOpacity>

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
            {LANG_OPT.map((opt, i) => (
              <TouchableOpacity
                key={`index_${i}`}
                style={[
                  styles.languageButton,
                  {
                    borderBottomColor: theme.border,
                  },
                ]}
                onPress={() => changeLanguage(opt.value as 'id' | 'en')}>
                <Text style={[styles.modalText, {color: theme.text}]}>
                  {opt.label}
                </Text>

                {language === opt.value && (
                  <Icon name="checkmark-circle" size={20} color={theme.text} />
                )}
              </TouchableOpacity>
            ))}

            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => {
                setModalVisible(false);
              }}>
              <Text style={styles.modalButtonTitle}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default LanguageSwitcher;

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ff9800',
    paddingVertical: 10,
    borderRadius: 10,
    gap: 10,
  },
  buttonName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
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
    fontWeight: '500',
  },
  modalButton: {
    backgroundColor: 'orange',
    width: '100%',
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  modalButtonTitle: {
    color: 'black',
    fontWeight: 'bold',
  },
  languageButton: {
    borderBottomWidth: 1,
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
