import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Import your screen components
import HomeScreen from './source/screens/Home';
import Settings from './source/screens/Settings';
import Testimonials from './source/screens/Testimonials';
import SkillScreen from './source/screens/Skills';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        {/* Add another screen for the second tab */}
        <Tab.Screen name="Testimonial" component={Testimonials}/>
        <Tab.Screen name="Skill" component={SkillScreen}/>
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
