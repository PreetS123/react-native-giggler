import { View, Text, Button, Alert } from 'react-native'
import React from 'react'

export default function HomeScreen() {

  const checkButton=()=>{
    Alert.alert("On press function called")
  }
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>HomeScreen</Text>
      <Button title="Home" color={'green'} onPress={checkButton} />
    </View>
  )
}