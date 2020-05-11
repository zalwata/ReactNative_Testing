import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/header'

export default function App() {
  return (
    <View style={styles.container}>
      {/* {header} */}
      <Header />
      <View style = {styles.content}>
        {/* {to form} */}
        <View style = {styles.list}>

        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
