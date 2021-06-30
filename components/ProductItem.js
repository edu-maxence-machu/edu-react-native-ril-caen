import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function ProductItem(props){

    return (
        <TouchableOpacity onPress={() => props.onItemClick(props.item)} style={productStyle.container}>
            <Text style={productStyle.productTitle}>{props.item.generic_name}</Text>
            <Text style={productStyle.productDate}>Scanné hier à 18h</Text>
        </TouchableOpacity>
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
  