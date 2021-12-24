import React, { useCallback, useState } from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CharacterListScreen from './src/screens/CharacterListScreen';
import CharacterDetailScreen from './src/screens/CharacterDetailScreen';
import AddCharacterScreen from './src/screens/AddCharacterScreen';
import {RefreshContext} from './src/contexts/RefreshContext';

const Stack = createNativeStackNavigator();

const App = () => {
  const [refreshProduct, setRefreshProduct] = useState(false);

  const shouldRefresh = useCallback(
    status => {
      setRefreshProduct(status);
    },
    [refreshProduct],
  );

  return (
    <RefreshContext.Provider value={{shouldRefresh, refreshProduct}}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="CharacterListScreen"
            component={CharacterListScreen}
            options={{
              title: 'Simpsons',
              headerStyle: styles.header,
              headerTitleStyle: styles.headerText,
              headerTitleAlign: 'center',
            }}
          />
          <Stack.Screen
            name="CharacterDetailScreen"
            component={CharacterDetailScreen}
            options={{
              title: 'Details',
              headerStyle: styles.header,
              headerTitleStyle: styles.headerText,
              headerTitleAlign: 'center',
            }}
          />
          <Stack.Screen
            name="AddCharacterScreen"
            component={AddCharacterScreen}
            options={{
              title: 'Add New Character',
              headerStyle: styles.header,
              headerTitleStyle: styles.headerText,
              headerTitleAlign: 'center',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </RefreshContext.Provider>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#FFFFFF',
  },
  headerText: {
    color: '#000000',
  },
});

export default App;
