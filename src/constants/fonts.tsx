import {Platform} from 'react-native';
export const FONTS = {
  ...Platform.select({
    android: {
      pri: 'Cabin-SemiBold',
    },
    ios: {
      pri: 'Cabin',
    },
  }),
  //pri: 'Cabin',
  sec: 'Roboto-Regular',
  secMedium: 'Roboto-Medium',
  //secBold: 'Roboto-SemiBold',
  secBolder: 'Roboto-Bold',
};
