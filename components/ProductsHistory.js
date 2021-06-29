import React from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import ProductItem from './ProductItem';

export default function ProductsHistory(){

  const PRODUCTS = [
    { title: 'Bouteille d\'eau' },
    { title: 'Canette Fanta' },
    { title: 'Canette Pepsi' },
    { title: 'Canette de Perrier' },
    { title: 'Kinder Bueno' },
    { title: 'Belvita' },
    { title: 'Pizza Sodebo' },
  ]

    return (
        <ScrollView>
        {
          PRODUCTS.map((el) => {
            return <ProductItem item={el}/>
          })
        }
      </ScrollView>
    )
}
