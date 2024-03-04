import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'

export default function SplashScreenComp({navigation}) {

    useEffect(()=>{
        const timeout= setTimeout(()=>{
            navigation.navigate('TabNavigator');
        },2000)
        return ()=>clearTimeout(timeout);
    },[navigation])
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to your portfolio</Text>
    </View>
  )
}


const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#f6f7f9'
    },
    text:{
        fontSize:24,
        fontWeight:'bold',
    }
})