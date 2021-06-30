import React from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import ProductItem from './ProductItem';

export default function ProductsHistory(props){


    return (
        <ScrollView>
        {
          props.products.map((el) => {
            return <ProductItem onItemClick={props.onItemClick} item={el}/>
          })
        }
      </ScrollView>
    )
}
