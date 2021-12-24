import {StyleSheet} from 'react-native';
import {
  responsiveScreenWidth,
  responsiveScreenHeight,
} from 'react-native-responsive-dimensions';

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
    width: responsiveScreenWidth(100),
    position: 'absolute',
    alignItems: 'center',
    bottom: responsiveScreenHeight(3),
  },
  addButton: {
    backgroundColor: '#3084E0',
    width: responsiveScreenHeight(6.5),
    height: responsiveScreenHeight(6.5),
    borderRadius: responsiveScreenHeight(6.5) / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    height: responsiveScreenHeight(10.5),
  },
});

export default styles;
