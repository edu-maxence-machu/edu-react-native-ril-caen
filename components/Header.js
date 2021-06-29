import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

export default function Header(){
    return (
        <View style={headerStyle.headerContainer}>
            <Text style={headerStyle.headerText}>Yoki</Text>
        </View>
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