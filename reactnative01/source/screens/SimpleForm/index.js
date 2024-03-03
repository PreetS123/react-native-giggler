import { View, Text, TextInput, Button } from 'react-native'
import React, { useState } from 'react';
import formStyles from './style';

export default function SimpleForm() {
  const [uname,setUname]= useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [showPassword,setShowPassword]= useState(false);
  const [display,setDisplay]= useState(false);


  const clearForm=()=>{
    setUname("");
    setEmail("");
    setPassword("");
  }
  return (
    <View>
      <TextInput 
       placeholder='Enter your username'
       style={formStyles.textInp}
       type="text"
       onChangeText={(text)=>setUname(text)}
       value={uname}
       />
       <TextInput 
       placeholder='Enter your email'
       style={formStyles.textInp}
       type="email"
       onChangeText={(text)=>setEmail(text)}
       value={email}
       />
       <TextInput 
       placeholder='Enter your password'
       style={formStyles.textInp}
       type={showPassword?"text":"password"}
       onChangeText={(text)=>setPassword(text)}
       value={password}
       secureTextEntry={true}
       />
       <View style={{marginBottom:10}}>
       <Button color={'green'} title="Print details" onPress={()=>setDisplay(true)}/>
       </View>
       <Button title="Clear" onPress={clearForm}/>

       <View>
    {
      display?<View>
      <Text>Username: {uname}</Text>
      <Text>Password: {password}</Text>
      <Text>Email: {email}</Text>
      </View>:null
    }
    </View>
    </View>
    
  )
}


