import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

export default function ScanButtonView(){

    function handleScan (){
        
    }
    return (
        <View style={scanButtonStyle.buttonContainer}>
        <TouchableOpacity style={scanButtonStyle.button} onPress={handleScan}>
          <Text style={scanButtonStyle.buttonText}>Scanner</Text>
        </TouchableOpacity>
      </View>
    )
}


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