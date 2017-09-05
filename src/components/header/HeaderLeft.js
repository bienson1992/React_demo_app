import React,{Component} from 'react';
import {Image,View,TouchableHighlight} from 'react-native';

export default class HeaderLeft extends Component{
  render(){
    const navigation = this.props;
    return (
      <View>
       <TouchableHighlight onPress={()=>{navigation.openDrawer()}}>
         <Image
           style={{width:26,height:26,marginLeft:10}}
           source={require("../../media/appIcon/ic_menu.png")}
         />
       </TouchableHighlight>
     </View>
    );
  }
}
