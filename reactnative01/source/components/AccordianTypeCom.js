import { View, Text, StyleSheet } from 'react-native'
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Box, VStack } from 'native-base';

export default function AccordianTypeCom({iconName,heading,subHeading}) {
  return (
    <View style={[accordStyles.accordMain]}>
       <Box style={[accordStyles.firstIconBox]} m={2}>
       <Icon name={iconName} size={30}/>
       </Box>
         <VStack style={accordStyles.content}>
         <Text style={[accordStyles.titleText,accordStyles.fontBlack]}>{heading}</Text>
         <Text style={[accordStyles.fontGrey,accordStyles.paraText]}>{subHeading}</Text>
         </VStack>
         <Box style={[accordStyles.arrowIconBox]} p={2} >
          <Icon name="arrow-right" size={22} color={'#000'} />
         </Box>
    </View>
  )
}


const accordStyles=StyleSheet.create({
    accordMain:{
        flex:1,
        flexDirection:'row',
        backgroundColor:"#fff",
        alignItems:'center',
        marginBottom:8,
    },
    content:{
        flex:2
    },
    titleText:{
        fontSize:20,
        fontWeight:'bold',
    },
    paraText:{
        fontSize:10,
        fontWeight:600,
        
    },
    fontBlack:{
       color:"#000",
    },
    fontGrey:{
        color:"#424949",
    },
    firstIconBox:{
      width:50,
    },
    arrowIconBox:{
        width:40,
       
    }
})