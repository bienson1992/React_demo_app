import React from 'react';
import {StyleSheet} from 'react-native';

module.exports = StyleSheet.create({
  wraper:{
    flex:1,
    backgroundColor:'#03BC9E',
  },
  textActive:{
    color :'#03BC9E',
  },
  textInaActive:{
    color :'#999',
  },
  btnAccount:{
    flexDirection:'row',
    justifyContent:'center',
    marginBottom:20,
  },
  buttonSignIn:{
    width:150,
    backgroundColor:'#fff',
    borderTopLeftRadius:25,
    borderBottomLeftRadius:25,
    borderWidth:1,
    borderColor:"#fff",
    paddingTop:10,
    paddingBottom:10,
    marginRight:2,
    alignItems:'center',
  },
  buttonSignOut:{
    width:150,
    backgroundColor:'#fff',
    borderTopRightRadius:25,
    borderBottomRightRadius:25,
    borderWidth:1,
    borderColor:"#fff",
    paddingTop:10,
    paddingBottom:10,
    marginLeft:2,
    alignItems:'center',
  },
  textInput:{
    backgroundColor:'#fff',
    borderRadius:25,
    marginTop:10,
  },
  wrapAcount:{
    margin:30,
    flex:1,
  },
  buttonSignInNow:{
    backgroundColor:'transparent',
    borderRadius:25,
    borderWidth:1,
    marginTop:10,
    padding:12,
    alignItems:'center',
    borderColor:"#fff",
  },
  textSignIn:{
    color :'#fff',
  },
  buttonSignInNow:{
    backgroundColor:'transparent',
    borderRadius:25,
    borderWidth:1,
    marginTop:10,
    padding:12,
    alignItems:'center',
    borderColor:"#fff",
  },
  textSignIn:{
    color :'#fff',
  },
});
