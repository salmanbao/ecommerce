import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BasicColor } from "../theme";

import TabBarIcon from "../components/TabBarIcon";
import HomeNavigator from './Home/HomeNavigator';

import Demo from '../containers/Demo/demo'

const BottomTab = createBottomTabNavigator();

const HomeOptions = {
  tabBarLabel: ("Home"),  
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} type={"simpleicons"} name={"home"} />
  ),
};

const NotificationOptions = {
  tabBarLabel: ("Notifications"),
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} type={"ionicons"} name={"ios-notifications-outline"} />
  ),
};

const CartOptions = {
  tabBarLabel: ("Cart"),
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} type={"evilicons"} name={"cart"} />
  ),
};

const AccountOptions = {
  tabBarLabel:("Account"),
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} type={"materialcommunity"} name={"account-outline"} />
  ),
};

const MainTabNavigator =  () => (
  <BottomTab.Navigator
    tabBarOptions={{
      activeTintColor: BasicColor.yellow50,
      inactiveTintColor: BasicColor.grey40,
      style: {
        paddingTop: 6,
        backgroundColor: BasicColor.white,
        borderTopWidth: 0,
      },
    }}
  >
    <BottomTab.Screen
      name="HomeNavigator"
      options={HomeOptions}
      component={HomeNavigator}
    />
    <BottomTab.Screen
      name="NotificationNavigator"
      options={NotificationOptions}
      component={Demo}
    />
    <BottomTab.Screen
      name="CartNavigator"
      options={CartOptions}
      component={Demo}
    />
    <BottomTab.Screen
      name="AccountNavigator"
      options={AccountOptions}
      component={Demo}
    />
  </BottomTab.Navigator>
);

export default MainTabNavigator;
