import { View, Text,ScrollView, FlatList, StyleSheet } from 'react-native'
import React from 'react'

export default function ListItem() {

    let myData=[
        {
            "name": "name 4",
            "email": "email4@gmail.com",
            "age": "21",
            "gender": "Female",
            "id": "4"
            },
            {
            "name": "name 5",
            "email": "name5@gmail.com",
            "age": "12",
            "gender": "Male",
            "id": "5"
            },
            {
            "name": "name 6",
            "email": "name6@gmail.com",
            "age": "29",
            "gender": "Male",
            "id": "6"
            },
            {
            "name": "name 7",
            "email": "email7@gmail.com",
            "age": "27",
            "gender": "Female",
            "id": "7"
            },
            {
            "name": "name 8",
            "email": "email8@gmail.com",
            "age": "28",
            "gender": "Male",
            "id": "8"
            },
            {
            "name": "name 9",
            "email": "email9@gmail.com",
            "age": "29",
            "gender": "Male",
            "id": "9"
            },
            {
            "name": "name 10",
            "email": "email10@gmail.com",
            "age": "10",
            "gender": "Female",
            "id": "10"
            },
            {
            "name": "name 11",
            "email": "email11@gmail.com",
            "age": "11",
            "gender": "Male",
            "id": "11"
            },
    ]
  return (
    <View>
      <Text>ListItem</Text>
      <ScrollView>
       <FlatList  
       data={myData}
       renderItem={({item})=><View style={styles.container}>
       <Text style={styles.item}>{item.name}</Text>
       <Text style={styles.item}>{item.email}</Text></View>}
       />
      </ScrollView>
    </View>
  )
}


const styles=StyleSheet.create({
    container:{
        flex:1,
        flexDirection:"row",
        flexWrap:"wrap",
        alignItems:"center",
        justifyContent:"space-around",
        backgroundColor: 'aliceblue'
    },
    item:{
        fontSize:20,
        color:"orange",
        textAlign:"center",
        margin:2
    }
})