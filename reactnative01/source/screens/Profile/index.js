import { View, Text, Dimensions, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Box, Button, HStack, Image, ScrollView } from 'native-base'
import { useNavigation } from '@react-navigation/native'

export default function ProfileScreen() {
  const navigation= useNavigation();

  // const screenWidth= Dimensions.get('window').width;

  return (
    <ScrollView>
    <Image 
    height={170}
    borderBottomRightRadius={20}
    borderBottomLeftRadius={20}
    resizeMode='cover'
    alt="MYNTRA INSIDER"
    source={{
      uri:"https://cdn0.desidime.com/attachments/photos/886564/medium/Screenshot20230531-082422Myntra.jpg?1685501674"
    }}/>
    <HStack m={2} p={2} space={3} bg={'gray.300'} justifyContent={'space-around'} >
    <Button 
    bg={'white'}
    size="md" 
    variant="ghost" 
    _text={{
      color: "#1F2937",
      fontWeight:"bold"
    }} 
    >Basic</Button>
    <Button 
    bg={'white'}
    size="sm" 
    variant="ghost"
    _text={{
      color: "#1F2937",
      fontWeight:"bold"
    }}
    >Size Details</Button>
    <Button 
    bg={'white'}
    size="sm" 
    variant="ghost"
    _text={{
      color: "#1F2937",
      fontWeight:"bold"
    }}
    >Skin & Hair</Button>
    </HStack>
      <View style={styles.boxesNavigation}>
          <Box style={styles.eachBoxNav}>
          <TouchableOpacity onPress={()=>navigation.navigate("Orders")} >
            <Text style={styles.eachText}>Orders</Text>
            </TouchableOpacity>
          </Box>
          <Box style={styles.eachBoxNav}>
          <TouchableOpacity onPress={()=>navigation.navigate("Insider")}>
          <Text style={styles.eachText}>Insider</Text>
          </TouchableOpacity>
          </Box>
          <Box style={styles.eachBoxNav}>
          <TouchableOpacity onPress={()=>navigation.navigate("Help Center")}>
          <Text style={styles.eachText}>Help Center</Text>
          </TouchableOpacity>
          </Box>
          <Box style={styles.eachBoxNav}>
          <TouchableOpacity onPress={()=>navigation.navigate("Coupons")}>
          <Text style={styles.eachText}>Coupons</Text>
          </TouchableOpacity>
          </Box>
      </View>
    </ScrollView>
  )
}


const styles= StyleSheet.create({
  shoppingType:{
    backgroundColor:"#f6f7f9",
    flex:1,
    flexDirection:'row',
    flexWrap:'wrap',
  },
  boxesNavigation:{
    flex:1,
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent:'space-around'
  },
  eachBoxNav:{
    borderWidth:1,
    borderColor:"#000",
    backgroundColor:"#fff",
    justifyContent:'center',
    alignItems:'center',
    margin:2,
  },
  eachText:{
    color:"#000",
    textAlign:'center',
    height:30,
    width:150,
    margin:2
  }
})