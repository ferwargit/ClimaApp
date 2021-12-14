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
            return Alert.alert('Validación', 'Se requiere el nombre de una ciudad', [{ text: 'OK' }]);
        }

        setLoading(true);
        dispatch(getWeather(search, () => setLoading(false), () => setLoading(false)));
        setSearch('');
        setCiudad(search);
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
            if (ciudades.length!=0){
                for (var i=0; i<ciudades.length; i++){
                    try{
                        let valor = Object.values(ciudades[i]); 
                        if (valor[0]==ciudad){
                            return Alert.alert('Error', 'La ciudad ya está guardada', [{ text: 'OK' }]); 
                        }
                    }catch(err){
                        console.log('error');
                    }
                    
                }
        }

        // 1.-En data tengo toda la info de la ciudad que ingrese en buscar
        // 2.-Verifico con console.log
        // console.log(data.main.temp);
        // 3.-Guardo la temperatura en la variable temp
        let temp = (data.main.temp - 273.15).toFixed(1);
        // 4.-Guardo el icono en icon y verifico con console.log
        let icon = data.weather[0].icon
        // console.log(data.weather[0].icon)

        let id=generaID(3);
        //  4.-Añado temp e icon al objeto ciudadObj
        let ciudadObj={ciudad, id, temp, icon};
        //  5.-Verifico con console.log
        console.log (ciudadObj)
        // 6.-Ahora me voy a Favoritos.js, linea 102

        
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
    console.log(ciudades);
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
                <AntDesign name="star" size={30} color="#FFF" />
                </TouchableOpacity>: null}
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