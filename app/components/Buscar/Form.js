/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import Buscar from '../../screens/Buscar';



const Form = ({ search, onSetSearch, onSubmit }) => {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.heading}>Ingrese el nombre de la ciudad y presione el botón de búsqueda</Text> */}
      <View>
        <TextInput style={styles.input} placeholder="Ingrese el nombre de la ciudad ..." value={search} onChangeText={(val) => onSetSearch(val)} />
        <Button title="Buscar" onPress={onSubmit} color="#00aaff"/>
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f1f1f1',
  },
  heading: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#dbdbdb',
    borderRadius: 4,
    backgroundColor: '#fff',
    color: '#363636',
    paddingVertical: 5,
    paddingHorizontal: 10,
    fontSize: 16,
    marginBottom: 10,
  },
  
});

export default Form;
