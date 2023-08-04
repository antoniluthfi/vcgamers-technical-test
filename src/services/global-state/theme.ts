import { darkModeAtom } from './darkMode';
import { selector } from 'recoil';

const lightTheme = {
  primary: '#ff9800',
  accent: '#ffffff',
  background: '#f3f6f4',
  text: '#434547',
  placeholder: '#9e9e9e',
  header: '#307D32',
  headerTitle: '#FAFAFA',
  border: '#bdbdbd',
  tabIcon: '#ff9800',
  tabBackground: '#ffffff',
  tableBorder: '#c8e1ff'
};

const darkTheme = {
  primary: '#121212',
  accent: '#1F1F1F',
  background: '#121212',
  text: '#E1E1E1',
  placeholder: '#E1E1E1',
  placeholder2: '#eeeeee',
  header: '#282828',
  headerTitle: '#FFFFFF',
  border: '#9e9e9e',
  tabIcon: '#FFFFFF',
  tabBackground: '#121212',
  tableBorder: '#9e9e9e'
};

export const themeSelector = selector({
  key: 'theme',
  get: ({ get }) => {
    const darkMode = get(darkModeAtom);
    return darkMode ? darkTheme : lightTheme;
  },
});
