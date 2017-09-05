import React,{Component} from 'react';
import {View,Text,StyleSheet} from 'react-native';

export default class SearchScreen extends Component{
  render(){
    const {wraper} = styles;
    return (
        <View style={wraper}></View>
    );
  }
}

const styles = StyleSheet.create({
  wraper:{
    backgroundColor:'#bbb',
    flex:1,
  },
});
