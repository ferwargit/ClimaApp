import React, { useState} from "react";
import { View, Text, TextInput } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { FlatList } from "react-native-gesture-handler";
import data from '../../citiesList.json';



export default class Favoritos extends React.Component<Props> {

    constructor(props) {
        super(props);
        this.state = {
            dataSource: []
        }
    }

    componentDidMount() {
        this.setState({
            dataSource: data,
            filterCities: data
            
        });
    }
    

    /* async componentDidMount(){
        
        let url = 'https://api.openbrewerydb.org/breweries'
        fetch(url)
        .then((response) => response.json())
        .then((json) => {
            console.log('JSON', json)
            this.setState({ciudades: json})
            return json
        })
        .catch((error) =>{
            console.log(error)
            this.setState({ciudades: []})
        })
    } */

    

    onChangeText(text){
        //console.log("textChanged", text);
        let filterArray = this.state.filterCities
        let searchResult = filterArray.filter(city =>
            city.name.includes(text)
        )
        this.setState({dataSource: searchResult});
    }

    render(){
        return (
            <View style={{
                flex: 1,
                backgroundColor: '#039BE5'

            }}>
                {/* HEADER */}
                <View style={{
                    borderBottomWidth: 1,
                    borderColor: '#ddd',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: 30
                }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 'bold',
                        color: '#fff'
                    }}>Lista de Ciudades</Text>
                </View>
    
                {/* SEARCH BAR */}
                <View style={{
                    backgroundColor: '#B3E5FC'
                }}>
                    <TextInput
                    placeholder="Buscar"
                    style={{
                        margin: 15,
                        padding: 7,
                        paddingLeft: 30,
                        borderWidth: 1,
                        borderColor: '#ddd',
                        borderRadius: 10,
                        fontSize: 16,
                        backgroundColor: '#fff'
                    }}
                    onChangeText={text => this.onChangeText(text)}
                    />
                    <Ionicons
                        style={{
                            position: 'absolute',
                            left: 22,
                            top: 22
                        }}
                        name="ios-search"
                        size={20}
                        color="#ddd"
                    />
                </View>
                
                {/* LISTA DE CIUDADES */}
                <FlatList
                    style={{
                        backgroundColor: '#B3E5FC'
                    }}
                    data={this.state.dataSource}
                    renderItem={({ item }) => {
                        return (
                            <View
                            style={{
                                //backgroundColor: '#00B0FF',
                                backgroundColor: '#81D4FA',
                                marginHorizontal: 10,
                                marginVertical: 5,
                                borderRadius: 10,
                                borderColor: '"ddd',
                                borderWidth: 1,
                                padding: 10
                            }}>
                                <Text style={{
                                    fontSize: 15,
                                    fontWeight: 'bold',
                                    marginBottom: 5,
                                    color: '#0277BD'
                                }}>{item.name}</Text>
                                <Text style={{
                                    color: '#0288D1'
                                }}>{item.country}</Text>
                                {/* <Text style={{
                                    color: 'gray'
                                }}>{item.city}</Text> */}
                            </View>
                        )
                    }}
                    ListEmptyComponent={() =>
                        <View style={{
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Text>Nada para mostar</Text>
                        </View>
                    }
                    keyExtractor={(item, index) => index.toString()}
                />


            </View>

            

        )
    }
    
};


