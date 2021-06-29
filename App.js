import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Image, Button, ScrollView } from 'react-native';
import Header from './components/Header';
import ScanButtonView from './components/ScanButtonView';
import ProductsHistory from './components/ProductsHistory';
export default function App() {


  function onPressLearnMore (){
    alert('toto');
  }

  function handleScan (){
    alert('Hello')
  }

  return (
    <View style={styles.container}>

      <Header/>
      <ScanButtonView/>
      <ProductsHistory/>
    

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
