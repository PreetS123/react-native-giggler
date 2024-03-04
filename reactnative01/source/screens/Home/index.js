import { View, Text, Button, Alert } from 'react-native'
import React from 'react'

export default function HomeScreen({navigation,route}) {

  const checkButton=()=>{
    Alert.alert("On press function called")
  }
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{fontSize:30}}>Welcome {route.params.email}</Text>
      <Button title="Home" color={'green'} onPress={checkButton} />
    </View>
  )
}