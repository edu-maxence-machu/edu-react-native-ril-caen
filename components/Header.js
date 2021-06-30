import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Header} from 'react-native-elements'

export default function CustomHeader({title}){

    return (
      <Header
      containerStyle={{
        backgroundColor: '#3D6DCC',
        justifyContent: 'space-around',
      }}
        centerComponent={{ text: title, style: { color: '#fff' } }}
      />
    )
}


const headerStyle = StyleSheet.create({
    headerContainer: {
      paddingTop: 50,
      paddingBottom: 20,
      justifyContent: 'center',
      alignItems: 'center',
      borderBottomWidth: 1
    },
    headerText : {
      fontSize: 24,
      textTransform: 'uppercase'
    }
  });