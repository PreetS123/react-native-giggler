import { View, Text, TextInput, StyleSheet, Button } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
    const [email,setEmail]= useState("");
    const [password, setPassword]= useState("");
    const [showPassword,setShowPassword]= useState(true);
    const navigation= useNavigation();
   


    const handleLogin=()=>{
      
       console.warn("email",email,"password",password);
       navigation.navigate("Home",{email:email})
    }

  return (
    <View style={styles.main}>
    <Text style={styles.heading}>Start your journey with us!</Text>
      <TextInput 
        placeholder='Enter your email'
        keyboardType="email-address"
        autoCapitalize="none"
        onChangeText={(text)=>setEmail(text)}
        value={email}
        style={styles.textInp}
       />
       <View style={styles.passBox}>
       <TextInput 
        placeholder='Enter your password'
        secureTextEntry={showPassword}
        autoCapitalize='none'
        onChangeText={(text)=>setPassword(text)}
        value={password}
        style={styles.textInpFullWidth}
       />
       <Button style={styles.propBtn} color="#eee" title={showPassword?"Show":"Hide"} onPress={()=>setShowPassword(!showPassword)}/>
       </View>
       <View>
       <View style={styles.loginBox}>
       <Button title="Login" onPress={handleLogin}/>
       </View>
       </View>
    </View>
  )
}


const styles= StyleSheet.create({
    main:{
        flex:1,
        padding:8,
    },
    heading: {
        fontSize: 25,
        marginBottom: 20,
    },
  textInp:{
    backgroundColor: "#fff",
    marginBottom: 12,
    paddingHorizontal: 8,
    height: 40,
  },
  textInpFullWidth: {
    flex: 1, // Takes full width
    backgroundColor: "#fff",
    paddingHorizontal: 8,
    height: 40,
},
passBox: {
    flexDirection: 'row',
    alignItems: 'center', // Align items vertically centered
},
propBtn: {
    marginLeft: 8,
    height: 40,
    boxShadow:"none",
},
loginBox:{
  marginTop:8,
}
});