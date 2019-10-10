import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from './pages/Login';
import Cadastrar from './pages/Cadastrar';
import Profile from './pages/Profile';

class HomeScreen extends React.Component{
  render(){
    return(
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen teste 4 -funciona por favor
        </Text>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
  Home: Login,
  Cadastrar: Cadastrar,
  Profile: Profile,
});

/*export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
}*/

export default createAppContainer(AppNavigator);

/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/
