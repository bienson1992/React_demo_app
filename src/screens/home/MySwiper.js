import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,Image,
  Text,Dimensions,
  View
} from 'react-native';

import Swiper from 'react-native-swiper';

const {width} = Dimensions.get("window");

var styles = StyleSheet.create({
  wrapper: {
  },
  slide1: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
})

export default class MySwiper extends Component{
  render(){
    return (
      <View style={{height:200}}>
        <Swiper style={styles.wrapper} showsButtons={true} removeClippedSubviews={false}>
          <View style={styles.slide1}>
            <Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
             style={{width: width, height: 200,justifyContent: 'center',
             alignItems: 'center',}} >
             <Text style={styles.text}>Some One</Text>
            </Image>
          </View>
          <View style={styles.slide2}>
            <Text style={styles.text}>Beautiful</Text>
          </View>
          <View style={styles.slide3}>
            <Text style={styles.text}>And simple</Text>
          </View>
        </Swiper>
      </View>
    );
  }
}
