import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screens/Home';
import Settings from '../../screens/Settings';
import ContactForm from '../../screens/ContactForm';
import Testimonials from '../../screens/Testimonials';



const Stack = createBottomTabNavigator();

export default function TabNavigation() {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Testimonial" component={Testimonials}/>
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Contact Form" component={ContactForm} />
      </Stack.Navigator>
  );
}