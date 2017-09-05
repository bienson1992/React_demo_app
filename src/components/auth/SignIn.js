import React,{Component} from 'react';
import {View,Text,TextInput,TouchableHighlight,StyleSheet} from 'react-native';

export default class SignIn extends Component{
  render(){
    const {wrapAcount,textInput,buttonSignInNow,textSignIn} = this.props.styles;
    return(
      <View style={wrapAcount}>
          <TextInput style={textInput}
            placeholder="Enter your email"
            underlineColorAndroid='transparent'/>
          <TextInput style={textInput}
            placeholder="Enter your password"
            secureTextEntry
            underlineColorAndroid='transparent'/>
          <TouchableHighlight style={buttonSignInNow} >
            <Text style={textSignIn}>Sign In Now</Text>
          </TouchableHighlight>
      </View>
    );
  }
}
