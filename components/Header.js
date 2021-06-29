import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

export default function Header({title}){

    return (
        <View style={headerStyle.headerContainer}>
            <Text style={headerStyle.headerText}>{title}</Text>
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