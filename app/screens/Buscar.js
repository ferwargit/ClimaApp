import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Alert, TouchableWithoutFeedback, Keyboard, TouchableOpacity, Text, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { AntDesign } from '@expo/vector-icons'; 
import { getWeather } from '../store/Buscar/actions/weatherActions';
import Form from '../components/Buscar/Form';
import Weather from '../components/Buscar/Weather';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Buscar() {
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const { data, error } = useSelector(state => state.weather);

    const [ciudades, setCiudades] = useState([]);
    const [ciudad, setCiudad] = useState('');
    

    const searchSubmitHandler = () => {
        if (search === '') {
            return Alert.alert('Campo vacío', 'Ingrese el nombre de una ciudad', [{ text: 'OK' }]);
        }

        setLoading(true);        
        dispatch(getWeather(search, () => setLoading(false), () => setLoading(false)));        
        setCiudad(search);
        setSearch('');
        Keyboard.dismiss();
        
    };

    function generaID(digits) {
        let str = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVXZ';
        let uuid = [];
        for (let i = 0; i < digits; i++) {
            uuid.push(str[Math.floor(Math.random() * str.length)]);
        }
        return uuid.join('');
    }

    async function guardarStorage () {
        if (ciudad!= ''){     
        let id=generaID(3);   
        let ciudadObj={ciudad, id};        
        //setCiudades([...ciudades, ciudadObj]);
        ciudades.push(ciudadObj);
        setCiudad('');
        try{            
            await AsyncStorage.setItem('ciudad', JSON.stringify(ciudades));
        }catch(err){
            return Alert.alert('Error', 'Error al guardar en favoritos', [{ text: 'OK' }]);
        }
    }else return Alert.alert('Error', 'No se puede guardar campo vacío', [{ text: 'OK' }]);
    };

    const obtenerStorage = async() => {
        try{
      let items = await AsyncStorage.getItem('ciudad');
      console.log(items);
      if(items !== null) {
        setCiudades(JSON.parse(items))
      }else{
        setCiudades([]);
    } 
    }catch(e){
    return Alert.alert('Error', 'Error al traer en favoritos', [{ text: 'OK' }]);
     }
    }
    
     useEffect(() => {           
        obtenerStorage()
      }, []);

    return (
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.container}>
                <Form search={search} onSetSearch={setSearch} onSubmit={searchSubmitHandler} />
                <Weather loading={loading} data={data} error={error} />

                {data ? <TouchableOpacity activeOpacity={0.8} style={styles.btn} onPress={() =>guardarStorage()}>
                <AntDesign name="plus" size={30} color="#FFF" />
                </TouchableOpacity>: null}

                {/*data ? <Button onPress={() =>guardarStorage()} title="Añadir a favoritos" color="#00aaff" />: null*/}
            </View>            
            </TouchableWithoutFeedback> 
    );
    
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#B3E5FC',
    },
    btn:{
        display: 'flex',
        position: 'absolute',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
        backgroundColor:'#00aaff',
        justifyContent:'center',
        alignItems: 'center',
        width: 57,
        height: 57,
        borderRadius: 100,
        bottom:30,
        right:30,
        padding:5,
      },
});
