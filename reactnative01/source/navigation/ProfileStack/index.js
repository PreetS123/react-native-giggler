import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Orders from '../../screens/Orders';
import Insider from '../../screens/Insider';
import HelpCenter from '../../screens/HelpCenter';
import Coupons from '../../screens/Coupons';
import ProfileScreen from '../../screens/Profile';
import CreditCard from '../../screens/CreditCard';
import PaymentCurrencies from '../../screens/PaymentCurr/PaymentCurrencies';
import EarnRedeem from '../../screens/EarnRedeem';
import ManageAccount from '../../screens/ManageAccount';
import Challenges from '../../screens/Challenges';
import Wishlist from '../../screens/Wishlist';
import MyntraSuggest from '../../screens/MyntraSuggest';

export default function ProfileStack() {

    const ProfileStack= createStackNavigator();

    return (
      <ProfileStack.Navigator>
      <ProfileStack.Screen name='Profile' component={ProfileScreen} />
      <ProfileStack.Screen name="Orders" component={Orders} />
      <ProfileStack.Screen name="Insider" component={Insider} />
      <ProfileStack.Screen name="Help Center" component={HelpCenter} />
      <ProfileStack.Screen name="Coupons" component={Coupons}/>
      <ProfileStack.Screen name="Myntra Kotak Credit Card" component={CreditCard} />
      <ProfileStack.Screen name="Payment & Currencies" component={PaymentCurrencies} />
      <ProfileStack.Screen name="Earn & Redeem" component={EarnRedeem} />
      <ProfileStack.Screen name="Manage Account" component={ManageAccount} />
      <ProfileStack.Screen name="Challenges" component={Challenges}/>
      <ProfileStack.Screen name="Wishlist" component={Wishlist}/>
      <ProfileStack.Screen name="Myntra Suggest" component={MyntraSuggest}/>
      </ProfileStack.Navigator>
    )
}