import React, { Component } from 'react';
import { StyleSheet,Text, View ,ScrollView,Image,TextInput, Alert} from 'react-native';
import { Button } from 'react-native-paper';

export default class Description10 extends Component{
    render(){
        return (
            <View style={{flex:1}}>
                <View style={styles.HeaderView}>
                    <View style={{flexDirection:'row',paddingHorizontal:50,justifyContent:'center',alignItems:'center',marginBottom:10,}}>
                        <Image source={require('../assets/Logo.png')} style={{width:40,height:40}}/>
                        <Text style={{marginLeft:40,fontSize:15,fontWeight:'bold'}}>Connect Debit Card</Text>
                    </View>
                </View>
                <ScrollView style={{flex: 1}}>
                    <View>
                        <View style={{height:100,flexDirection:'row',justifyContent:'flex-start',alignItems:'center',elevation:4,backgroundColor:'#f7d6d5',shadowOpacity:0.2,borderRadius:10,marginTop:20,marginLeft:20,marginRight:20}}>
                            <Image source={require('../assets/card.png')} style={{width:'40%',height:100,borderTopLeftRadius:10,borderBottomLeftRadius:10}}/>
                            <View>
                                <Text style={{marginLeft:10,fontSize:15,fontWeight:'bold'}}>Connect Debit Card</Text>
                            </View>
                        </View>
                        <View style={{justifyContent:'flex-start',alignItems:'center',elevation:4,backgroundColor:'#f7d6d5',shadowOpacity:0.2,borderRadius:10,marginTop:10,marginLeft:20,marginRight:20,marginBottom:20,padding:20}}>
                            <TextInput placeholder="Email" style={{borderRadius:5,height: 30,width:'100%', borderColor: 'gray', borderWidth: 1,padding:4}}/>
                            <TextInput placeholder="Card Number" style={{borderRadius:5,height: 30,width:'100%', borderColor: 'gray', borderWidth: 1,padding:4,marginTop:10}}/>
                            <View style={{flex:1,flexDirection:'row'}}>
                                <TextInput placeholder="Card Number" style={{borderRadius:5,height: 30,width:'48%', borderColor: 'gray', borderWidth: 1,padding:4,marginTop:10,marginRight:5}}/>
                                <TextInput placeholder="Card Number" style={{borderRadius:5,height: 30,width:'48%', borderColor: 'gray', borderWidth: 1,padding:4,marginTop:10,marginLeft:5}}/>
                            </View>
                            <TextInput placeholder="Zip Code" style={{borderRadius:5,height: 30,width:'100%', borderColor: 'gray', borderWidth: 1,padding:4,marginTop:10}}/>
                            <Button style={{backgroundColor:'#30ba9a',marginTop:10}}><Text style={{color:'#fff'}}>Connect</Text></Button>
                                    {/* onChangeText={text => onChangeText(text)} value={value} */}
                                    {/* #bb3230 main logo color */}
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
  