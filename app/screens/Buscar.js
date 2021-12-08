import React, { useState } from 'react';
import { View, StyleSheet, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { getWeather } from '../store/Buscar/actions/weatherActions';
import Form from '../components/Buscar/Form';
import Weather from '../components/Buscar/Weather';


export default function Buscar() {

    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const { data, error } = useSelector(state => state.weather);

    const searchSubmitHandler = () => {


        if (search === '') {
            return Alert.alert('Validación', 'Se requiere el nombre de una ciudad', [{ text: 'OK' }]);
        }

        setLoading(true);
        dispatch(getWeather(search, () => setLoading(false), () => setLoading(false)));
        setSearch('');
        Keyboard.dismiss();
    };

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.container}>
                <Form search={search} onSetSearch={setSearch} onSubmit={searchSubmitHandler} />
                <Weather loading={loading} data={data} error={error} />
            </View>
        </TouchableWithoutFeedback>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#B3E5FC',
    },
});