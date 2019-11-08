import {
  StyleSheet,
  Platform
} from 'react-native';

export const colors = {
  primary: '#9EB659',
  secondary: '#1F3620',
  green: '#597824',
  gray:'#565656',
  grey0: '#D5D6D8',
  grey1: '#EDEFED',
  grey2: '#eeeeee',
  grey3: '#858585',
  disabled: '#dadee0',
  white: '#FFFFFF',
  black: '#000000',
  facebook: '#2672CB',
  twitter: '#4FC4FF',
  googlePlus: '#FC3850',
  error: '#ff190c',
  red: '#e82006',
  textPrimary: '#1f314a',
  dateGreen : '#6d7b6e',
  addressGreen : '#9eb659',
  rateColor: '#274c6d',
  test:'#000077',
  change:''
};

export const navigatorStyle = {
  navigationBarColor: 'black',
  navBarTextColor: 'white',
  navBarButtonColor: 'white',
  navBarBackgroundColor: '#163258',
  statusBarTextColorScheme: 'light',
  navBarHidden: true
};

export const fontFamily = Platform.OS === 'android' ? 'A.Jannat.LT.Bold' : 'AJannatLT-Bold';

export const theme = StyleSheet.create({
  btnLinkTextPrimary: {

  },
  btnLinkTextSecondary: {
    color: colors.grey3,
    textAlign: 'center'
  }
});