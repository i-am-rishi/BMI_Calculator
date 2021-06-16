import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default function Result({text,style,advice,color}) {
return (
        <View style={[styles.container,style]}>
            <Text style={[styles.text,{color:color}]}>{text}</Text>
            <Text style={[styles.advice_text,{color: color}]}>{advice}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        alignItems:"center"
    },
    text:{
        fontSize:50,
        fontWeight:"bold",
        marginVertical:10
    },
    advice_text:{
        marginBottom:22
    }
})