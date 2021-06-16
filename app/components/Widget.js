import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function Widget({text="Hello",onPress}) {
return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container:{
        height:70,
        width:70,
        borderRadius:10,
        marginHorizontal:10,
        marginVertical:15,
        backgroundColor:"#0466c8",
        justifyContent:"center",
        alignItems:"center"
    },
    text:{
        color:"white"
    }
})