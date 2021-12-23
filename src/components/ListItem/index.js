import React from 'react';
import {Text, TouchableOpacity, Image} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Trash from '../../icons/Trash';
import styles from './styles';

const ListItem = ({onPress, onPressDelete, name, avatar}) => {
  return (
    <TouchableOpacity activeOpacity={1} onPress={onPress} style={styles.button}>
      <Image resizeMode="contain" source={{uri: avatar}} style={styles.image} />
      <Text style={styles.text}>{name}</Text>
      <TouchableOpacity style={styles.deleteButton} onPress={onPressDelete}>
        <Trash stroke={'#000000'} width={hp('3.5%')} height={hp('3.5%')} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default ListItem;
