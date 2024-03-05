import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Orders from '../../screens/Orders';
import Insider from '../../screens/Insider';
import HelpCenter from '../../screens/HelpCenter';
import Coupons from '../../screens/Coupons';
import ProfileScreen from '../../screens/Profile';

export default function ProfileStack() {

    const ProfileStack= createStackNavigator();

    return (
      <ProfileStack.Navigator>
      <ProfileStack.Screen name='Profile' component={ProfileScreen} />
      <ProfileStack.Screen name="Orders" component={Orders} />
      <ProfileStack.Screen name="Insider" component={Insider} />
      <ProfileStack.Screen name="Help Center" component={HelpCenter} />
      <ProfileStack.Screen name="Coupons" component={Coupons}/>
      </ProfileStack.Navigator>
    )
}