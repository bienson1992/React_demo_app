import React,{Component} from 'react';
import {View,Text,StyleSheet,Image,Dimensions,TouchableHighlight} from 'react-native';

import iconProfile from '../media/temp/profile.png';

const { width } = Dimensions.get('window');

export default class Menu extends Component{

  render(){
    const {wrapper,acountProfile,acountImage,acountName,
      wrapMenu,menuItem,textMenu,profileSignIn,textSignIn} = styles;
    const navigation = this.props.navigation;
    return (
        <View style={wrapper}>
          <View style={acountProfile}>
            <Image source={iconProfile}
             style={acountImage}/>
             <Text style={acountName}>Bien Son</Text>
          </View>
          <TouchableHighlight style={profileSignIn} onPress={()=>{navigation.navigate('Auth')}}>
              <Text style={textSignIn}>Sing In</Text>
          </TouchableHighlight>
          <View style={wrapMenu}>
            <View style={menuItem}>
                <Text style={textMenu}>Order History</Text>
            </View>
            <View style={menuItem}>
                <Text style={textMenu}>Change Info</Text>
            </View>
            <View style={menuItem}>
                <Text style={textMenu}>Sign Out</Text>
            </View>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper : {
    flex:1,
    backgroundColor:'#03BC9E',
  },
  acountProfile:{
    marginTop:10,
    alignItems: 'center'
  },
  acountImage:{
    width:width/4,
    height:width/4
  },
  acountName:{
    display:'none',
    color:"#fff",
    fontSize:18,
    fontFamily:"avenir",
  },
  wrapMenu:{
    display:'none',
    padding:20,
    flex:1,
    justifyContent: 'center',
  },
  profileSignIn:{
    padding:10,
    backgroundColor:'#fff',
    marginTop:10,
    borderRadius:10,
    margin:20,
    alignItems: 'center',
  },
  textSignIn:{
    color: '#03BC9E',
  },
  menuItem:{
    padding:10,
    backgroundColor:'#fff',
    marginTop:10,
    borderRadius:10,
  },
  textMenu:{
    color :"#03BC9E",
  }
});
