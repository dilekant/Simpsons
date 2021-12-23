import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  addCharacterContainer: {
    flex: 1,
    paddingHorizontal: 10,
  },
  inputText: {
    marginTop: 15,
    marginBottom: 5,
    color: '#000000',
    fontSize: hp(2.2),
  },
  input: {},
  inputAbout: {
    height: hp(13),
    textAlignVertical: 'top',
  },
  button: {
    marginTop: 15,
  },
});

export default styles;
