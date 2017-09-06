import React,{Component} from 'react';
import {View,Text,TextInput,TouchableHighlight,StyleSheet} from 'react-native';

import styles from './Style';
import register from '../../api/Register';

export default class SignUp extends Component{
  constructor(props){
    super(props);
    this.state = {
      name : '',
      email : '',
      password :'',
    }
  }
  register(){
     const { email, name, password } = this.state;
     console.log(email+name+password);
     register(email,name, password)
     .then(res=>{
       alert(res);
      //  if(res === 'THANH_CONG') return this.onSuccess();
      //  this.onFail();
     });
  }

  onSuccess(){
    alert('Dang ki thanh cong');
  }

  onFail(){
    alert('Dang ki khong thanh cong');
  }

  render(){
    const {wrapAcount,textInput,buttonSignInNow,textSignIn} = styles;
    return(
      <View style={wrapAcount}>
          <TextInput style={textInput}
            placeholder="Enter your name"
            underlineColorAndroid='transparent'
            onChangeText={(text)=>this.setState({name : text})}
            value={this.state.name}/>
          <TextInput style={textInput}
            placeholder="Enter your email"
            underlineColorAndroid='transparent'
            onChangeText={(text)=>this.setState({email : text})}
            value={this.state.email}/>
          <TextInput style={textInput}
            placeholder="Enter your password"
            secureTextEntry
            underlineColorAndroid='transparent'
            onChangeText={(text)=>this.setState({password : text})}
            value={this.state.password}/>
          <TextInput style={textInput}
            placeholder="Re-enter your password"
            secureTextEntry
            underlineColorAndroid='transparent'
            />
          <TouchableHighlight style={buttonSignInNow} onPress={()=>{this.register()}} >
            <Text style={textSignIn}>Sign Up Now</Text>
          </TouchableHighlight>
      </View>
    );
  }
}
