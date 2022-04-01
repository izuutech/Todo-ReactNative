import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { useState } from 'react';

export default function App() {

  const [name, setName]=useState("shaun");
  const [age, setAge]=useState("30");


  return (
    <View style={styles.container}>
      <Text>Enter Name:</Text>
      <TextInput 
        multiline
        style={styles.input}
        placeholder= "eg. John Doe"
        onChangeText={(value)=>setName(value)}
      />


      <Text>Enter Age:</Text>
      <TextInput 
      
      keyboardType='numeric'
        style={styles.input}
        placeholder= "eg. 99"
        onChangeText={(value)=>setAge(value)}
      />
        <Text>Name: {name}, Age: {age}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    margin: 10,
    width: 200,
  }
});
