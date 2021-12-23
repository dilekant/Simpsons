import { StyleSheet } from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: hp(6),
    borderRadius: hp(0.5),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3084E0',
  },
  text: {
    color: '#FFFFFF',
    fontSize: hp(2),
  },
});

export default styles;
