import React, { Component } from 'react';
import { StyleSheet,Text, View ,ScrollView,Image,TextInput, Alert} from 'react-native';

export default class Description14 extends Component{
    render(){
        return (
            <View style={{flex:1}}>
                <View style={styles.HeaderView}>
                    <View style={{flexDirection:'row',paddingHorizontal:50,justifyContent:'center',alignItems:'center',marginBottom:10,}}>
                        <Image source={require('../assets/Logo.png')} style={{width:40,height:40}}/>
                        <Text style={{marginLeft:40,fontSize:15,fontWeight:'bold'}}>Affiliation</Text>
                    </View>
                </View>
                <ScrollView style={{flex: 1}}>
                    <View>
                        <View style={{height:100,flexDirection:'row',justifyContent:'flex-start',alignItems:'center',elevation:4,backgroundColor:'#dcdcdc',shadowOpacity:0.2,borderRadius:10,marginTop:20,marginLeft:20,marginRight:20}}>
                            <Image source={require('../assets/become.png')} style={{width:'30%',height:100,borderBottomRightRadius:50,borderTopRightRadius:50,borderTopLeftRadius:10,borderBottomLeftRadius:10}}/>
                            <View>
                                <Text style={{marginLeft:10,fontSize:15,fontWeight:'bold'}}>Become an</Text>
                                <Text style={{marginLeft:10,fontSize:15,fontWeight:'bold'}}>Affiliate</Text>
                                <Text style={{marginLeft:10,fontSize:15,fontWeight:'bold'}}>(Businesses)</Text>
                            </View>
                        </View>
                        <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center',elevation:4,backgroundColor:'#dcdcdc',shadowOpacity:0.2,borderRadius:10,marginTop:10,marginLeft:20,marginRight:20}}>
                                <Text style={{margin:10,fontSize:12}}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

    The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</Text>
                        </View>
                        <View style={{height:100,flexDirection:'row',justifyContent:'flex-start',alignItems:'center',elevation:4,backgroundColor:'#dcdcdc',shadowOpacity:0.2,borderRadius:10,marginTop:10,marginLeft:20,marginRight:20,marginBottom:20}}>
                            <Image source={require('../assets/d4.jpg')} style={{height:"100%",borderRadius:10,width:'100%'}}/>
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
  