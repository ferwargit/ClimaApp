import React, { useState } from 'react';
import { View, StyleSheet, Alert, TouchableWithoutFeedback, Keyboard, TouchableOpacity, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { getWeather } from '../store/Buscar/actions/weatherActions';
import Form from '../components/Buscar/Form';
import Weather from '../components/Buscar/Weather';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Buscar() {

    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const { data, error } = useSelector(state => state.weather);

    const searchSubmitHandler = () => {
        if (search === '') {
            return Alert.alert('Campo vacío', 'Ingrese el nombre de una ciudad', [{ text: 'OK' }]);
        }

        setLoading(true);
        dispatch(getWeather(search, () => setLoading(false), () => setLoading(false)));
        setSearch('');
        Keyboard.dismiss();
        
    };

    const setFav = async () => {
        try{
            await AsyncStorage.setItem('ciudad', search);
            }catch(err){
                return Alert.alert('Error', 'Error al guardar en favoritos', [{ text: 'OK' }]);
            }
    };
   

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.container}>
                <Form search={search} onSetSearch={setSearch} onSubmit={searchSubmitHandler} />
                <Weather loading={loading} data={data} error={error} />
                <Button title="Añadir a favoritos" color="#00aaff" onSubmit={setFav}/>
                
            </View>
            
        </TouchableWithoutFeedback>
        
       
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});