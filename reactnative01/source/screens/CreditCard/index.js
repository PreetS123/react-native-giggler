import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import { Box, Center, Flex, Heading, Image, ScrollView, Stack } from 'native-base'

export default function CreditCard() {
    const screenWidth=Dimensions.get('window').width;
  return (
    <ScrollView>
     <Box bg={'#BB8FCE'} p={2}>
     <Text  style={{color:"#fff",fontSize:12,textAlign:'center',letterSpacing:1,fontWeight:'bold'}}>LIMITED TIME OFFER:Get the Kotak credit card for Free!</Text>
     </Box>
       <Stack>
       <Center>
       <Image  
       source={{
        uri:"https://static.bankbazaar.com/images/india/infographic/kotak-myntra-credit-card.webp"
       }}
       alt="CREDIT CARD"
       size={300}
       
       />
       </Center>
       </Stack>
       <Flex flexDirection={'row'} flexWrap={'wrap'} justifyContent={'space-between'} alignItems={'center'} p={2}>
       <Box style={creditStyles.mainCreditPoint} alignItems={'center'}>
       <Heading size="md" style={creditStyles.orangeColor}>7.5+5%</Heading>
       <Heading size="sm" style={creditStyles.orangeColor}>Instant Discount</Heading>
       <Text style={creditStyles.paragraph}>on all Myntra purchases</Text>
       </Box>
       <Box style={creditStyles.mainCreditPoint} alignItems={'center'}>
       <Heading size="md" style={creditStyles.orangeColor}>15,000</Heading>
       <Heading size="sm" style={creditStyles.orangeColor}>Total Savings</Heading>
       <Text style={creditStyles.paragraph}>per year approx</Text>
       </Box>
       <Box style={creditStyles.mainCreditPoint} alignItems={'center'}>
       <Heading size="md" style={creditStyles.orangeColor}>1.25%</Heading>
       <Heading size="sm" style={creditStyles.orangeColor}>Unlimited Cashback</Heading>
       <Text style={creditStyles.paragraph}>on all other spends</Text>
       </Box>
       <Box style={creditStyles.mainCreditPoint} alignItems={'center'}>
       <Heading size="md" style={creditStyles.orangeColor}>04</Heading>
       <Heading size="sm" style={creditStyles.orangeColor}>Lounge Access</Heading>
       <Text style={creditStyles.paragraph}>one per quarter</Text>
       </Box>
       </Flex>
       <View
        style={{
         marginTop:20,
         marginBottom:20,
         borderBottomColor: 'black',
         borderBottomWidth: StyleSheet.hairlineWidth,
        }}
        />
        <View>
        <Heading>5% Cashback Upto 12,000*</Heading>
        <Flex flexDirection={'row'} flexWrap={'wrap'} justifyContent={'space-around'}>
        <Box>
        <Center>
        <Image  
        source={{
         uri:"https://bestmediainfo.com/uploads/2022/09/1662522326.Cleartrip-New-Logo.jpg"
        }}
        alt="CLEAR TRIP"
        size={30}
        
        />
        </Center>
        </Box>
        <Box>
        <Center>
        <Image source={{
          uri:"https://cdn.zeebiz.com/sites/default/files/styles/zeebiz_850x478/public/2022/04/06/179252-swggy-instamart.jpg?itok=hP3y_v7x"
        }}
        alt="INSTAMART"
        size={30}
        />
        </Center>
        </Box>
        <Box>
        <Center>
        <Image
        source={{
          uri:"https://logowik.com/content/uploads/images/pvr-cinemas6676.jpg"
        }}
        alt="PVR"
        size={30}
        />
        </Center>
        </Box>
        <Box>
        <Center>
        <Image
        source={{
          uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzzOYyvYpK3LFGtp9HqrJ8owXN3VSUFvbLkBrZ_knbCw&s"
        }}
        alt=""
        size={30}
        />
        </Center>
        </Box>
        <Box>
        <Center>
        <Image
        source={{
          uri:"https://i.pinimg.com/originals/b3/8a/a1/b38aa1b21050b0e769a97eb751d12829.png"
        }}
        alt=""
        size={30}
        />
        </Center>
        </Box>

        </Flex>
        </View>
    </ScrollView>
  )
}

const creditStyles=StyleSheet.create({
    mainCreditPoint:{
        width:'50%',
        borderWidth:2,
        borderColor:"#eee",
        borderRadius:10,
        backgroundColor:'#fff',
    },
    orangeColor:{
        color:'#D35400',
        letterSpacing:2
    },
    paragraph:{
        color:"#000",
        fontSize:12
    }
})