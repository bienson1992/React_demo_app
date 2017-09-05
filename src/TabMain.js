import React,{Component} from 'react';
import {Image,StyleSheet} from 'react-native';
import {
  TabNavigator,StackNavigator
} from 'react-navigation';

import HomeScreen from './screens/home/HomeScreen';
import CartScreen from './screens/CartScreen';
import SearchScreen from './screens/SearchScreen';
import ContactScreen from './screens/ContactScreen';

import home from './media/appIcon/home0.png';
import cart from './media/appIcon/cart0.png';
import search from './media/appIcon/search0.png';
import contact from './media/appIcon/contact0.png';

const TabMain = TabNavigator({
  Home : {
    screen : HomeScreen,
    navigationOptions :{
    tabBarLabel : 'Home',
    tabBarIcon : ({ tintColor }) => (
        <Image
           source={home}
           style={[styles.icon, {tintColor: tintColor}]}
         />
       ),
    },
  },
  Cart: {
    screen: CartScreen,
    navigationOptions :{
    tabBarLabel: 'Cart',
    upperCaseLabel :false,
    tabBarIcon: ({tintColor}) => (
        <Image
           source={cart}
           style={[styles.icon, {tintColor: tintColor}]}
         />
       ),
    }
   },
  Search: {
    screen: SearchScreen,
    navigationOptions :{
    tabBarLabel: 'Search',
    tabBarIcon: ({ tintColor }) => (
        <Image
           source={search}
           style={[styles.icon, {tintColor: tintColor}]}
         />
       ),
    }

  },
  Contact: {
    screen: ContactScreen,
    navigationOptions :{
    tabBarLabel: 'Contact',
    tabBarIcon: ({ tintColor }) => (
        <Image
           source={contact}
           style={[styles.icon, {tintColor: tintColor}]}
         />
       ),
    }
  },
},{
  tabBarPosition:'bottom',
  swipeEnabled: true,
  lazyLoad: true,
  tabBarOptions: {
    activeTintColor: '#ff0',
    upperCaseLabel : false,
    showIcon: true,
    labelStyle: {
      fontSize: 10,
    },
    indicatorStyle: {
      backgroundColor: 'red'
    },
    style: {
      backgroundColor: '#03BC9E',
      height:60,
    },
  }
});

const styles = StyleSheet.create({
  icon: {
   width: 26,
   height: 26,
 },
});

export default TabMain;
