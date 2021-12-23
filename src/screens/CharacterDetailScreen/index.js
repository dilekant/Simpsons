import React, {useEffect, useState} from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import styles from './styles';

const CharacterDetailScreen = ({navigation, route}) => {
  const [detail, setDetail] = useState([]);

  useEffect(() => {
    setDetail(route.params?.detail);
  }, [route]);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.container}>
        <Image
          resizeMode="contain"
          source={{uri: detail?.avatar}}
          style={styles.image}
        />
        <Text style={styles.nameText}>{detail?.name}</Text>
        <Text style={styles.jobText}>{detail?.job}</Text>
        <Text style={styles.aboutText}>{detail?.about}</Text>
      </View>
    </ScrollView>
  );
};

export default CharacterDetailScreen;
