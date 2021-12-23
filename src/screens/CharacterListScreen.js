import React, {useContext, useEffect, useLayoutEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const CharacterListScreen = ({navigation}) => {

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    /* let url = `https://5fc9346b2af77700165ae514.mockapi.io/simpsons`;
        axios
            .get(url)
            .then((response) => {
                //setData(response.data.data);
                console.log(response.data.data);
            })
            .catch((error) => {
                console.log(error);
            }); */
  };

  return (
    <View style={styles.container}>
      <Text>Character List Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default CharacterListScreen;
