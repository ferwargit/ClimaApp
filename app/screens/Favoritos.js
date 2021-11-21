import React from "react";
import { View, Text, TextInput } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { FlatList } from "react-native-gesture-handler";


export default class Favoritos extends React.Component {

    state = {
        ciudades: []
    }

    async componentDidMount(){
        
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
    }

    

    onChangeText(text){
        console.log("textChanged", text);
    }

    render(){
        return (
            <View style={{
                flex: 1
            }}>
                {/* HEADER */}
                <View style={{
                    borderBottomWidth: 1,
                    borderColor: '#ddd',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: 100
                }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 'bold'
                    }}>Data Ciudades</Text>
                </View>
    
                {/* SEARCH BAR */}
                <View style={{
                    
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
                        fontSize: 16
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
                    data={this.state.ciudades}
                    renderItem={({ item }) => (
                        <View
                        style={{
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
                                marginBottom: 5
                            }}>{item.name}</Text>
                            <Text>{item.country}</Text>
                            <Text style={{
                                color: 'gray'
                            }}>{item.city}</Text>
                        </View>
                    )}
                    ListEmptyComponent={() =>
                        <View style={{
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Text>Nada para mostar</Text>
                        </View>
                    }
                />


            </View>

            // LISTA DE CIUDADES

        )
    }
    
};


