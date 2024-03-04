import { View, Text, Pressable, StyleSheet, StatusBar } from 'react-native'
import React from 'react'

export default function PressableButton() {
  return (
    <View style={styles.main}>
    <StatusBar 
     backgroundColor={'maroon'}
     barStyle={'light-content'}
    />
      <Pressable 
    //    onPress={()=>console.warn('normal on press')}
    //    onLongPress={()=>{console.warn("longggg presssss")}}
    onPressIn={()=>console.warn("press inn")}
    onPressOut={()=>console.warn('press out')}
      >
      <Text style={styles.pressableBtn}>Pressable</Text>
      </Pressable>
    </View>
  )
}


const styles= StyleSheet.create({
    main:{
        flex:1,
        justifyContent:'center'
    },
    pressableBtn:{
        backgroundColor:"blue",
        color:'#fff',
        padding:10,
        margin:10,
        borderRadius:10,
        fontSize:20,
        textAlign:'center',
        shadowColor:'#000',
        elevation:5,
    }
})