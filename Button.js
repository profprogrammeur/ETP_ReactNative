import React from 'react'
// import { TouchableOpacity } from 'react-native'
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';

export default function FlatButton({text,onPress,bgColor,width,color}) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={[styles.button,{backgroundColor : bgColor, width : width}]}   >
                <Text style={[styles.buttonText,{color:color}]} >{text}</Text>
            </View>
        </TouchableOpacity>
    )
}

// const bgcolor="blue"

const styles = StyleSheet.create({
   
    button: {
        borderRadius: 18,
        paddingVertical: 5,
        paddingHorizontal: 10,
        marginTop: 10,
        minWidth: "50%",
        
    }     
    ,
    buttonText: {
        // color: 'white',
        fontWeight: 'bold',
        // textTransform: 'uppercase',
        fontSize: 40,
        textAlign: 'center'
    }
})