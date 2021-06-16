import React from 'react';
import { Text,StyleSheet, TouchableOpacity } from 'react-native';

export default function AppButton({style,title,onPress}) {
return (
        <TouchableOpacity onPress={onPress} style={[styles.container,style]}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container:{
        height:50,
        borderRadius:50,
        marginTop:5,
        width:"50%",
        marginHorizontal:"25%",
        backgroundColor:"#6c757d",
        justifyContent:"center",
        alignItems:"center"
    },
    title:{
        color:"white"
    }
})