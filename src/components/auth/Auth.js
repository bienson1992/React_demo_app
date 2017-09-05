import React,{Component} from 'react';
import {Text,View,StyleSheet,TextInput,TouchableHighlight} from 'react-native';

import SignIn from './SignIn';
import SignUp from './SignUp';
import styles from './Style';

export default class Auth extends Component{
  constructor(props){
    super(props);
    this.state={
      isSignIn : true,
    }
  }
  signIn(){
    this.setState({
      isSignIn : true,
    });
  }
  signUp(){
    this.setState({
      isSignIn : false,
    });
  }
  render(){
    const {
      wraper,buttonSignIn,buttonSignOut,textActive,
      textInaActive,textSignIn,
      btnAccount} = styles;
    const {isSignIn} = this.state;
    const Authen = isSignIn ? <SignIn styles={styles} /> : <SignUp/>;
    return (
      <View style={wraper}>
        {Authen}
        <View style={btnAccount}>
            <TouchableHighlight style={buttonSignIn} onPress={this.signIn.bind(this)}>
              <Text style={isSignIn ? textActive : textInaActive}>Sign In</Text>
            </TouchableHighlight>
            <TouchableHighlight style={buttonSignOut} onPress={this.signUp.bind(this)}>
              <Text style={isSignIn ? textInaActive : textActive}>Sign Up</Text>
            </TouchableHighlight>
        </View>
     </View>
    );
  }
}
