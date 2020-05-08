import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {

  return (
    <View style={styles.header}>
        <Text style = {styles.title }> My Todos </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'coral',
    height: 80,
    paddingTop: 38

  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold'
  },
});
