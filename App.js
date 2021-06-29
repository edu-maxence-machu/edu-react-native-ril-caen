import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Image, Button, ScrollView } from 'react-native';
import Header from './components/Header';
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
    alert('Hello')
  }

  return (
    <View style={styles.container}>

      <Header/>

      <View style={scanButtonStyle.buttonContainer}>
        <TouchableOpacity style={scanButtonStyle.button} onPress={handleScan}>
          <Text style={scanButtonStyle.buttonText}>Scanner</Text>
        </TouchableOpacity>
      </View>

      <ScrollView>
        {
          PRODUCTS.map((el) => {
            return (
              <View style={productStyle.container}>
                <Text style={productStyle.productTitle}>{el.title}</Text>
                <Text style={productStyle.productDate}>Scanné hier à 18h</Text>
              </View>
            )
          })
        }
      </ScrollView>

      <StatusBar style="auto" />
    </View>
  );
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
const scanButtonStyle = StyleSheet.create({
  buttonContainer: {
    paddingHorizontal: 40,
    paddingVertical: 20,
    borderBottomColor: 'grey',
    borderBottomWidth: 1
  },
  button: {
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'lightgrey'
  },
  buttonText : {
    fontSize: 28,
    textTransform: 'uppercase'
  }
});


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
