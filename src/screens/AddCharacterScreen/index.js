import React, {useContext, useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {RefreshContext} from '../../contexts/RefreshContext';
import styles from './styles';

const AddCharacterScreen = ({navigation}) => {
  const {shouldRefresh} = useContext(RefreshContext);
  const [data, setData] = useState([]);
  const [name, setName] = useState('');
  const [job, setJob] = useState('');
  const [about, setAbout] = useState('');
  const [image, setImage] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    getSimpsons();
  }, []);

  const getSimpsons = async () => {
    try {
      const value = await AsyncStorage.getItem('SIMPSONS');
      if (value !== null) {
        setData(JSON.parse(value));
      }
    } catch (e) {
      // error reading value
    }
  };

  const setSimpsons = async response => {
    console.log('response setle');
    try {
      const jsonValue = JSON.stringify(response);
      await AsyncStorage.setItem('SIMPSONS', jsonValue);
      shouldRefresh(true);
      navigation.pop();
    } catch (e) {
      // saving error
    }
  };

  const addPress = () => {
    setError('');
    if(name === '' || job === '' || about === '' || image === '') {
      setError('Please fill in the blanks');
    } else {
      const newCharacter = {
        about: about,
        avatar: image,
        job: job,
        name: name,
      };
      data.push(newCharacter);
      setSimpsons(data);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.addCharacterContainer}>
        <Text style={styles.inputText}>Name Surname: </Text>
        <Input value={name} onChangeText={setName} style={styles.input} />
        <Text style={styles.inputText}>Job Title: </Text>
        <Input value={job} onChangeText={setJob} style={styles.input} />
        <Text style={styles.inputText}>About Him/Her: </Text>
        <Input
          value={about}
          onChangeText={setAbout}
          style={styles.inputAbout}
          multiline
        />
        <Text style={styles.inputText}>Image Link: </Text>
        <Input value={image} onChangeText={setImage} style={styles.input} />
        {error === '' ? null : <Text style={styles.errorText}>{error}</Text>}
        <Button
          title={'Add Character'}
          style={styles.button}
          onPress={() => addPress()}
        />
      </View>
    </View>
  );
};

export default AddCharacterScreen;
