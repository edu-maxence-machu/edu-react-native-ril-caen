import React, { useState } from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

export default function TestState(){

    const [myNumber, setMyNumber] = useState(3);
    //let myNumber = 3;

    const editNumber = () => {
        const newNumber = 3 + 10;
        setMyNumber(newNumber);
    }

    return (
        <View style={{flex: 1}}>
            <Text style={{fontSize: 30}}>{myNumber}</Text>


            <TouchableOpacity onPress={editNumber}>
                <Text style={{fontSize: 50}}>Modifier</Text>
            </TouchableOpacity>
        </View>
    )
}