import React,{Component} from 'react';
import {
  View,Text,StyleSheet,TouchableHighlight,Image,Dimensions,ScrollView,TouchableOpacity
} from 'react-native';
import Swiper from 'react-native-swiper';

import Collection from './Collection';
import Products from './Products';
import MySwiper from './MySwiper';

const URL = "http://192.168.51.2/app/";

export default class HomeScreen extends Component{
  constructor(props){
    super(props);
    this.state = {
      topProduct : [],
    }
  }
  componentDidMount(){
    fetch(URL)
    .then(response => response.json())
    .then(resJSON=>{
      const { product } = resJSON;
      this.setState({
        topProduct : product,
      });
    })
    .catch(error=>{
      console.log(error);
    });
  }
  render(){
    const {topProduct} = this.state;
    const {navigation} = this.props;
    return(
      <ScrollView>
        <Collection/>
        <Products topProduct={topProduct} navigation={navigation} />
      </ScrollView>
    );
  }
}
