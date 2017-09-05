import React,{Component} from 'react';
import {Image,View,Text,StyleSheet,Dimensions} from 'react-native';
import {
  StackNavigator,DrawerNavigator
} from 'react-navigation';

import TabMain from './TabMain';
import MenuDrawer from './components/Menu';
import HeaderLeft from './components/header/HeaderLeft';
import HeaderRight from './components/header/HeaderRight';
import Authencation from './components/auth/Auth';
import Detail from './screens/home/Detail';

const { width } = Dimensions.get('window');

const Main = StackNavigator({
  MainScreen : {
    screen: TabMain,
    navigationOptions: ({navigation})=>({
      title:'Wearing a dress',
      headerTintColor:'#FFF',
      headerStyle: {backgroundColor:'#03BC9E'},
      headerLeft: <HeaderLeft openDrawer={()=>{navigation.navigate('DrawerOpen')}} />,
      headerRight: <HeaderRight openDrawer={()=>{navigation.navigate('DrawerOpen')}} />,
    }),
  },
  Auth : {
    screen: Authencation,
    navigationOptions :{
      title: 'Wearing a dress',
      headerTintColor: '#FFF',
      headerStyle: {backgroundColor:'#03BC9E'},
      headerRight: <HeaderRight openDrawer={()=>{navigation.navigate('DrawerOpen')}} />,
    }
  },
  Detail: {
    screen: Detail,
  }
});

const MainDrawer = DrawerNavigator({
  Home: {
    screen: Main,
  },
},{
  drawerWidth: width * 0.8,
  drawerPosition: 'left',
  contentComponent: props => <MenuDrawer {...props}/>
});

const mystyle = StyleSheet.create({
  icon:{
    width :26,
    height:26,
  },
});

export default MainDrawer;
