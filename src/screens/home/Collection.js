import React,{Component} from 'react';
import {View,Text,Image,Dimensions,StyleSheet} from 'react-native';
import banner from '../../media/temp/banner.jpg';

const {width} = Dimensions.get("window");

export default class Collection extends Component{
  render(){
    const {textHeader,wraper} = styles;
    return (
      <View style={wraper}>
        <Text style={textHeader}>SPRING COLLECTION</Text>
        <Image source={banner} style={{width:width-20,height:150}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wraper:{
    margin:10,
    shadowColor: '#2E272B',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
  },
  textHeader :{
    fontSize:18,
    padding:10,
    backgroundColor:'#fff',
    fontFamily:'Avenir',
    color:"#999",
  },
});
