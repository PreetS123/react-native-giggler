import { ActivityIndicator, Button, ScrollView, ScrollViewBase, Text, TouchableHighlight, View} from 'react-native'
import React, { useEffect, useState } from 'react';
import resStyles from './styles'
import RadioButton from '../RadioButton';

export default function ResponsiveUI() {
    const [loaderShow,setLoaderShow]= useState(false);
  
    const displayLoader=()=>{
        setLoaderShow(true);
        setTimeout(()=>{
            setLoaderShow(false)
        },3000);
    }

    useEffect(()=>{
        return ()=>displayLoader();
    },[])

  return (
    <View style={resStyles.mainContainer}>
      <View style={resStyles.eachBox1}>
      <View style={resStyles.innerBox1}>
      <Text style={resStyles.commonText}>Inner box 1</Text>
      </View>
      <View style={resStyles.innerBox2}>
      <Text style={resStyles.commonText}>Inner box 2</Text>
      </View>
      <View style={resStyles.innerBox3}>
      <Text style={resStyles.commonText}>Inner box 3</Text>
      </View>
      </View>
      <ScrollView style={resStyles.eachBox2}>
      <TouchableHighlight>
      <Text style={resStyles.button}>Default Button</Text>
      </TouchableHighlight>
      <TouchableHighlight>
      <Text style={[resStyles.button, resStyles.success]}>Success</Text>
      </TouchableHighlight>
      <TouchableHighlight>
      <Text style={[resStyles.button, resStyles.primary]}>Primary</Text>
      </TouchableHighlight>
      <TouchableHighlight>
      <Text style={[resStyles.button, resStyles.warning]}>Warning</Text>
      </TouchableHighlight>
      <TouchableHighlight>
      <Text style={[resStyles.button, resStyles.error]}>Error</Text>
      </TouchableHighlight>
      </ScrollView>
      <ScrollView style={resStyles.eachBox3}>
       <RadioButton/>
      </ScrollView>
      <ScrollView style={resStyles.eachBox4}>
       <Text style={{fontSize:20,color:"#fff"}}>Loader Indicator</Text>
       <View style={resStyles.loaderMain}>
       <ActivityIndicator size={50} color="green" animating={loaderShow} />
       <Button title="Show loader" onPress={displayLoader} />
       </View>
      </ScrollView>
      <ScrollView style={resStyles.eachBox5}>
     </ScrollView>
     <ScrollView style={resStyles.eachBox6}>
    </ScrollView>
    
    </View>
  )
}