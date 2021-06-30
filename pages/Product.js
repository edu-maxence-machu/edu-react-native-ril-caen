import React from 'react';
import {View, Text} from 'react-native';

export default function Product({product}){

    if(product === null) { return null }
    
    return (
        <View style={{flex: 1}}>
            <Text style={{fontSize: 24}}>{product.title}</Text>
        </View>
    )
}