import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Import your screen components
import HomeScreen from './source/screens/Home';
import Settings from './source/screens/Settings';
import Testimonials from './source/screens/Testimonials';
import SimpleForm from './source/screens/SimpleForm';
import ListItem from './source/screens/ListItem';
import ResponsiveUI from './source/screens/ResponsiveUI';
import TestingModal from './source/screens/TestingModal.js';
import PressableButton from './source/screens/PressableItem/index.js';
import LoginScreen from './source/screens/Login/index.js';
import Register from './source/screens/Register/index.js';
import SplashScreenComp from './source/splash/index.js';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
      {/*<Tab.Screen name="Splash" component={SplashScreenComp} options={{ tabBarVisible: false }} />*/}
        <Tab.Screen name="Login" component={LoginScreen} />
        {/* Add another screen for the second tab */}
        <Tab.Screen 
        name="Home" 
        component={HomeScreen}  
        options={({ route }) => ({
          tabBarLabel: route.params?.email ? `Hello, ${route.params.email}` : "Hello Guest!",
        })}
        />
        <Tab.Screen name="Register" component={Register}/>
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
