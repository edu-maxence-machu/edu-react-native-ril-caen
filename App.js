import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Image, Button, ScrollView } from 'react-native';
import Header from './components/Header';
import ScanButtonView from './components/ScanButtonView';
import ProductsHistory from './components/ProductsHistory';
import TestState from './pages/TestState';
import Home from './pages/Home';
import LoremPicsum from './pages/LoremPicsum';
import Login from './pages/Login';
import Product from './pages/Product';

export default function App() {

  const [products, setProducts] = useState([
    { title: 'Bouteille d\'eau' },
    { title: 'Canette Fanta' },
    { title: 'Canette Pepsi' },
    { title: 'Canette de Perrier' },
    { title: 'Kinder Bueno' },
    { title: 'Belvita' },
    { title: 'Pizza Sodebo' },
  ]);

  const [currentProduct, setCurrentProduct] = useState(null);

  const [page, navigate] = useState('Home');


  function onPressLearnMore (){
    alert('toto');
  }

  function handleScan (){
    const product = {title: 'La démo !'};
    setProducts(oldArray => [...oldArray, product]);
  }

  function login(){
    navigate('Home')
  }

  function handleItemClick(item){
    setCurrentProduct(item);

    navigate('Product')
  }

  return (
    <View style={styles.container}>
      <Header title="Accueil"/>

      { page === 'Home' && <Home onItemClick={handleItemClick} products={products} handleScan={handleScan}/>}
      { page === 'Test' && <TestState/> } 
      { page === 'LoremPicsum' && <LoremPicsum/> } 
      { page === 'Login' && <Login login={login}/> } 
      { page === 'Product' && <Product product={currentProduct}/> } 


      <View style={styles.topMenu}>
          <Button 
            title="Home" 
            color={page === "Home" ? "green" : 'grey'}
            onPress={() => navigate('Home')}
          />
          
          <Button 
            title="Test" 
            color={page === "Test" ? "green" : 'grey'}
            onPress={() => navigate('Test')}
          />
          
          <Button 
            title="Picsum" 
            color={page === "LoremPicsum" ? "green" : 'grey'}
            onPress={() => navigate('LoremPicsum')}
          />
          
          <Button 
            title="Login" 
            color={page === "Login" ? "green" : 'grey'}
            onPress={() => navigate('Login')}
          />
        </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  topMenu: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingBottom: 20
  },
});
