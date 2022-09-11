import {StyleSheet} from 'react-native';
import {colors} from '../constants/colors';
import {FONTS} from '../constants/fonts';
import {
  dimSizes,
  paddingSizes,
  radiusSizes,
  textSizes,
} from '../constants/textSizes';

export const globalStyles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.pri,
    flex: 1,
  },
  thinText: {},
  priBtn: {
    backgroundColor: colors.pri,
    height: dimSizes.x48,
    borderRadius: radiusSizes.x6,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: dimSizes.x16,
  },
  priBtnText: {
    color: colors.white,
    fontFamily: FONTS.sec,
    fontWeight: 'bold',
    fontSize: textSizes.x16,
  },
  secBtn: {
    backgroundColor: colors.white,
    height: dimSizes.x48,
    borderRadius: radiusSizes.x6,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: dimSizes.x16,
    elevation: 3,
    shadowColor: 'gray',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  secBtnText: {
    color: colors.pri,
    fontFamily: FONTS.sec,
    fontWeight: 'bold',
    fontSize: textSizes.x16,
  },
  text: {
    color: colors.black,
    fontSize: textSizes.x13,
    fontFamily: FONTS.sec,
  },
  blackTitle: {
    color: colors.black,
    fontSize: textSizes.x18,
    fontFamily: FONTS.secBolder,
    marginVertical: paddingSizes.x10,
  },
  blackTitleSm: {
    color: colors.black,
    fontSize: textSizes.x14,
    fontFamily: FONTS.secBolder,
    marginVertical: paddingSizes.x10,
  },
  screenAfterBalanceHeaderView: {
    paddingHorizontal: paddingSizes.x20,
    borderRadius: radiusSizes.x24,
    marginTop: -dimSizes.x24,
    backgroundColor: colors.white,
    paddingVertical: paddingSizes.x20,
  },
});
