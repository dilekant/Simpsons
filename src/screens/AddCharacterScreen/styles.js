import {StyleSheet} from 'react-native';
import {responsiveScreenHeight} from 'react-native-responsive-dimensions';

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
    fontSize: responsiveScreenHeight(2),
  },
  input: {},
  inputAbout: {
    height: responsiveScreenHeight(13),
    textAlignVertical: 'top',
  },
  button: {
    marginTop: 15,
  },
  errorText: {
    marginTop: 15,
    color: 'red',
    fontSize: responsiveScreenHeight(2.2),
    textAlign: 'center',
  },
});

export default styles;
