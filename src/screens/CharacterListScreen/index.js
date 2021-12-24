import React, {useContext, useEffect, useState} from 'react';
import {
  View,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {responsiveScreenHeight} from 'react-native-responsive-dimensions';
import ListItem from '../../components/ListItem';
import Add from '../../icons/Add';
import {RefreshContext} from '../../contexts/RefreshContext';
import styles from './styles';

const CharacterListScreen = ({navigation}) => {
  const {shouldRefresh, refreshProduct} = useContext(RefreshContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    getSimpsons();
  }, []);

  useEffect(() => {
    const refreshListener = navigation.addListener('focus', () => {
      if (refreshProduct) {
        getSimpsons();
        shouldRefresh(false);
      }
    });
    return refreshListener;
  }, [navigation, refreshProduct]);

  const getSimpsons = async () => {
    try {
      const value = await AsyncStorage.getItem('SIMPSONS');
      if (value !== null) {
        setData(JSON.parse(value));
      } else {
        getData();
      }
    } catch (e) {
      // error reading value
    }
  };

  const getData = () => {
    let url = `https://5fc9346b2af77700165ae514.mockapi.io/simpsons`;
    axios
      .get(url)
      .then(response => {
        setData(response.data);
        setSimpsons(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const setSimpsons = async response => {
    console.log('response setle');
    try {
      const jsonValue = JSON.stringify(response);
      await AsyncStorage.setItem('SIMPSONS', jsonValue);
    } catch (e) {
      // saving error
    }
  };

  const deletePress = item => {
    let simpsonsArray = data.filter(e => {
      return e !== item;
    });
    setData(simpsonsArray);
    setSimpsons(simpsonsArray);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        style={styles.listContainer}
        numColumns={1}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => (
          <ListItem
            {...item}
            key={index}
            onPress={() =>
              navigation.navigate('CharacterDetailScreen', {detail: item})
            }
            onPressDelete={() => deletePress(item)}
          />
        )}
        ListFooterComponent={<View style={styles.footer} />}
      />
      <View style={styles.addContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('AddCharacterScreen')}
          style={styles.addButton}>
          <Add
            stroke={'#ffffff'}
            width={responsiveScreenHeight(3.5)}
            height={responsiveScreenHeight(3.5)}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CharacterListScreen;
