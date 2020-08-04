import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface IHomeProps {

}

interface IHomeState {
  
}

export default class App extends React.Component<IHomeProps, IHomeState> {
  render() {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>My first React app!</Text>
      <Text>This is neat</Text>
      <StatusBar style="auto" />
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 20,
    color: 'blue'
  }
});
