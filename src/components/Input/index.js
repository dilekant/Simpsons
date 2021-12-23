import React from 'react';
import { TextInput } from 'react-native';
import styles from './styles';

const Input = ({ style, ...props }) => {
  return (
    <TextInput
      onFocus={
        props.setSearchKeyboardVisible
          ? () => props.setSearchKeyboardVisible(true)
          : null
      }
      onBlur={
        props.setSearchKeyboardVisible
          ? () => props.setSearchKeyboardVisible(false)
          : null
      }
      {...props}
      style={[styles.input, style]}
    />
  );
};

export default Input;
