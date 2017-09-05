import React,{Component} from 'react';
import {View,Text,TextInput,TouchableHighlight,StyleSheet} from 'react-native';

import styles from './Style';

export default class SignUp extends Component{
  render(){
    const {wrapAcount,textInput,buttonSignInNow,textSignIn} = styles;
    return(
      <View style={wrapAcount}>
          <TextInput style={textInput}
            placeholder="Enter your name"
            underlineColorAndroid='transparent'/>
          <TextInput style={textInput}
            placeholder="Enter your email"
            underlineColorAndroid='transparent'/>
          <TextInput style={textInput}
            placeholder="Enter your password"
            secureTextEntry
            underlineColorAndroid='transparent'/>
          <TextInput style={textInput}
            placeholder="Re-enter your password"
            secureTextEntry
            underlineColorAndroid='transparent'/>
          <TouchableHighlight style={buttonSignInNow} >
            <Text style={textSignIn}>Sign Up Now</Text>
          </TouchableHighlight>
      </View>
    );
  }
}
