import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screens/Home';
import Settings from '../../screens/Settings';
import ContactForm from '../../screens/ContactForm';
import Testimonials from '../../screens/Testimonials';
import ResponsiveUI from '../../screens/ResponsiveUI';
import TestingModal from '../../screens/TestingModal.js';



const Tab = createBottomTabNavigator();


export default function TabNavigation() {
  return (
    <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Home" component={ResponsiveUI} />
      {/* Add another screen for the second tab */}
      <Tab.Screen name="Testimonial" component={Testimonials}/>
      <Tab.Screen name="Modal" component={TestingModal}/>
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  </NavigationContainer>
  );
}