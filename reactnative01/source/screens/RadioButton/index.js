import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

export default function RadioButton() {
    const [selectedRadio,setSelectedRadio]= useState(1);
  return (
    <View  style={radioStyles.mainContainer}>
      <TouchableOpacity  onPress={()=>setSelectedRadio(1)}>
      <View style={radioStyles.radioWrapper}>
      <View style={radioStyles.radio}>
      {selectedRadio===1?<View style={radioStyles.radioBg}></View>:null}
      </View>
       <Text style={radioStyles.radioText}>Radio 1</Text>
      </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>setSelectedRadio(2)}>
      <View style={radioStyles.radioWrapper}>
      <View style={radioStyles.radio}>
      {selectedRadio===2?<View style={radioStyles.radioBg}></View>:null}
      </View>
       <Text style={radioStyles.radioText}>Radio 2</Text>
      </View>
      </TouchableOpacity>
    </View>
  )
}



const radioStyles=StyleSheet.create({
    mainContainer:{
        flex:1,
        backgroundColor:"#fff",
        alignItems:"center",
        justifyContent:"center",
    },
    radioWrapper:{
        flexDirection:"row",
        alignItems:"center",
    },
    radioText:{
        fontSize:20,
    },
    radio:{
        height:40,
        width:40,
        borderColor:"blue",
        borderWidth:2,
        borderRadius:20,
        margin:10,
        alignItems:"center",
        justifyContent:"center",
    },
    radioBg:{
         backgroundColor:'blue',
         borderRadius:14,
         height:28,
         width:28,
    }
})