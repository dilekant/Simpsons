import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import Input from '../../components/Input';
import Button from '../../components/Button';
import styles from './styles';

const AddCharacterScreen = ({navigation}) => {

  const addPress = () => {
    console.log('add'); 
  }

  return (
    <View style={styles.container}>
      <View style={styles.addCharacterContainer}>
        <Text style={styles.inputText}>Name Surname: </Text>
        <Input style={styles.input} />
        <Text style={styles.inputText}>Job Title: </Text>
        <Input style={styles.input} />
        <Text style={styles.inputText}>About Him/Her: </Text>
        <Input style={styles.inputAbout} multiline />
        <Text style={styles.inputText}>Image Link: </Text>
        <Input style={styles.input} />
        <Button title={'Add Character'} style={styles.button} onPress={() => addPress()} />
      </View>
    </View>
  );
};

export default AddCharacterScreen;
