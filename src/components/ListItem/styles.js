import { StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  button: {
    width: wp('100%'),
    height: hp('8%'),
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderBottomColor: '#000000',
    borderBottomWidth: 0.5,
    paddingHorizontal: 15,
  },
  image: {
    height: hp('5%'),
    width: hp('3%'),
    //backgroundColor: 'red',
  },
  text: {
    marginLeft: 20,
    color: '#000000',
    fontSize: hp('2%'),
    flex: 1,
  },
  deleteButton: {
    height: '100%',
    justifyContent: 'center',
  },
});

export default styles;
