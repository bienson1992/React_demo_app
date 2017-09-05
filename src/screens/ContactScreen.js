import React,{Component} from 'react';
import {View,Text,StyleSheet} from 'react-native';

export default class ContactScreen extends Component{
  render(){
    const {wraper} = styles;
    return (
        <View style={wraper}></View>
    );
  }
}

const styles = StyleSheet.create({
  wraper:{
    backgroundColor:'#eee',
    flex:1,
  },
});
