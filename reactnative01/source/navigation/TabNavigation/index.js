import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, getFocusedRouteNameFromRoute } from '@react-navigation/native';

import HomeScreen from '../../screens/Home';
import LoginScreen from '../../screens/Login/index.js';
import Register from '../../screens/Register/index.js';
import SettingStack from '../SettingStack/index.js';
import ProfileScreen from '../../screens/Profile/index.js';
import ProfileStack from '../ProfileStack/index.js';



const Tab = createBottomTabNavigator();


export default function TabNavigationScreen() {
  return (
    <NavigationContainer>
    <Tab.Navigator 
     screenOptions={({route})=>({
      tabBarVisible:getTabBarVisibility(route),
     })}
    >
    {/*<Tab.Screen name="Splash" component={SplashScreenComp} options={{ tabBarVisible: false }} />*/}
      <Tab.Screen name="Login" component={LoginScreen} />
      <Tab.Screen 
      name="Home" 
      component={HomeScreen}  
      options={({ route }) => ({
        tabBarLabel: route.params?.email ? `${route.params.email}` : "Guest",
      })}
      />
      <Tab.Screen name="Settings" component={SettingStack} options={{headerShown:false}}/>
      <Tab.Screen name="Profile" component={ProfileStack} options={{headerShown:false}} />
    </Tab.Navigator>
  </NavigationContainer>
  );
}



function getTabBarVisibility(route){
  const routeName= getFocusedRouteNameFromRoute(route);

  return routeName === 'Home';
}