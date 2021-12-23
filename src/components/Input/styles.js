import { StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    height: hp('6%'),
    borderRadius: hp('0.5%'),
    fontSize: hp(2),
    color: '#000000',
    paddingHorizontal: 10,
    borderWidth: 0.3,
  },
});

export default styles;
