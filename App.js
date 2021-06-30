import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Image, Button, ScrollView } from 'react-native';
import Header from './components/Header';
import ScanButtonView from './components/ScanButtonView';
import ProductsHistory from './components/ProductsHistory';
import TestState from './pages/TestState';
import Home from './pages/Home';
import LoremPicsum from './pages/LoremPicsum';
import Login from './pages/Login';
import Product from './pages/Product';
import Camera from './pages/Camera';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function App() {

  const [products, setProducts] = useState([]);

  const [currentProduct, setCurrentProduct] = useState(null);
  const [page, navigate] = useState('Home');


  useEffect( () => {
    async function fetchStorage(){
      let localproducts = await AsyncStorage.getItem('@localproducts') ;
      
      if(localproducts !== null){
        localproducts = JSON.parse(localproducts);
        setProducts(localproducts);
      }
    }
    
    fetchStorage();
  }, []); 
  
  function handleScanPress (){
    navigate('Camera');
    /*const product = {title: 'La démo !'};
    setProducts(oldArray => [...oldArray, product]);*/
  }

  async function afterCameraScan({type, data}){
      await getProductInfoFromApi(data);
      await AsyncStorage.setItem('@localproducts', JSON.stringify(products));
  }

  function login(){
    navigate('Home')
  }


  async function getProductInfoFromApi (barCode) {
    try {
      //this.setState({loading : true});

      let response = await fetch(
        'https://fr.openfoodfacts.org/api/v0/produit/' + barCode + '.json'
      );
      let responseJson = await response.json();
      responseJson = responseJson.product;

      setProducts((prevState) => [...prevState, responseJson]);
      setCurrentProduct(responseJson);
      console.log(responseJson)
      navigate('Product');

    } catch (error) {
      console.error(error);
    }
  }

  function handleItemClick(item){
    setCurrentProduct(item);
    navigate('Product')
  }

  return (
    <View style={styles.container}>
      <Header title="Accueil"/>

      { page === 'Home' && <Home onItemClick={handleItemClick} products={products} handleScan={handleScanPress}/>}
      { page === 'Test' && <TestState/> } 
      { page === 'LoremPicsum' && <LoremPicsum/> } 
      { page === 'Login' && <Login login={login}/> } 
      { page === 'Product' && <Product product={currentProduct}/> } 
      { page === 'Camera' && <Camera handleCameraScan={afterCameraScan} /> } 


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
