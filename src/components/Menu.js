import React,{Component} from 'react';
import {View,Text,StyleSheet,Image,Dimensions,TouchableHighlight} from 'react-native';

import iconProfile from '../media/temp/profile.png';
import globals from '../globals';
import saveToken from '../api/SaveTocken';
import getToken from '../api/GetTocken';
import checkLogin from '../api/CheckLogin';

const { width } = Dimensions.get('window');

export default class Menu extends Component{
  constructor(props){
    super(props);
    this.state = {
      user : null,
    }
  }
  onSignIn(user){
    this.setState({ user });
  }

  goToSignOut(){
    saveToken('');
    this.setState({ user: null });
  }

  componentDidMount(){
    getToken()
      .then(token => {
        checkLogin(token).then(res=>{
          this.onSignIn(res.user);
        }).catch(err=>console.log(err))
      })
      .catch(err => console.log('LOI CHECK LOGIN', err));
  }

  componentWillReceiveProps(){
    console.log("Component +componentWillReceiveProps");
    getToken()
      .then(token => {
        checkLogin(token).then(res=>{
          this.onSignIn(res.user);
        }).catch(err=>console.log(err))
      })
      .catch(err => console.log('LOI CHECK LOGIN', err));
  }
  // shouldComponentUpdate(){
  //   console.log("Component +shouldComponentUpdate");
  // }
  componentWillUpdate(){
    console.log("Component +componentWillUpdate");
  }
  componentDidUpdate(){
    console.log("Component +componentDidUpdate");
  }
  render(){
    console.log("Component +render");
    const {wrapper,acountProfile,acountImage,acountName,
      wrapMenu,menuItem,textMenu,profileSignIn,textSignIn} = styles;
    const navigation = this.props.navigation;

    const loginJsx = (
      <View style={wrapMenu}>
        <View style={menuItem}>
            <Text style={textMenu}>Order History</Text>
        </View>
        <View style={menuItem}>
            <Text style={textMenu}>Change Info</Text>
        </View>
        <TouchableHighlight style={menuItem} onPress={()=>this.goToSignOut()}>
            <Text style={textMenu}>Sign Out</Text>
        </TouchableHighlight>
      </View>
    );
    const {user} = this.state;
    const UserInfo = (user != null) ? loginJsx : <View></View>;
    return (
        <View style={wrapper}>
          <View style={acountProfile}>
            <Image source={iconProfile}
             style={acountImage}/>
             <Text style={acountName}>{user ? user.name : ''}</Text>
          </View>
          {!user ?
          <TouchableHighlight style={profileSignIn} onPress={()=>{navigation.navigate('Auth')}}>
              <Text style={textSignIn}>Sing In</Text>
          </TouchableHighlight>
          :<View></View>}
          {UserInfo}
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
    color:"#fff",
    fontSize:18,
    fontFamily:"avenir",
  },
  wrapMenu:{
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
