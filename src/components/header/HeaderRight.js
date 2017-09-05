import React,{Component} from 'react';
import {Image,View,TouchableHighlight} from 'react-native';

export default class HeaderRight extends Component{
  render(){
    return (
      <View>
       <TouchableHighlight onPress={()=>{this.props.openDrawer()}}>
         <Image
           style={{width:26,height:26,marginRight:10}}
           source={require("../../media/appIcon/ic_logo.png")}
         />
       </TouchableHighlight>
     </View>
    );
  }
}
