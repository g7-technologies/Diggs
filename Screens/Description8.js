import React, { Component } from 'react';
import { StyleSheet,Text, View ,ScrollView,Image,TextInput, Alert} from 'react-native';
import { Feather } from '@expo/vector-icons';

export default class Description8 extends Component{
    render(){
        return (
            <View style={{flex:1}}>
                <View style={styles.HeaderView}>
                    <View style={{flexDirection:'row',paddingHorizontal:50,justifyContent:'center',alignItems:'center',marginBottom:10,}}>
                        <Image source={require('../assets/Logo.png')} style={{width:40,height:40}}/>
                        <Text style={{marginLeft:60,fontSize:15,fontWeight:'bold'}}>Real Estate</Text>
                    </View>
                </View>
                <ScrollView style={{flex: 1}}>
                    <View>
                        <View style={{height:100,flexDirection:'row',justifyContent:'center',alignItems:'center',elevation:4,backgroundColor:'#f7aa36',shadowOpacity:0.2,borderRadius:10,marginTop:20,marginLeft:20,marginRight:20,}}>
                            <Feather name="home" size={24} color="#fff" />
                            <Text style={{marginLeft:10,fontSize:15,fontWeight:'bold',color:'#fff'}}>Real Estate</Text>
                        </View>
                        <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center',elevation:4,backgroundColor:'#f7aa36',shadowOpacity:0.2,borderRadius:10,marginTop:10,marginLeft:20,marginRight:20}}>
                                <Text style={{margin:10,fontSize:12,color:'#fff',textAlign:'justify'}}>Real estate investing involves the purchase, ownership, management, rental and/or sale of real estate for profit. Improvement of realty property as part of a real estate investment strategy is generally considered to be a sub-specialty of real estate investing called real estate development.</Text>
                        </View>
                        <View style={{height:100,flexDirection:'row',justifyContent:'flex-start',alignItems:'center',elevation:4,backgroundColor:'#f7aa36',shadowOpacity:0.2,borderRadius:10,marginTop:10,marginLeft:20,marginRight:20,marginBottom:20}}>
                            <Image source={require('../assets/realestate.jpg')} style={{height:"100%",borderRadius:10,width:'100%'}}/>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems:'flex-end',
      justifyContent: 'flex-end',
    },
    HeaderView: {
        height:100,
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'flex-end',
        elevation:4,
        backgroundColor:'#fff',
        shadowOpacity:0.2,
        borderBottomLeftRadius:15,
        borderBottomRightRadius:15,
        shadowOffset:{width:1,height:1}}
  });
  