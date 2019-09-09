import React, {Component} from 'react'
import {View, Image} from 'react-native'

class IsLoading extends Component{
    render(){
        return(
            <View style={{alignItems:'center', justifyContent:'center', height:'100%'}}>
                <Image style={{width:150, height:150, borderRadius:75}} source={require('../../assets/images/pokeball.png')}/>
            </View>
        )
    }
}

export default IsLoading