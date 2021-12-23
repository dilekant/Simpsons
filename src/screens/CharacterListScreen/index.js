import React, {useEffect, useState} from 'react';
import {View, FlatList, TouchableOpacity} from 'react-native';
import axios from 'axios';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import ListItem from '../../components/ListItem';
import Add from '../../icons/Add';
import styles from './styles';

const CharacterListScreen = ({navigation}) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    let url = `https://5fc9346b2af77700165ae514.mockapi.io/simpsons`;
    axios
      .get(url)
      .then(response => {
        setData(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
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
            key={index}
            {...item}
            onPress={() =>
              navigation.navigate('CharacterDetailScreen', {detail: item})
            }
          />
        )}
        ListFooterComponent={<View style={styles.footer} />}
      />
      <View style={styles.addContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('AddCharacterScreen')} style={styles.addButton}>
          <Add stroke={'#ffffff'} width={hp('3.5%')} height={hp('3.5%')} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CharacterListScreen;
