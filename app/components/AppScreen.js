import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import  Constants  from 'expo-constants';
export default function AppScreen({style,children}) {
return (
        <SafeAreaView style={[styles.container,style]}>
            {children}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop:Constants.statusBarHeight
    }
})