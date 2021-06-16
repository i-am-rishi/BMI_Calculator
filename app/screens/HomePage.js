import React,{useState} from 'react';
import { View,Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import  LottieView  from 'lottie-react-native';

import AppButton from '../components/AppButton';
import AppScreen from '../components/AppScreen';
import InputBox from '../components/InputBox';
import Result from '../components/Result';
// import Widget from '../components/Widget';
export default function HomePage(props) {
    const [height,setHeight]=useState(0);
    const [weight,setWeight]=useState(0);
    const [result,setResult]=useState(0);
    const [title,setTitle]=useState("Submit");
    const [advice,setAdvice]=useState("");
    const [color,setColor]=useState("black");

    const bmi=()=>{
        if(title==="Retry"){
            setTitle("Submit");
            setResult(0);
            setAdvice("");
            setColor("black");
        }
        else{
            const cal=weight/((height/100)*(height/100));
            setResult(parseInt(cal));
            if(cal<18.5){
                setAdvice("You are Underweight, Take nutritious diet");
                setColor("#ffbe0b");
            }
            if(cal<25&&cal>18.5){
                setAdvice("Your BMI is normal");
                setColor("green");
            }
            if(cal>25){
                setAdvice("You are Overweight, Exercise everyday");
                setColor("red");
            }
            setTitle("Retry");
        }

    }

return (
        <AppScreen style={styles.container}>
            <LottieView style={styles.lottieView} source={require('../animations/guestlist.json')} autoPlay loop/>
            <View style={styles.section_1}>
                <Image style={styles.logo} source={require('../assets/logo.png')}/>
                {!(result===0)?
                <Result text={result} advice={advice} color={color} />
                :
                <View style={styles.inputs}>
                    <InputBox placeholder="Your Height (in meter square)" keyboardType="numeric" secureTextEntry={false} onChange={(e)=>setHeight(e)}/>
                    <InputBox placeholder="Your Weight (in kg)" keyboardType="numeric" secureTextEntry={false} onChange={(e)=>setWeight(e)}/>
                </View>
                }
                <AppButton style={styles.button} onPress={bmi} title={title}/>
            </View>
            
                <TouchableOpacity onPress={()=>console.log("RJ Raunak")} style={styles.arrowIcon}><MaterialCommunityIcons name="arrow-right" size={20} color="white"/></TouchableOpacity>
        </AppScreen>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    parts:{
        flexDirection:"row"
    },
    logo:{
        width:"50%",
        height:150,
        marginHorizontal:"25%",
        marginVertical:"5%"
    },
    inputs:{
        flexDirection:"column",
    },
    button:{
        backgroundColor:"#25a244"
    },
    arrowIcon:{
        height:70,
        borderRadius:35,
        width:70,
        marginHorizontal:"40%",
        marginTop:175,
        backgroundColor:"grey",
        alignItems:"center",
        justifyContent:"center"
    },
    lottieView:{
        position:"absolute",
        height:400,
        width:"100%",
        marginTop:150,
    }
})