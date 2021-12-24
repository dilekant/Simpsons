import {StyleSheet} from 'react-native';
import {responsiveScreenHeight} from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    height: responsiveScreenHeight(6),
    borderRadius: responsiveScreenHeight(0.5),
    fontSize: responsiveScreenHeight(2),
    color: '#000000',
    paddingHorizontal: 10,
    borderWidth: 0.5,
    borderColor: 'gray',
  },
});

export default styles;
