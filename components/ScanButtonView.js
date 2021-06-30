import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
 
export default function ScanButtonView(props){

    return (
        <View style={scanButtonStyle.buttonContainer}>

          <Button
            icon={
              <Ionicons
                name="scan-circle-outline"
                size={40}
                color="white"
              />
            }
            title="Scanner"
            onPress={props.onScanPress}
          />
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