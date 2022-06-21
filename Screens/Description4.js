import React, { Component } from 'react';
import { StyleSheet,Text, View ,ScrollView,Image,TextInput, Alert} from 'react-native';

export default class Description4 extends Component{
    render(){
        return (
            <View style={{flex:1}}>
                <View style={styles.HeaderView}>
                    <View style={{flexDirection:'row',paddingHorizontal:50,justifyContent:'center',alignItems:'center',marginBottom:10,}}>
                        <Image source={require('../assets/Logo.png')} style={{width:40,height:40}}/>
                        <Text style={{marginLeft:60,fontSize:15,fontWeight:'bold'}}>Grow Wealth</Text>
                    </View>
                </View>
                <ScrollView style={{flex: 1}}>
                    <View>
                        <View style={{height:100,flexDirection:'row',justifyContent:'flex-start',alignItems:'center',elevation:4,backgroundColor:'#cefacc',shadowOpacity:0.2,borderRadius:10,marginTop:20,marginLeft:20,marginRight:20}}>
                            <Image source={require('../assets/wealth.jpeg')} style={{width:'30%',height:100,borderBottomRightRadius:50,borderTopRightRadius:50,borderTopLeftRadius:10,borderBottomLeftRadius:10}}/>
                            <View>
                                <Text style={{marginLeft:10,fontSize:15,fontWeight:'bold'}}>Grow Wealth</Text>
                            </View>
                        </View>
                        <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center',elevation:4,backgroundColor:'#cefacc',shadowOpacity:0.2,borderRadius:10,marginTop:10,marginLeft:20,marginRight:20}}>
                                <Text style={{margin:10,fontSize:12}}>Keep track of emerging companies that are positioned to go public. We want to also provide help and coach and mentor upcoming companies by answering questions in regards to the next step to take in your personal business or investment needs. We often look for guidance and venture capitalist to take a chance on individuals and their dreams.</Text>
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
  