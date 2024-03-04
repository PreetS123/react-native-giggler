import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'

export default function RadioButton() {
    const skills=[
        {
            id:1,
            name:"JavaScript"
        },
        {
            id:2,
            name:"ReactJS"
        },
        {
            id:3,
            name:"NodeJS"
        },
        {
            id:4,
            name:"ExpressJS"
        },
        {
            id:5,
            name:"MongoDB"
        }
    ]
    const [selectedRadio,setSelectedRadio]= useState(1);



  return (
    <View  style={radioStyles.mainContainer}>
     {
        skills.map((ele)=>
        <TouchableOpacity key={ele.id}  onPress={()=>setSelectedRadio(ele.id)}>
        <View style={radioStyles.radioWrapper}>
        <View style={radioStyles.radio}>
        {selectedRadio===ele.id?<View style={radioStyles.radioBg}></View>:null}
        </View>
         <Text style={radioStyles.radioText}>{ele.name}</Text>
        </View>
        </TouchableOpacity>
        )
     } 
     
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
        height:30,
        width:30,
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
         height:18,
         width:18,
    }
})