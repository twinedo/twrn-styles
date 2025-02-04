import { StyleSheet } from 'react-native';
import type { ImageResizeMode } from 'react-native';
import { colors } from './colors';
import fontFamily from './fontFamily';
import { percentageHeight, percentageWidth } from './sizes';

function percentageImage(
  w: string | number | any,
  h: string | number | any,
  resizeMode: ImageResizeMode = 'contain'
) {
  const result = StyleSheet.create({
    style: {
      width: `${w}%`,
      height: `${h}%`,
      resizeMode: resizeMode,
    },
  });
  return result;
}

const createdStyles = StyleSheet.create({
  transparentContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  flexGrow: {
    flexGrow: 1,
  },
  displayFlex: {
    flex: 1,
  },
  flex0p5: {
    flex: 0.5,
  },
  flex1p5: {
    flex: 1.5,
  },
  flex2: {
    flex: 2,
  },
  flex2p5: {
    flex: 2.5,
  },
  flex3: {
    flex: 3,
  },
  flexWrap: {
    flexWrap: 'wrap',
  },
  flexWrapReverse: {
    flexWrap: 'wrap-reverse',
  },
  w100: {
    width: '100%',
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  justifySpaceBetween: {
    justifyContent: 'space-between',
  },
  justifyEven: {
    justifyContent: 'space-evenly',
  },
  justifyAround: {
    justifyContent: 'space-around',
  },
  justifyStart: {
    justifyContent: 'flex-start',
  },
  justifyEnd: {
    justifyContent: 'flex-end',
  },
  alignSelfStart: {
    alignSelf: 'flex-start',
  },
  alignSelfCenter: {
    alignSelf: 'center',
  },
  alignSelfEnd: {
    alignSelf: 'flex-end',
  },
  alignStart: {
    alignItems: 'flex-start',
  },
  alignCenter: {
    alignItems: 'center',
  },
  alignEnd: {
    alignItems: 'flex-end',
  },
  relative: {
    position: 'relative',
  },
  title: {
    fontSize: 16,
    lineHeight: percentageHeight(5),
  },
  bodyText1: {
    fontSize: 14,
  },
  bodyText2: {
    fontSize: 16,
  },
  caption: {
    fontSize: 10.5,
  },
  textAlignLeft: {
    textAlign: 'left',
  },
  textAlignCenter: {
    textAlign: 'center',
  },
  textAlignRight: {
    textAlign: 'right',
  },
  textAlignJustified: {
    textAlign: 'justify',
  },
  horizontalDefaultPadding: {
    paddingHorizontal: percentageWidth(4),
  },
  verticalDefaultPadding: {
    paddingVertical: percentageWidth(3.2),
  },
  topDefaultPadding: {
    paddingTop: percentageHeight(2.7),
  },
  bottomDefaultPadding: {
    paddingBottom: percentageHeight(2.7),
  },
  subtitle: {
    fontSize: 12,
  },
  h5: {
    fontSize: 24,
  },
  h6: {
    fontSize: 18,
  },
  absolute: {
    position: 'absolute',
  },
  bottom: {
    bottom: 0,
  },
  row: {
    flexDirection: 'row',
  },
  rowGap4: {
    rowGap: 4
  },
  rowGap8: {
    rowGap: 8,
  },
  rowGap12: {
    rowGap: 12,
  },
  rowGap16: {
    rowGap: 16,
  },
  columnGap4: {
    columnGap: 4,
  },
  columnGap8: {
    columnGap: 8,
  },
  columnGap12: {
    columnGap: 12,
  },
  columnGap16: {
    columnGap: 16,
  },
  gap: {
    gap: 8,
  },
  gap16: {
    gap: 16,
  },
  gap20: {
    gap: 20,
  },
  atBottom: {
    bottom: 0,
    left: 0,
  },
  useWhiteColor: {
    color: colors.WHITE,
  },
  usePrimaryColor: {
    color: colors.PRIMARY,
  },
  useGray2Color: {
    color: colors.GREY7F,
  },
  useGray3Color: {
    color: colors.GREYD9,
  },
  useGray3BgColor: {
    backgroundColor: colors.GREYD9,
  },
  usePrimaryBgColor: {
    backgroundColor: colors.PRIMARY,
  },
  itemListImage: {
    width: percentageWidth(14.5),
    height: percentageWidth(14.5),
    resizeMode: 'contain',
  },
  itemListPaddingVertical: {
    paddingVertical: percentageHeight(1.6),
  },
  itemListContent: {
    width: '60%',
    paddingHorizontal: percentageWidth(4),
  },
  grayRoundedInputContainer: {
    borderRadius: 5,
    alignSelf: 'center',
    backgroundColor: '#F4F4F4',
    width: '100%',
  },
  txtError: {
    color: colors.RED,
  },
  useBlueColor: {
    color: colors.SECONDARY,
  },
  paddingTopLg: {
    paddingTop: percentageWidth(12.25),
  },
  floatingButton: {
    bottom: percentageWidth(12),
    position: 'absolute',
    left: percentageWidth(4.2),
    right: percentageWidth(4.2),
  },
  bgTransparent: {
    backgroundColor: 'transparent',
  },
  p0: {
    padding: 0
  },
  p2: {
    padding: 2
  },
  p4: {
    padding: 4
  },
  p8: {
    padding: 8
  },
  p10: {
    padding: 10,
  },
  p12: {
    padding: 12,
  },
  p14: {
    padding: 14,
  },
  p16: {
    padding: 16
  },
  px0: {
    paddingHorizontal: 0
  },
  px2: {
    paddingHorizontal: 2
  },
  px4: {
    paddingHorizontal: 4
  },
  px8: {
    paddingHorizontal: 8
  },
  px10: {
    paddingHorizontal: 10,
  },
  px12: {
    paddingHorizontal: 12,
  },
  px14: {
    paddingHorizontal: 14,
  },
  px16: {
    paddingHorizontal: 16
  },
  py0: {
    paddingVertical: 0
  },
  py2: {
    paddingVertical: 2
  },
  py4: {
    paddingVertical: 4
  },
  py8: {
    paddingVertical: 8
  },
  py10: {
    paddingVertical: 10,
  },
  py12: {
    paddingVertical: 12,
  },
  py14: {
    paddingVertical: 14,
  },
  py16: {
    paddingVertical: 16
  },
  m0: {
    margin: 0
  },
  m2: {
    margin: 2
  },
  m4: {
    margin: 4
  },
  m8: {
    margin: 8
  },
  m10: {
    margin: 10,
  },
  m12: {
    margin: 12,
  },
  m14: {
    margin: 14,
  },
  m16: {
    margin: 16
  },
  mx0: {
    marginHorizontal: 0
  },
  mx2: {
    marginHorizontal: 2
  },
  mx4: {
    marginHorizontal: 4
  },
  mx8: {
    marginHorizontal: 8
  },
  mx10: {
    marginHorizontal: 10,
  },
  mx12: {
    marginHorizontal: 12,
  },
  mx14: {
    marginHorizontal: 14,
  },
  mx16: {
    marginHorizontal: 16
  },
  my0: {
    marginVertical: 0
  },
  my2: {
    marginVertical: 2
  },
  my4: {
    marginVertical: 4
  },
  my8: {
    marginVertical: 8
  },
  my10: {
    marginVertical: 10,
  },
  my12: {
    marginVertical: 12,
  },
  my14: {
    marginVertical: 14,
  },
  my16: {
    marginVertical: 16
  },
});

const textStyles = {
  headingBlack: StyleSheet.create({
    h1: {
      color: colors.BLACK,
      fontFamily: fontFamily.black,
      fontSize: 26,
    },
    h2: {
      color: colors.BLACK,
      fontFamily: fontFamily.black,
      fontSize: 20,
    },
    h3: {
      color: colors.BLACK,
      fontFamily: fontFamily.black,
      fontSize: 16,
    },
  }),
  headingBold: StyleSheet.create({
    h1: {
      color: colors.BLACK,
      fontFamily: fontFamily.bold,

      fontSize: 26,
    },
    h2: {
      color: colors.BLACK,
      fontFamily: fontFamily.bold,

      fontSize: 20,
    },
    h3: {
      color: colors.BLACK,
      fontFamily: fontFamily.bold,
      fontSize: 16,
    },
  }),
  headingLight: StyleSheet.create({
    h1: {
      color: colors.BLACK,
      fontFamily: fontFamily.light,
      fontSize: 26,
    },
    h2: {
      color: colors.BLACK,
      fontFamily: fontFamily.light,
      fontSize: 20,
    },
    h3: {
      color: colors.BLACK,
      fontFamily: fontFamily.light,
      fontSize: 16,
    },
  }),
  headingMedium: StyleSheet.create({
    h1: {
      color: colors.BLACK,
      fontFamily: fontFamily.medium,
      fontSize: 26,
    },
    h2: {
      color: colors.BLACK,
      fontFamily: fontFamily.medium,
      fontSize: 20,
    },
    h3: {
      color: colors.BLACK,
      fontFamily: fontFamily.medium,
      fontSize: 16,
    },
  }),
  headingRegular: StyleSheet.create({
    h1: {
      color: colors.BLACK,
      fontFamily: fontFamily.regular,
      fontSize: 26,
    },
    h2: {
      color: colors.BLACK,
      fontFamily: fontFamily.regular,
      fontSize: 20,
    },
    h3: {
      color: colors.BLACK,
      fontFamily: fontFamily.regular,
      fontSize: 16,
    },
  }),
  headingThin: StyleSheet.create({
    h1: {
      color: colors.BLACK,
      fontFamily: fontFamily.thin,
      fontSize: 26,
    },
    h2: {
      color: colors.BLACK,
      fontFamily: fontFamily.thin,
      fontSize: 20,
    },
    h3: {
      color: colors.BLACK,
      fontFamily: fontFamily.thin,
      fontSize: 16,
    },
  }),
  bodyBlack: StyleSheet.create({
    h1: {
      color: colors.BLACK,
      fontFamily: fontFamily.black,
      fontSize: 14,
    },
    h2: {
      color: colors.BLACK,
      fontFamily: fontFamily.black,
      fontSize: 12,
    },
    h3: {
      color: colors.BLACK,
      fontFamily: fontFamily.black,
      fontSize: 10,
    },
  }),
  bodyBold: StyleSheet.create({
    h1: {
      color: colors.BLACK,
      fontFamily: fontFamily.bold,
      fontSize: 14,
    },
    h2: {
      color: colors.BLACK,
      fontFamily: fontFamily.bold,
      fontSize: 12,
    },
    h3: {
      color: colors.BLACK,
      fontFamily: fontFamily.bold,
      fontSize: 10,
    },
  }),
  bodyLight: StyleSheet.create({
    h1: {
      color: colors.BLACK,
      fontFamily: fontFamily.light,
      fontSize: 14,
    },
    h2: {
      color: colors.BLACK,
      fontFamily: fontFamily.light,
      fontSize: 12,
    },
    h3: {
      color: colors.BLACK,
      fontFamily: fontFamily.light,
      fontSize: 10,
    },
  }),
  bodyMedium: StyleSheet.create({
    body1: {
      color: colors.BLACK,
      fontFamily: fontFamily.medium,
      fontSize: 14,
    },
    body2: {
      color: colors.BLACK,
      fontFamily: fontFamily.medium,
      fontSize: 12,
    },
    body3: {
      color: colors.BLACK,
      fontFamily: fontFamily.medium,
      fontSize: 10,
    },
  }),
  bodyRegular: StyleSheet.create({
    body1: {
      color: colors.BLACK,
      fontFamily: fontFamily.regular,
      fontSize: 14,
    },
    body2: {
      color: colors.BLACK,
      fontFamily: fontFamily.regular,
      fontSize: 12,
    },
    body3: {
      color: colors.BLACK,
      fontFamily: fontFamily.regular,
      fontSize: 10,
    },
  }),
  bodyThin: StyleSheet.create({
    body1: {
      color: colors.BLACK,
      fontFamily: fontFamily.thin,
      fontSize: 14,
    },
    body2: {
      color: colors.BLACK,
      fontFamily: fontFamily.thin,
      fontSize: 12,
    },
    body3: {
      color: colors.BLACK,
      fontFamily: fontFamily.thin,
      fontSize: 10,
    },
  }),
} as const;

const mergedStyles = {
  center: StyleSheet.flatten([
    createdStyles.justifyCenter,
    createdStyles.alignCenter,
  ]),
};
export const globalStyles = {
  ...mergedStyles,
  ...createdStyles,
  ...textStyles,
  percentageImage,
};

export type GlobalStyles = typeof globalStyles;
