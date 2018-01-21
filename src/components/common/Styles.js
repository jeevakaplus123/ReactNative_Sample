import { StyleSheet, Dimensions, Platform } from 'react-native';
import {
  WHITE,
  DARKEST_GRAY,
  DARKER_GRAY,
  DARK_GRAY,
  LIGHT_GRAY,
  LIGHTER_GRAY,
  LIGHTEST_GRAY,
  LIGHEST_GRAY2,
  RED,
  BLACK,
  BLUE,
  ORANGE,
  GREEN
} from './Colors';

const windowSize = Dimensions.get('window');

module.exports = StyleSheet.create({
  //Container Styles
  flex1: {
    flex: 1
  },

  flex1point: {
    flex: 1.5
  },

  flex2: {
    flex: 2
  },

  flex2point: {
    flex: 2.5
  },

  flex3: {
    flex: 3
  },

  flex4: {
    flex: 4
  },

  flex5: {
    flex: 5
  },

  flex6: {
    flex: 6
  },

  flexDirection: {
    flexDirection: 'row'
  },

	appContainerStyles: {
    backgroundColor: LIGHTEST_GRAY,
    flex: 1,
    ...Platform.select({
      android: {
        marginTop: -10
      }
    })
	},

  cardSectionStyles: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10
  },

  spinnerContainerStyles: {
    backgroundColor: DARK_GRAY
  },

  //Aligns
  alignSelf: {
    alignSelf: 'center'
  },

  //Colors
  darkestGray: {
      color: DARKEST_GRAY
  },

  darkerGray: {
    color: DARKER_GRAY
  },

  darkGray: {
    color: DARK_GRAY
  },

  lightGray: {
    color: LIGHT_GRAY
  },

  lighterGray: {
    color: LIGHTER_GRAY
  },

  white: {
    color: WHITE
  },

  black: {
    color: BLACK
  },

  blue: {
    color: BLUE
  },

  orange: {
    color: ORANGE
  },

  green: {
    color: GREEN
  },

  red: {
    color: RED
  },

  //Text Styles
  textSize10: {
    fontSize: 10
  },

  textSize12: {
    fontSize: 12
  },

  textSize14: {
    fontSize: 14
  },

  textSize16: {
    fontSize: 16
  },

  textSize18: {
    fontSize: 18
  },

  textSize20: {
    fontSize: 20
  },

  centerContent: {
    alignItems: 'center',
    justifyContent: 'center'
  },

  boldText: {
    fontWeight: 'bold'
  },

  italicText: {
    fontStyle: 'italic'
  },

  textCenter: {
    textAlign: 'center'
  },

  fontFamilyRegular: {
    fontFamily: 'SFUIText-Regular'
  },

  fontFamilyLight: {
    fontFamily: 'SFUIText-Light'
  },

  fontFamilyBold: {
    fontFamily: 'SFUIText-Bold'
  },

  fontFamilySemiBold: {
    fontFamily: 'SFUIText-SemiBold'
  },

  fontFamilyAwesome: {
    fontFamily: 'FontAwesome'
  },

  fontFamilyEmpite: {
    fontFamily: 'empitefont'
  },

  //Button Styles
  buttonStyles: {
    backgroundColor: DARKEST_GRAY,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0
  },

  buttonTextStyles: {
    color: WHITE
  },

  bottomButtonStyles: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: RED,
    width: windowSize.width
  },

  //input Styles
  inputWrapperStyles: {
    backgroundColor: WHITE
  },

  inputStyles: {
    borderBottomWidth: 1,
    borderColor: LIGHEST_GRAY2
  },

  inputTextStyles: {

  },

  //Common header styles
  headerStyles: {
    paddingTop: 20,
    paddingBottom: 20
  },

  headerContentStyles: {
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 20,
  },

  //Search Component Styles
  searchContainerStyles: {
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 2,
    paddingRight: 2
  },

  searchInputStyles: {
    textAlign: 'center'
  },

  modal: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  modal2: {
    height: 65,
    backgroundColor: RED,
    paddingTop: 20,
    paddingBottom: 10,
    paddingRight: 10,
    paddingLeft: 10
  },

  modal3: {
    height: 65,
    backgroundColor: WHITE,
    paddingTop: 20,
    paddingBottom: 10
  },

  toolTipTextStyles: {
    color: BLACK
  },

  errorTextStyles: {
    color: WHITE
  }

});
