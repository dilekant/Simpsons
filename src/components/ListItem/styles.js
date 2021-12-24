import { StyleSheet } from 'react-native';
import {responsiveScreenWidth, responsiveScreenHeight} from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({
  button: {
    width: responsiveScreenWidth(100),
    height: responsiveScreenHeight(8),
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
    paddingHorizontal: 15,
  },
  image: {
    height: responsiveScreenHeight(5),
    width: responsiveScreenHeight(3),
    //backgroundColor: 'red',
  },
  text: {
    marginLeft: 20,
    color: '#000000',
    fontSize: responsiveScreenHeight(2),
    flex: 1,
  },
  deleteButton: {
    height: '100%',
    justifyContent: 'center',
  },
});

export default styles;
