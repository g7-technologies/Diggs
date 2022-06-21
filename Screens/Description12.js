import React, { Component } from 'react';
import { StyleSheet,Text,FlatList, View ,ScrollView,Image,TextInput, Alert} from 'react-native';

export default class Description12 extends Component{
    constructor(props){
        super(props);
        this.state={
            data:''
        }
    }
      componentDidMount = () => {
            fetch(`http://diggs.g7technologies.com/wp/mobile_posts.php`, {
              method: 'GET'
            })
            .then((response) => response.json())
            .then((responseJson) => {
             
              this.setState({data:responseJson.posts})
              console.log(this.state.data)
            })
            .catch((error) => {
              console.error(error);
            });
          }
    render(){
        return (
            <View style={{flex:1}}>
                <View style={styles.HeaderView}>
                    <View style={{flexDirection:'row',paddingHorizontal:50,justifyContent:'center',alignItems:'center',marginBottom:10,}}>
                        <Image source={require('../assets/Logo.png')} style={{width:40,height:40}}/>
                        <Text style={{marginLeft:40,fontSize:15,fontWeight:'bold'}}>Professionals</Text>
                    </View>
                </View>
                <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1}}>
                    <View>
                        <View style={{height:100,flexDirection:'row',justifyContent:'flex-start',alignItems:'center',elevation:4,backgroundColor:'#dcdcdc',shadowOpacity:0.2,borderRadius:10,marginTop:20,marginLeft:20,marginRight:20}}>
                            <Image source={require('../assets/tips.jpg')} style={{width:'28%',height:100,borderBottomRightRadius:50,borderTopRightRadius:50,borderTopLeftRadius:10,borderBottomLeftRadius:10}}/>
                            <View>
                                <Text style={{marginLeft:10,fontSize:15,fontWeight:'bold'}}>Professionals /</Text>
                                <Text style={{marginLeft:10,fontSize:15,fontWeight:'bold'}}>Coaching Tips</Text>
                            </View>
                        </View>
                        <View style={{marginTop:10}}/>


                    <FlatList
                      data={this.state.data}
                      
                     showsVerticalScrollIndicator={false}
                      keyExtractor={item => item.id.toString()}
                      renderItem={({ item }) => (
                        <View style={{borderRadius:1,paddingVertical:3,backgroundColor:'#fff',shadowOpacity:0.1,shadowOffset:{width:0.2,height:0.2},margin:5}}>
                            <Text style={{fontWeight:'bold',padding:5,margin:5}}>{item.title}</Text>
                            <Text style={{fontSize:12,color:'gray',marginLeft:10}}>{item.date.substring(0,10)}</Text>
                            <Text style={{margin:10,fontSize:12}}>{item.description}</Text>
                        </View>
                      )}
                    />
                        
                        
                        
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
  