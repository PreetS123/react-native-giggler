import { View, Text } from 'react-native'
import React from 'react'
import Settings from '../../screens/Settings';
import ResponsiveUI from '../../screens/ResponsiveUI';
import SimpleForm from '../../screens/SimpleForm';
import { createStackNavigator } from '@react-navigation/stack';

export default function SettingStack() {

    const SettingStack= createStackNavigator();

  return (
    <SettingStack.Navigator>
    <SettingStack.Screen name="Settings" component={Settings} />
    <SettingStack.Screen name="UI" component={ResponsiveUI} />
    <SettingStack.Screen name="Form" component={SimpleForm} />
    </SettingStack.Navigator>
  )
}