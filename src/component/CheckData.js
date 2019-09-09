import React, { Component } from "react";
import {View, Text} from 'react-native'
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import IsLoading from './IsLoading'
import PokemonList from './PokemonList'

class CheckData extends Component{
    static navigationOptions = ({navigation}) =>{
        return{
            headerStyle:{
                backgroundColor:'#E51C23'
            },
            title:'Pokemon List',
            headerTitleStyle:{
                color:'white'
            },
        }
    }
    render(){
        const {pokemons} = this.props.data
        return(
            <View>
                {pokemons!==undefined?<PokemonList navigation={this.props.navigation} pokemons={pokemons} />:<IsLoading />}
            </View>
        )
    }
}

const queries = gql`
{
    pokemons(first:45) {
        id,
        name,
        image,
        number,
        types,
        classification,
        resistant,
        evolutions {
            id,
            name,
            image,
            number,
            types,
            classification,
            resistant,
        }
        }
    }
`

export default graphql(queries)(CheckData)