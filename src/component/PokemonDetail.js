import React, { Component } from "react";
import {View, Text, Image} from 'react-native'
import { ScrollView, BaseButton, RectButton } from "react-native-gesture-handler";
import PokemonColorTypes from '../dummydata/PokemonColorTypes'

class PokemonDetail extends Component{
    constructor(props){
        super(props)
        this.state = {
            pokemonDetail:props.navigation.state.params.pokemonData
        }
    }

    static navigationOptions = ({navigation}) =>{
        const {pokemonData} = navigation.state.params
        return{
            title:pokemonData.name,
            headerTitleStyle:{
                color:'white'
            },
            headerRight:(
                <Text style={{marginRight:10, color:'white', fontSize:20}}>#{pokemonData.number}</Text>
            ),
            headerStyle:{
                backgroundColor:'#8BC34A',
                color:'white'
            },
            headerTintColor:'white'
        }
    }

    types = () =>{
        let types = ''
        this.state.pokemonDetail.types.map((type,i)=>{
            types += i == this.state.pokemonDetail.types.length-1 ? type : type+','
        })
        return(
            <Text style={{marginBottom:20}}>{types}</Text>
        )
    }

    resistants = () =>{
        const {pokemonDetail} = this.state
        let resistants = ''
        pokemonDetail.resistant.map((resistant,i)=>{
            resistants += i == pokemonDetail.resistant.length-1 ? resistant : resistant+','
        })
        return(
            <Text style={{marginBottom:20}}>{resistants}</Text>
        )
    }

    evolutions = () =>{
        const {pokemonDetail} = this.state
        let result = []
        let pokemonColorTypes = 'cyan'
        if(pokemonDetail.evolutions !== null){
            pokemonDetail.evolutions.map((evolution,i)=>{
                result.push(
                    <BaseButton key={i} style={{flexDirection:'row', backgroundColor:'#E0E8F3', borderRadius:15, marginBottom:20}}>
                        <Image style={{width:100, height:100, borderRadius:50, margin:15}} source={{uri:evolution.image}} />
                        <View style={{margin:15}}>
                            <Text>#{evolution.number} - {evolution.name}</Text>
                            <View style={{flexDirection:'row'}}>
                                {evolution.types.map((type,i)=>{
                                    for(let j = 0 ; j<PokemonColorTypes.length ; j++){
                                        if(type.toLowerCase() == PokemonColorTypes[j].types){
                                            pokemonColorTypes = PokemonColorTypes[j].color
                                        }
                                    }
                                    return(
                                        <Text key={i} style={{margin:5, paddingLeft:10, paddingRight:10, color:'white', backgroundColor:pokemonColorTypes, borderRadius:10}}>{type}</Text>
                                    )
                                })}
                            </View>
                        </View>
                    </BaseButton>
                )
            })
        }
        else{
            result.push(<View key="0"/>)
        }
        return (result)
    }

    render(){
        const {pokemonDetail} = this.state
        return(
            <ScrollView>
                <View style={{alignItems:'center', backgroundColor:'#F4F7FA'}}>
                    <Image style={{width:200, height:200, borderRadius:100, margin:15}} source={{uri:pokemonDetail.image}} />
                    <View style={{width:'95%', borderBottomWidth:1, borderColor:'#EAEFF7', marginTop:25}}>
                        <Text style={{fontWeight:'bold', color:'#7E94B3', marginBottom:10}}>Types</Text>
                        {this.types()}
                    </View>
                    <View style={{width:'95%', borderBottomWidth:1, borderColor:'#EAEFF7', marginTop:25}}>
                        <Text style={{fontWeight:'bold', color:'#7E94B3', marginBottom:10}}>Classification</Text>
                        <Text style={{marginBottom:20}}>{pokemonDetail.classification}</Text>
                    </View>
                    <View style={{width:'95%', borderBottomWidth:1, borderColor:'#EAEFF7', marginTop:25}}>
                        <Text style={{fontWeight:'bold', color:'#7E94B3', marginBottom:10}}>Resistant</Text>
                        {this.resistants()}
                    </View>
                    <View style={{width:'95%', borderBottomWidth:1, borderColor:'#EAEFF7', marginTop:25}}>
                        <Text style={{fontWeight:'bold', color:'#7E94B3', marginBottom:10}}>Evolution</Text>
                        {this.evolutions()}
                    </View>
                </View>
            </ScrollView>
        )
    }
}

export default PokemonDetail