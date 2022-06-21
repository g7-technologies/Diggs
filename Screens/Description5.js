import React, { Component } from 'react';
import { StyleSheet,Text, View ,ScrollView,Image,TextInput, Alert} from 'react-native';
import { Entypo } from '@expo/vector-icons';

export default class Description5 extends Component{
    render(){
        return (
            <View style={{flex:1}}>
                <View style={styles.HeaderView}>
                    <View style={{flexDirection:'row',paddingHorizontal:50,justifyContent:'center',alignItems:'center',marginBottom:10,}}>
                        <Image source={require('../assets/Logo.png')} style={{width:40,height:40}}/>
                        <Text style={{marginLeft:60,fontSize:15,fontWeight:'bold'}}>Stocks</Text>
                    </View>
                </View>
                <ScrollView style={{flex: 1}}>
                    <View>
                        <View style={{height:100,flexDirection:'row',justifyContent:'center',alignItems:'center',elevation:4,backgroundColor:'#5449bf',shadowOpacity:0.2,borderRadius:10,marginTop:20,marginLeft:20,marginRight:20,}}>
                            <Entypo name="bar-graph" size={24} color="#fff" />
                            <Text style={{marginLeft:10,fontSize:15,fontWeight:'bold',color:'#fff'}}>Stocks</Text>
                        </View>
                        <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center',elevation:4,backgroundColor:'#5449bf',shadowOpacity:0.2,borderRadius:10,marginTop:10,marginLeft:20,marginRight:20}}>
                                <Text style={{margin:10,fontSize:12,color:'#fff',textAlign:'justify'}}>Stock of a corporation, is all of the shares into which ownership of the corporation is divided. In American English, the shares are collectively known as "stock". A single share of the stock represents fractional ownership of the corporation in proportion to the total number of shares</Text>
                        </View>
                        <View style={{height:100,flexDirection:'row',justifyContent:'flex-start',alignItems:'center',elevation:4,backgroundColor:'#5449bf',shadowOpacity:0.2,borderRadius:10,marginTop:10,marginLeft:20,marginRight:20,marginBottom:20}}>
                            <Image source={require('../assets/stock-prices.jpg')} style={{height:"100%",borderRadius:10,width:'100%'}}/>
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
  