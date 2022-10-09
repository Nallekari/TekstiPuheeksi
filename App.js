
import React, { useState } from 'react';
import { View, StyleSheet, Button, TextInput } from 'react-native';
import * as Speech from 'expo-speech';

export default function App() {

  const [text, setText] = useState('');
  const speak = () => {
    Speech.speak(text);
  };

  return (
    <View style={styles.container}>
      <TextInput style={styles.typebox}
        onChangeText={(text) => setText(text)}
        value={text}></TextInput>
      <Button title="Press to hear text" onPress={speak} />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  typebox: {
    height: 50,
    width: 250,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 20,
  }
});
