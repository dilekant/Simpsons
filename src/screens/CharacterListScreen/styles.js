import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addContainer: {
    width: wp('100%'),
    position: 'absolute',
    alignItems: 'center',
    bottom: hp('2%'),
  },
  addButton: {
    backgroundColor: '#3084E0',
    width: hp('6.5%'),
    height: hp('6.5%'),
    borderRadius: hp('6.5%') / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    height: hp('10.5%'),
  },
});

export default styles;
