import React, { useState } from 'react';
import {View, Text, StyleSheet, Button, TextInput, Image} from 'react-native';

export default function LoremPiscum(){

    const [text, onChangeText] = React.useState("");
    const [imgUrl, setImgUrl] = useState('');

    const loadImg = () => {
        //const newImg = 'https://loremflickr.com/320/240/' + text;
        const newImg = `https://loremflickr.com/320/240/${text}`;
        setImgUrl(newImg);
    }

    return (
        <View style={{flex: 1}}>

            {text === "" && <Text>Merci de remplir le champ requis</Text>}
            
            <TextInput
                style={[styles.input, 
                    text === "" ? {color: 'red'} : {color: 'blue'}]}
                onChangeText={onChangeText}
                value={text}
                placeholder="useless placeholder"
            />

            <Image
                source={{
                    uri: imgUrl
                }}
                style={{width: 320, height: 240}}
            />

            <Button   
            onPress={loadImg}
            disabled={text === ""}
            title="Charger l'image"
            />


        </View>
    )
}


const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
    },
  });