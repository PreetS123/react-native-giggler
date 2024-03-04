import { ScrollView, Text, TouchableHighlight, View} from 'react-native'
import React from 'react';
import resStyles from './styles'
import RadioButton from '../RadioButton';

export default function ResponsiveUI() {
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
     
    </View>
  )
}