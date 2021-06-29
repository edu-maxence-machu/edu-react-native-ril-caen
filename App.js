import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Image, Button, ScrollView } from 'react-native';
import Header from './components/Header';
import ScanButtonView from './components/ScanButtonView';
import ProductsHistory from './components/ProductsHistory';

export default function App() {

  const PRODUCTS = [
    { title: 'Bouteille d\'eau' },
    { title: 'Canette Fanta' },
    { title: 'Canette Pepsi' },
    { title: 'Canette de Perrier' },
    { title: 'Kinder Bueno' },
    { title: 'Belvita' },
    { title: 'Pizza Sodebo' },
  ]

  function onPressLearnMore (){
    alert('toto');
  }

  function handleScan (){
    alert('Hello from App.js')
  }

  return (
    <View style={styles.container}>

      <Header title="Accueil"/>
      <ScanButtonView onScanPress={handleScan}/>
      <ProductsHistory products={PRODUCTS} />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
