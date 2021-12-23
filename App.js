import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CharacterListScreen from './src/screens/CharacterListScreen';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  header: {
    elevation: 0,
    shadowOpacity: 0,
    height: 80,
    backgroundColor: '#FFFFFF',
  },
  headerText: {
    color: '#000000',
    fontSize: 20,
  },
});

export default App;
