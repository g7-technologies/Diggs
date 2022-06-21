
import React, { Component } from 'react';
import { StyleSheet,Animated,ScrollView, Text, View,TouchableOpacity, Dimensions,Image,TextInput,Button } from 'react-native';
import { AntDesign,Ionicons,Entypo,MaterialCommunityIcons,Foundation,Feather,FontAwesome } from '@expo/vector-icons';
import { WebView } from 'react-native-webview';
import Toast from 'react-native-tiny-toast'
var ScreenWidth=Dimensions.get('window').width
export default class  App extends Component{

    constructor(props){
        super(props);
        this.state={
            IndexPosition:'',
            now:1,
            Email:''
        }
    }

   _onMomentumScrollEnd = ({ nativeEvent }) => {
            // the current offset, {x: number, y: number} 
          //  const position = nativeEvent.contentOffset; 
            // page index 
           // var index =nativeEvent.contentOffset.x /Dimensions.get('window').width
          
         
           
          
           
          
          //  this.setState({now:index})
          //  alert('i'+this.state.ImagePos)
         //alert(JSON.stringify( position))
            if (index !== this.state.currentIndex) {
              // onPageDidChanged
            }
          };
    
        ValidateEmail=(email)=> 
        {
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
              {
                return (true)
              }
              
                return (false)
        }
        
        form_validation = () => {
            if(this.state.Email === '' ){
                alert('Email Field is required')
            }else if(!this.ValidateEmail((this.state.Email).trim())){
                alert('Invalid Email')
            }else{ 
                this.SendEmailtoAdmin()
            }
        }

    SendEmailtoAdmin=()=>{
        const formData = new FormData()
  
    console.log('1')
     
    
      try{
        fetch(`http://www.g7technologies.com/wp/email_api.php?email=${this.state.Email}`, {
          method: 'GET',
          mode:'same-origin'
        }).then((response) => response.json())
        .then((responseJson) => {
          console.log('2222222')
            console.log(responseJson)
           // Toast.show('Email is send')
           // this.setState({Email:''})
           
              
          }).catch((error) =>{});
        }catch(e){}
        
    }
  render(){
    const image = { uri: "https://reactjs.org/logo-og.png" };
 
 
    return (
    <View style={styles.container}>
        {console.disableYellowBox=true}
      <ScrollView  scrollEventThrottle={16}  onScroll={({nativeEvent}) => {
      
    }} showsHorizontalScrollIndicator={false} style={StyleSheet.absoluteFill} onMomentumScrollEnd={({nativeEvent})=>{
        var position=nativeEvent.contentOffset.x;
        var width=Dimensions.get('window').width;
        var currentindex=position/width;
        this.setState({now:currentindex+1})
    }} scrollEventThrottle={16} ref={'scroll'} horizontal={true}    pagingEnabled={true}>
        <View style={{width:Dimensions.get('window').width}}>
        <View style={styles.container}>
                <View style={styles.HeaderView}>
                    <View style={{flexDirection:'row',paddingHorizontal:50,justifyContent:'center',alignItems:'center',marginBottom:10,}}>
                        <Image source={require('../assets/Logo.png')} style={{width:40,height:40}}/>
                        <Text style={{marginLeft:60,fontSize:15,fontWeight:'bold'}}>Home</Text>
                    </View>
                </View>
                <ScrollView showsVerticalScrollIndicator={false}  style={{flex: 1}}>
                    <View>
                        
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate("Description1")}>
                            <View style={{height:100,flexDirection:'row',justifyContent:'flex-start',alignItems:'center',elevation:4,backgroundColor:'#f7d6d4',shadowOpacity:0.2,borderRadius:10,marginTop:20,marginLeft:20,marginRight:20}}>
                                <Image source={require('../assets/design.png')} style={{width:'28%',height:100,borderBottomRightRadius:50,borderTopRightRadius:50,borderTopLeftRadius:10,borderBottomLeftRadius:10}}/>
                                <View>
                                    <Text style={{marginLeft:10,fontSize:15,fontWeight:'bold'}}>Mining for </Text>
                                    <Text style={{marginLeft:10,fontSize:15,fontWeight:'bold'}}>financial freedom</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate("Description2")}>
                            <View style={{height:100,flexDirection:'row',justifyContent:'flex-start',alignItems:'center',elevation:4,backgroundColor:'#fcebda',shadowOpacity:0.2,borderRadius:10,marginTop:10,marginLeft:20,marginRight:20}}>
                                <Image source={require('../assets/investor.jpg')} style={{width:'30%',height:100,borderBottomRightRadius:50,borderTopRightRadius:50,borderTopLeftRadius:10,borderBottomLeftRadius:10}}/>
                                <View>
                                    <Text style={{marginLeft:10,fontSize:15,fontWeight:'bold'}}>Bond with</Text>
                                    <Text style={{marginLeft:10,fontSize:15,fontWeight:'bold'}}>Investors</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <View style={{height:100,flexDirection:'row',justifyContent:'flex-start',alignItems:'center',elevation:4,backgroundColor:'#fff',shadowOpacity:0.2,borderRadius:10,marginTop:10,marginLeft:20,marginRight:20,marginBottom:20,padding:20}}>
                            <View style={{flex:1}}>
                                <Text style={{fontSize:15,fontWeight:'bold'}}>Add Email</Text>
                                <View style={{flex:1,flexDirection:'row',marginTop:5,alignItems:'center',justifyContent:'space-evenly'}}>
                                    <TextInput onChangeText={(email)=>this.setState({Email:email})} value={this.state.Email} placeholder="example@gmail.com"  style={{borderRadius:5,height: 30,width:'80%', borderColor: 'gray', borderWidth: 1,padding:4}}/>
                                    <Button onPress={()=>this.form_validation()} title="Add" style={{backgroundColor:'#30ba9a',width:'20%'}}/>
                                    {/* onChangeText={text => onChangeText(text)} value={value} */}
                                    {/* #bb3230 main logo color */}
                                </View>
                            </View>
                        </View>
                        
                    </View>
                    <View style={{height:300}}/>
                </ScrollView>
                
            </View>

        </View>
        <View style={{width:Dimensions.get('window').width}}>
        <View style={{flex:1}}>
                <View style={styles.HeaderView}>
                    <View style={{flexDirection:'row',paddingHorizontal:50,justifyContent:'center',alignItems:'center',marginBottom:10,}}>
                        <Image source={require('../assets/Logo.png')} style={{width:40,height:40}}/>
                        <Text style={{marginLeft:60,fontSize:15,fontWeight:'bold'}}>Earnings</Text>
                    </View>
                </View>
                <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1}}>
                    <View>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate("Description3")}>
                            <View style={{height:100,flexDirection:'row',justifyContent:'flex-start',alignItems:'center',elevation:4,backgroundColor:'#e9e2d2',shadowOpacity:0.2,borderRadius:10,marginTop:20,marginLeft:20,marginRight:20}}>
                                <Image source={require('../assets/investments.jpg')} style={{width:'30%',height:100,borderBottomRightRadius:50,borderTopRightRadius:50,borderTopLeftRadius:10,borderBottomLeftRadius:10}}/>
                                <View>
                                    <Text style={{marginLeft:10,fontSize:15,fontWeight:'bold'}}>Expand</Text>
                                    <Text style={{marginLeft:10,fontSize:15,fontWeight:'bold'}}>Investments</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate("Description4")}>
                            <View style={{height:100,flexDirection:'row',justifyContent:'flex-start',alignItems:'center',elevation:4,backgroundColor:'#cefacc',shadowOpacity:0.2,borderRadius:10,marginTop:10,marginLeft:20,marginRight:20}}>
                                <Image source={require('../assets/wealth.jpeg')} style={{width:'30%',height:100,borderBottomRightRadius:50,borderTopRightRadius:50,borderTopLeftRadius:10,borderBottomLeftRadius:10}}/>
                                <View>
                                    <Text style={{marginLeft:10,fontSize:15,fontWeight:'bold'}}>Grow</Text>
                                    <Text style={{marginLeft:10,fontSize:15,fontWeight:'bold'}}>Wealth</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <View style={{height:100,flexDirection:'row',justifyContent:'flex-start',alignItems:'center',elevation:4,backgroundColor:'#fff',shadowOpacity:0.2,borderRadius:10,marginTop:10,marginLeft:20,marginRight:20,marginBottom:20,padding:20}}>
                            <View style={{flex:1}}>
                                <Text style={{fontSize:15,fontWeight:'bold'}}>Add Email</Text>
                                <View style={{flex:1,flexDirection:'row',marginTop:5,alignItems:'center',justifyContent:'space-evenly'}}>
                                <TextInput onChangeText={(email)=>this.setState({Email:email})} value={this.state.Email} placeholder="example@gmail.com"  style={{borderRadius:5,height: 30,width:'80%', borderColor: 'gray', borderWidth: 1,padding:4}}/>
                                    <Button onPress={()=>this.form_validation()} title="Add" style={{backgroundColor:'#30ba9a',width:'20%'}}/>
                                    {/* onChangeText={text => onChangeText(text)} value={value} */}
                                    {/* #bb3230 main logo color */}
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{height:300}}/>
                </ScrollView>
            </View>
        </View>
        <View style={{width:Dimensions.get('window').width}}>
        <View style={{flex:1}}>
                <View style={styles.HeaderView}>
                    <View style={{flexDirection:'row',paddingHorizontal:50,justifyContent:'center',alignItems:'center',marginBottom:10,}}>
                        <Image source={require('../assets/Logo.png')} style={{width:40,height:40}}/>
                        <Text style={{marginLeft:60,fontSize:15,fontWeight:'bold'}}>Invest</Text>
                    </View>
                </View>
                <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1}}>
                    <View>
                        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-evenly'}}>
                            <TouchableOpacity onPress={()=>this.props.navigation.navigate('Description5')} style={{width:150}}>
                                <View style={{height:40,width:'95%',flexDirection:'row',justifyContent:'flex-start',alignItems:'flex-end',elevation:4,backgroundColor:'#5449bf',shadowOpacity:0.2,borderRadius:5,marginTop:20,marginLeft:5,alignItems:'center'}}>                              
                                    <Entypo name="bar-graph" size={24} color="#fff" style={{marginLeft:10}}/>
                                    <Text style={{marginLeft:10,fontSize:15,fontWeight:'bold',color:'#fff'}}>Stocks</Text> 
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>this.props.navigation.navigate('Description6')} style={{width:150}}>
                                <View style={{height:40,width:'95%',flexDirection:'row',justifyContent:'flex-start',alignItems:'flex-end',elevation:4,backgroundColor:'#f0326e',shadowOpacity:0.2,borderRadius:5,marginTop:20,marginRight:5,alignItems:'center'}}>
                                    <Foundation name="page" size={24} color="#fff"  style={{marginLeft:10}}/>
                                    <Text style={{marginLeft:10,fontSize:15,fontWeight:'bold',color:'#fff'}}>Bond</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-evenly'}}>
                            <TouchableOpacity onPress={()=>this.props.navigation.navigate('Description7')} style={{width:150}}>
                                <View style={{height:40,width:'96%',flexDirection:'row',justifyContent:'flex-start',alignItems:'flex-end',elevation:4,backgroundColor:'#88b14b',shadowOpacity:0.2,borderRadius:5,marginTop:10,marginLeft:5,alignItems:'center'}}>
                                    <Feather name="pie-chart" size={24} color="#fff"  style={{marginLeft:10}}/>
                                    <Text style={{marginLeft:10,fontSize:15,fontWeight:'bold',color:'#fff'}}>Mutual Funds</Text>
                                </View>
                            </TouchableOpacity>   
                            <TouchableOpacity onPress={()=>this.props.navigation.navigate('Description8')} style={{width:150}}>  
                                <View style={{height:40,width:'95%',flexDirection:'row',justifyContent:'flex-start',alignItems:'flex-end',elevation:4,backgroundColor:'#f7aa36',shadowOpacity:0.2,borderRadius:5,marginTop:10,marginRight:5,alignItems:'center'}}>
                                    <Feather name="home" size={24} color="#fff"  style={{marginLeft:10}}/>
                                    <Text style={{marginLeft:10,fontSize:15,fontWeight:'bold',color:'#fff'}}>Real Estate</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-evenly'}}>
                            <TouchableOpacity onPress={()=>this.props.navigation.navigate('Description9')} style={{width:300}}>
                                <View style={{height:40,width:'90%',flexDirection:'row',justifyContent:'flex-start',alignItems:'flex-end',elevation:4,backgroundColor:'#f1552c',shadowOpacity:0.2,borderRadius:5,marginTop:10,marginLeft:5,marginRight:5,alignItems:'center',justifyContent:'center'}}>
                                    <FontAwesome name="bitcoin" size={24} color="#fff" />
                                    <Text style={{marginLeft:10,fontSize:15,fontWeight:'bold',color:'#fff'}}>Cryptocurrency</Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Description10')}>
                        <View style={{height:100,flexDirection:'row',justifyContent:'flex-start',alignItems:'center',elevation:4,backgroundColor:'#f7d6d5',shadowOpacity:0.2,borderRadius:10,marginTop:10,marginLeft:20,marginRight:20}}>
                            <Image source={require('../assets/card.png')} style={{width:'40%',height:100,borderTopLeftRadius:10,borderBottomLeftRadius:10}}/>
                            <View>
                                <Text style={{marginLeft:10,fontSize:15,fontWeight:'bold'}}>Connect</Text>
                                <Text style={{marginLeft:10,fontSize:15,fontWeight:'bold'}}>Debit Card</Text>
                            </View>
                        </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Description11')}>
                        <View style={{height:100,flexDirection:'row',justifyContent:'flex-start',alignItems:'center',elevation:4,backgroundColor:'#f9e4cd',shadowOpacity:0.2,borderRadius:10,marginTop:10,marginLeft:20,marginRight:20}}>
                            <Image source={require('../assets/refresh.png')} style={{width:'40%',height:100,borderBottomRightRadius:50,borderTopRightRadius:50,borderTopLeftRadius:10,borderBottomLeftRadius:10}}/>
                            <View>
                                <Text style={{marginLeft:10,fontSize:15,fontWeight:'bold'}}>Re-Occuring</Text>
                                <Text style={{marginLeft:10,fontSize:15,fontWeight:'bold'}}>Investments</Text>
                            </View>
                        </View>
                        </TouchableOpacity>
                        <View style={{height:100,flexDirection:'row',justifyContent:'flex-start',alignItems:'center',elevation:4,backgroundColor:'#fff',shadowOpacity:0.2,borderRadius:10,marginTop:10,marginLeft:20,marginRight:20,marginBottom:20,padding:20}}>
                            <View style={{flex:1}}>
                                <Text style={{fontSize:15,fontWeight:'bold'}}>Add Email</Text>
                                <View style={{flex:1,flexDirection:'row',marginTop:5,alignItems:'center',justifyContent:'space-evenly'}}>
                                <TextInput onChangeText={(email)=>this.setState({Email:email})} value={this.state.Email} placeholder="example@gmail.com"  style={{borderRadius:5,height: 30,width:'80%', borderColor: 'gray', borderWidth: 1,padding:4}}/>
                                    <Button onPress={()=>this.form_validation()} title="Add" style={{backgroundColor:'#30ba9a',width:'20%'}}/>
                                    {/* onChangeText={text => onChangeText(text)} value={value} */}
                                    {/* #bb3230 main logo color */}
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{height:300}}/>
                </ScrollView>
            </View>
        </View>
        <View style={{width:Dimensions.get('window').width,justifyContent:'center',alignItems:'center'}}>
        <View style={{flex:1}}>
                <View style={styles.HeaderView}>
                    <View style={{width:ScreenWidth,flexDirection:'row',paddingHorizontal:50,justifyContent:'center',alignItems:'center',marginBottom:10,}}>
                        <Image source={require('../assets/Logo.png')} style={{width:40,height:40}}/>
                        <Text style={{marginLeft:60,fontSize:15,fontWeight:'bold'}}>Forecast</Text>
                    </View>
                </View>
                <ScrollView style={{flex: 1}}>
                    <View>
                        <View style={{height:100,flexDirection:'row',justifyContent:'flex-start',alignItems:'center',elevation:4,backgroundColor:'#fff',shadowOpacity:0.2,borderRadius:10,marginTop:20,marginLeft:20,marginRight:20,padding:20}}>
                            <View style={{flex:1}}>
                                <Text style={{fontSize:15,fontWeight:'bold'}}>Add Email</Text>
                                <View style={{flex:1,flexDirection:'row',marginTop:5,alignItems:'center',justifyContent:'space-evenly'}}>
                                <TextInput onChangeText={(email)=>this.setState({Email:email})} value={this.state.Email} placeholder="example@gmail.com"  style={{borderRadius:5,height: 30,width:'80%', borderColor: 'gray', borderWidth: 1,padding:4}}/>
                                    <Button onPress={()=>this.form_validation()} title="Add" style={{backgroundColor:'#30ba9a',width:'20%'}}/>
                                    {/* onChangeText={text => onChangeText(text)} value={value} */}
                                    {/* #bb3230 main logo color */}
                                </View>
                            </View>
                        </View>
                        <View>
                            <Text style={{fontSize:15,marginLeft:20,marginVertical:10}}>Upcoming / Energizing Companies</Text>
                        </View>
                        <WebView  style={{width:Dimensions.get('window').width,height:300}} source={{ uri: 'https://diggs.g7technologies.com/wp/graph.html' }}  />
                          

                        </View>
                    
                </ScrollView>
            </View> 
        </View>
        <View style={{width:Dimensions.get('window').width,}}>
        <View style={{flex:1}}>
                <View style={styles.HeaderView}>
                    <View style={{flexDirection:'row',paddingHorizontal:50,justifyContent:'center',alignItems:'center',marginBottom:10,}}>
                        <Image source={require('../assets/Logo.png')} style={{width:40,height:40}}/>
                        <Text style={{marginLeft:40,fontSize:15,fontWeight:'bold'}}>Affiliates / Learning</Text>
                    </View>
                </View>
                <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1}}>
                    <View>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Description12')}>
                            <View style={{height:100,flexDirection:'row',justifyContent:'flex-start',alignItems:'center',elevation:4,backgroundColor:'#dcdcdc',shadowOpacity:0.2,borderRadius:10,marginTop:20,marginLeft:20,marginRight:20}}>
                                <Image source={require('../assets/tips.jpg')} style={{width:'28%',height:100,borderBottomRightRadius:50,borderTopRightRadius:50,borderTopLeftRadius:10,borderBottomLeftRadius:10}}/>
                                <View>
                                    <Text style={{marginLeft:10,fontSize:15,fontWeight:'bold'}}>Professionals /</Text>
                                    <Text style={{marginLeft:10,fontSize:15,fontWeight:'bold'}}>Coaching Tips</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Description13')}>
                            <View style={{height:100,flexDirection:'row',justifyContent:'flex-start',alignItems:'center',elevation:4,backgroundColor:'#dcdcdc',shadowOpacity:0.2,borderRadius:10,marginTop:10,marginLeft:20,marginRight:20}}>
                                <Image source={require('../assets/book.png')} style={{width:'30%',height:100,borderBottomRightRadius:50,borderTopRightRadius:50,borderTopLeftRadius:10,borderBottomLeftRadius:10}}/>
                                <View>
                                    <Text style={{marginLeft:10,fontSize:15,fontWeight:'bold'}}>Knowledge</Text>
                                    <Text style={{marginLeft:10,fontSize:15,fontWeight:'bold'}}>Base</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Description14')}>
                            <View style={{height:100,flexDirection:'row',justifyContent:'flex-start',alignItems:'center',elevation:4,backgroundColor:'#dcdcdc',shadowOpacity:0.2,borderRadius:10,marginTop:10,marginLeft:20,marginRight:20}}>
                                <Image source={require('../assets/become.png')} style={{width:'30%',height:100,borderBottomRightRadius:50,borderTopRightRadius:50,borderTopLeftRadius:10,borderBottomLeftRadius:10}}/>
                                <View>
                                    <Text style={{marginLeft:10,fontSize:15,fontWeight:'bold'}}>Become an</Text>
                                    <Text style={{marginLeft:10,fontSize:15,fontWeight:'bold'}}>Affiliate</Text>
                                    <Text style={{marginLeft:10,fontSize:15,fontWeight:'bold'}}>(Businesses)</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <View style={{height:100,flexDirection:'row',justifyContent:'flex-start',alignItems:'center',elevation:4,backgroundColor:'#fff',shadowOpacity:0.2,borderRadius:10,marginTop:10,marginLeft:20,marginRight:20,marginBottom:20,padding:20}}>
                            <View style={{flex:1}}>
                                <Text style={{fontSize:15,fontWeight:'bold'}}>Add Email</Text>
                                <View style={{flex:1,flexDirection:'row',marginTop:5,alignItems:'center',justifyContent:'space-evenly'}}>
                                <TextInput onChangeText={(email)=>this.setState({Email:email})} value={this.state.Email} placeholder="example@gmail.com"  style={{borderRadius:5,height: 30,width:'80%', borderColor: 'gray', borderWidth: 1,padding:4}}/>
                                    <Button onPress={()=>this.form_validation()} title="Add" style={{backgroundColor:'#30ba9a',width:'20%'}}/>
                                    {/* onChangeText={text => onChangeText(text)} value={value} */}
                                    {/* #bb3230 main logo color */}
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{height:300}}/>
                </ScrollView>
            </View>
        </View>
      </ScrollView >
      <View style={{flexDirection:'row',justifyContent:'space-between',shadowOffset:{width:1,height:1},shadowOpacity:0.3,bottom:50,position:'absolute',padding:10,alignItems:'center',elevation:4,backgroundColor:'#fff',marginLeft:10,width:Dimensions.get('window').width-20,borderRadius:10}}>
      
        {this.state.now===1?
            <TouchableOpacity style={{justifyContent:'center',alignItems:'center'}} onPress={() => {this.setState({now:1}) ,this.refs.scroll.scrollTo({ x: 0 }) }}>
                <MaterialCommunityIcons name="home" color={'red'} size={21} />
                <Text style={{color:'red'}}>Home</Text>
            </TouchableOpacity >:
             <TouchableOpacity style={{justifyContent:'center',alignItems:'center'}} onPress={() => {this.setState({now:1}),this.refs.scroll.scrollTo({ x: 0 }) }}>
             <MaterialCommunityIcons name="home" color={'gray'} size={21} />
             <Text style={{color:'gray'}}>Home</Text>
           </TouchableOpacity >
        }
       
       {this.state.now===2?
            <TouchableOpacity style={{justifyContent:'center',alignItems:'center'}} onPress={() => {this.setState({now:2}), this.refs.scroll.scrollTo({ x: ScreenWidth }) }}>
                <AntDesign name="piechart" color={'red'} size={21} />
                <Text style={{color:'red'}}>Earnings</Text>
            </TouchableOpacity >:
            <TouchableOpacity style={{justifyContent:'center',alignItems:'center'}} onPress={() => {this.setState({now:2}), this.refs.scroll.scrollTo({ x: ScreenWidth }) }}>
                <AntDesign name="piechart" color={'gray'} size={21} />
                <Text style={{color:'gray'}}>Earnings</Text>
            </TouchableOpacity >
       }
       {this.state.now===3?
            <TouchableOpacity style={{justifyContent:'center',alignItems:'center'}} onPress={() => {this.setState({now:3}), this.refs.scroll.scrollTo({ x: ScreenWidth*2 }) }}>
                <Ionicons name="md-hammer" color={'red'} size={21} />  
                <Text style={{color:'red'}}>Invest</Text>
            </TouchableOpacity>:
            <TouchableOpacity style={{justifyContent:'center',alignItems:'center'}} onPress={() => {this.setState({now:3}), this.refs.scroll.scrollTo({ x: ScreenWidth*2 }) }}>
                <Ionicons name="md-hammer" color={'gray'} size={21} />  
                <Text style={{color:'gray'}}>Invest</Text>
            </TouchableOpacity>
        }
         {this.state.now===4?
            <TouchableOpacity style={{justifyContent:'center',alignItems:'center'}} onPress={() => {this.setState({now:4}), this.refs.scroll.scrollTo({ x: ScreenWidth*3 }) }}>
                <FontAwesome name="balance-scale" color={'red'} size={21} />
                <Text style={{color:'red'}}>Forcast</Text>
            </TouchableOpacity>:
            <TouchableOpacity style={{justifyContent:'center',alignItems:'center'}} onPress={() => { this.setState({now:4}),this.refs.scroll.scrollTo({ x: ScreenWidth*3 }) }}>
                <FontAwesome name="balance-scale" color={'gray'} size={21} />
                <Text style={{color:'gray'}}>Forcast</Text>
            </TouchableOpacity>
        }
        {this.state.now===5?
        <TouchableOpacity style={{justifyContent:'center',alignItems:'center'}} onPress={() => {this.setState({now:5}), this.refs.scroll.scrollTo({ x: ScreenWidth*4 }) }}>
            <FontAwesome name="handshake-o" color={'red'} size={21} />
            <Text style={{color:'red'}}>Accessibility</Text>
        </TouchableOpacity>:
        <TouchableOpacity style={{justifyContent:'center',alignItems:'center'}} onPress={() => {this.setState({now:5}), this.refs.scroll.scrollTo({ x: ScreenWidth*4 }) }}>
            <FontAwesome name="handshake-o" color={'gray'} size={21} />
            <Text style={{color:'gray'}}>Accessibility</Text>
        </TouchableOpacity>
        }
   

      </View>
      
    </View>
  )}
}

const styles = StyleSheet.create({
  container: {
    flex: 1
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
      shadowOffset:{width:1,height:1}
  },
});
