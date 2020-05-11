import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
        <Text style = { styles.title }> My Todos </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'coral',
    height: 80,
  },
  title: {
      textAlign: 'center',
      fontSize: 20,
      padding: 30,
      color: '#fff',
      fontWeight: 'bold',
  },
});
