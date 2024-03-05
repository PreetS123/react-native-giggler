import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

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
import SettingStack from './source/navigation/SettingStack/index.js';
import ProfileScreen from './source/screens/Profile/index.js';
import TabNavigationScreen from './source/navigation/TabNavigation/index.js';
import { NativeBaseProvider } from 'native-base';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NativeBaseProvider>
   <TabNavigationScreen/>
   </NativeBaseProvider>
  );
}

export default App;

