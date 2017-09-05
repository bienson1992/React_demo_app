import React,{Component} from 'react';
import {View,Text,Image,Dimensions,StyleSheet,TouchableOpacity} from 'react-native';

const {width} = Dimensions.get("window");
const produtWidth = (width - 60) / 2;
const productImageHeight = (produtWidth / 361) * 452;
const url = 'http://192.168.51.2/app/images/product/';

export default class Products extends Component{
  render(){
    const {topProduct,navigation} = this.props;
    const {
        container, titleContainer, title,
        body, productContainer, productImage,
        produceName, producePrice
        } = styles;
    return (
      <View style={container}>
          <View style={titleContainer}>
            <Text style={title}>TOP PRODUCT</Text>
          </View>
          <View style={body}>
            {topProduct.map(product => (
            <TouchableOpacity style={productContainer} onPress={()=>{navigation.navigate('Detail',{'products': product})}} key={product.id}>
               <Image source={{ uri: `${url}${product.images[0]}` }} style={productImage} />
               <Text style={produceName}>{product.name.toUpperCase()}</Text>
               <Text style={producePrice}>{product.price}</Text>
             </TouchableOpacity>
            ))}
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
       backgroundColor: '#fff',
       margin: 10,
       shadowColor: '#2E272B',
       shadowOffset: { width: 0, height: 3 },
       shadowOpacity: 0.2
   },
   titleContainer: {
       height: 50,
       justifyContent: 'center',
       paddingLeft: 10
   },
   title: {
        color: '#999',
        fontSize: 20
    },
    body: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        paddingBottom: 10
    },
    productContainer: {
        width: produtWidth,
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2
    },
    productImage: {
        width: produtWidth,
        height: productImageHeight
    },
    produceName: {
        marginVertical: 5,
        paddingLeft: 10,
        fontFamily: 'Avenir',
        color: '#999',
        fontWeight: '500'
    },
    producePrice: {
        marginBottom: 5,
        paddingLeft: 10,
        fontFamily: 'Avenir',
        color: '#662F90'
    }
});
