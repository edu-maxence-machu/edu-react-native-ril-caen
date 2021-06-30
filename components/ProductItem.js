import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Card} from "react-native-elements";
export default function ProductItem(props){

    return (
        <TouchableOpacity onPress={() => props.onItemClick(props.item)} style={productStyle.container}>
            
            <Card>
              <Card.Title>Scanné hier à 18h</Card.Title>
              <Card.Divider/>
              
              <Text style={productStyle.productTitle}>{props.item.generic_name}</Text>
            </Card>
            
        </TouchableOpacity>
    )
}

const productStyle = StyleSheet.create({
    container : {
        backgroundColor: 'white',
    },
    productTitle: {
      fontSize: 26,
      fontWeight: 'bold'
    },
    productDate: {
      fontSize: 20,
    }
  })
  