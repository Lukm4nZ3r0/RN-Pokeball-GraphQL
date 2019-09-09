import React, {Component} from 'react'
import {View,Text,FlatList, Dimensions, Image} from 'react-native'
import {BaseButton} from 'react-native-gesture-handler'
import PokemonColorTypes from '../dummydata/PokemonColorTypes'

const {width, height} = Dimensions.get('window')

class PokemonList extends Component{
    constructor(props){
        super(props)
        this.state = {
            pokemons:this.props.pokemons,
            widthScreen:width,
            heightScreen:height
        }
    }
    componentDidMount(){
        console.log(this.props.pokemons)
        Dimensions.addEventListener('change', this.resizeScreen)
    }
    componentWillUnmount(){
        Dimensions.removeEventListener('change', this.resizeScreen)
    }
    resizeScreen = (e) =>{
        const {width, height} = e.window
        this.setState({widthScreen:width, heightScreen:height})
    }
    renderItem = ({item}) =>{
        const {widthScreen} = this.state
        let pokemonColorTypes = 'cyan'
        return(
            <View key={item.id} style={{width:widthScreen/3, height:widthScreen/3, alignItems:'center', justifyContent:'center'}}>
                <BaseButton style={{width:'95%', height:'95%', elevation:8, backgroundColor:'white', borderRadius:10, alignItems:'center', justifyContent:'center'}} onPress={()=>this.props.navigation.navigate('PokemonDetail', {pokemonData:item})}>
                    <View style={{width:'90%'}}>
                        <Text style={{color:'grey'}}>#{item.number}</Text>
                    </View>
                    <Image style={{width:widthScreen/7, height:widthScreen/7, resizeMode:'contain'}} source={{uri:item.image}} />
                    <Text>{item.name}</Text>
                    <View style={{flexDirection:'row'}}>
                        {item.types.map((type,index)=>{
                            for(let i = 0 ; i<PokemonColorTypes.length ; i++){
                                if(type.toLowerCase() == PokemonColorTypes[i].types){
                                    pokemonColorTypes = PokemonColorTypes[i].color
                                }
                            }
                            return(
                                <Text key={index} style={{fontSize:10, backgroundColor:pokemonColorTypes, borderRadius:15, paddingLeft:8, paddingRight:8, margin:5, color:'white'}}>{type}</Text>
                            )
                        })}
                    </View>
                </BaseButton>
            </View>
        )
    }
    render(){
        const {widthScreen} = this.state
        return(
            <View>
                <FlatList
                    style={{width:widthScreen}}
                    data={this.state.pokemons}
                    renderItem={this.renderItem}
                    numColumns={3}
                    keyExtractor={(item) => item.id}
                />
            </View>
        )
    }
}

export default PokemonList