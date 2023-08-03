import {darkModeAtom} from './darkMode';
import {selector} from 'recoil';

const lightTheme = {
  backgroundColor: 'orange',
  textColor: 'black',
};

const darkTheme = {
  backgroundColor: 'black',
  textColor: 'white',
};

export const themeSelector = selector({
  key: 'theme',
  get: ({get}) => {
    const darkMode = get(darkModeAtom);
    return darkMode ? darkTheme : lightTheme;
  },
});
