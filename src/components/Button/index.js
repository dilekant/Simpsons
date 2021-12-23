import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';

const Button = ({onPress, title, style}) => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={onPress}
      style={[styles.button, style]}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
