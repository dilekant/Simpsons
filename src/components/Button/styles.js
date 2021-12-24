import { StyleSheet } from 'react-native';
import {responsiveScreenHeight} from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: responsiveScreenHeight(6),
    borderRadius: responsiveScreenHeight(0.5),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3084E0',
  },
  text: {
    color: '#FFFFFF',
    fontSize: responsiveScreenHeight(2),
  },
});

export default styles;
