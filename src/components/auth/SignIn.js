import React,{Component} from 'react';
import {View,Text,TextInput,TouchableHighlight,StyleSheet} from 'react-native';

import singIn from '../../api/Login';
import saveToken from '../../api/SaveTocken';
import global from '../../globals';

export default class SignIn extends Component{
  constructor(props){
    super(props);
    this.state = {
      email : "bienson1992@gmail.com",
      password :'bienson1235',
    }
  }
  loginNow(){
    const {email,password} = this.state;
    singIn(email,password).then(res=>{
      saveToken(res.token);
      this.props.goBackToMain();
    }).catch(err=>console.log(err));

  }
  render(){
    const {wrapAcount,textInput,buttonSignInNow,textSignIn} = this.props.styles;
    const {emails,password} = this.state;
    return(
      <View style={wrapAcount}>
        <TextInput style={textInput}
          placeholder="Enter your email"
          underlineColorAndroid='transparent'
          value={this.state.email}
          onChangeText={(text)=>this.setState({email : text})}/>
        <TextInput style={textInput}
          placeholder="Enter your password"
          secureTextEntry
          underlineColorAndroid='transparent'
          value={this.state.password}
          onChangeText={(text)=>this.setState({password : text})}/>
        <TouchableHighlight style={buttonSignInNow} onPress={()=>{this.loginNow()}}>
          <Text style={textSignIn}>Sign In Now</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
