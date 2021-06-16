import React from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';

export default function InputBox({style,placeholder,onChange,keyboardType,secureTextEntry=false}) {
return (
        <View style={styles.container}>
            <TextInput 
                style={[styles.input,style]}
                secureTextEntry={secureTextEntry}
                onChangeText={onChange}
                keyboardType={keyboardType}
                placeholder={placeholder}
            ></TextInput>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
    },
    input:{
        backgroundColor:"#dee2e6",
        width:"60%",
        marginHorizontal:"20%",
        marginVertical:5,
        height:50,
        borderRadius:25,
        textAlign:"center",
    }
})