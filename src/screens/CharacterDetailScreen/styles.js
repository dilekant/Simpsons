import {StyleSheet} from 'react-native';
import {responsiveScreenHeight} from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: responsiveScreenHeight(35),
    marginTop: 25,
    marginBottom: 15,
  },
  nameText: {
    color: '#000000',
    fontSize: responsiveScreenHeight(3.5),
    textAlign: 'center',
  },
  jobText: {
    fontSize: responsiveScreenHeight(2.2),
    textAlign: 'center',
  },
  aboutText: {
    marginTop: 15,
    fontSize: responsiveScreenHeight(1.8),
    marginHorizontal: 15,
  },
});

export default styles;
