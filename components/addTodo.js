import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';

export default function AddTodo() {
    const [text, setText] = useState('');
    
    const changeHandler = (val) => {
        setText(val);
    }

  return (
      <View>
          <TextInput
            style = {styles.input}
            placeholder = 'new todo...'
            onChangeText = {(val) => changeHandler(val)}

          />
      </View>
    
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'coral',
    paddingTop: 38,
    height: 80,
  },

});
