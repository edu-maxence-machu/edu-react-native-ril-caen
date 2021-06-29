import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function ProductItem(props){

    console.log(props);
    return (
        <View style={productStyle.container}>
            <Text style={productStyle.productTitle}>{props.item.title}</Text>
            <Text style={productStyle.productDate}>Scanné hier à 18h</Text>
        </View>
    )
}

const productStyle = StyleSheet.create({
    container : {
        backgroundColor: 'white',
        marginHorizontal: 30,
        paddingVertical: 30,
        borderBottomWidth: 1,
        borderBottomColor: 'black'
    },
    productTitle: {
      fontSize: 26,
      fontWeight: 'bold'
    },
    productDate: {
      fontSize: 20,
    }
  })
  