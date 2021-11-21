import React, { useState } from 'react';
import { View, Text } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Weather from '../components/Buscar/Weather';
import { useDispatch, useSelector } from 'react-redux';
import { getWeather } from '../store/Buscar/actions/weatherActions';

export default function Favoritos() {

    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(false);  
    const dispatch = useDispatch();
    const { data, error } = useSelector(state => state.weather);

    setLoading(true);
    dispatch(getWeather(search, () => setLoading(false), () => setLoading(false)));
    
   
const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('ciudades')
      if(value !== null) {
        this.search=ciudades;
      }
    } catch(e) {
        return Alert.alert('Error', 'Error al guardar en favoritos', [{ text: 'OK' }]);
    }
  }
  
    return (
        
        <View>
            <Weather loading={loading} data={getData} error={error} />
        </View>
    )
}
