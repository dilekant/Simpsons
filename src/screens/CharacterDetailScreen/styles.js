import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: hp('35%'),
    marginTop: 25,
    marginBottom: 15,
  },
  nameText: {
    color: '#000000',
    fontSize: hp('3.5%'),
    textAlign: 'center',
  },
  jobText: {
    fontSize: hp('2.2%'),
    textAlign: 'center',
  },
  aboutText: {
    marginTop: 15,
    fontSize: hp('1.8%'),
    marginHorizontal: 15,
  },
});

export default styles;
