import React from "react";
import { BasicColor } from "../theme";
import Demo from '../containers/Demo/demo'
import HomeNavigator from './Home/HomeNavigator';
import TabBarIcon from "../components/TabBarIcon";
import { connect } from 'react-redux';
import CartContainer from '../containers/Cart/Cart';

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

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
  tabBarLabel: ("Account"),
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} type={"materialcommunity"} name={"account-outline"} />
  ),
};

const MainTabNavigator = ({ current_route }) => {

  return (
    (
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
          options={{ ...HomeOptions, tabBarVisible: current_route ? false : true }}
          component={HomeNavigator}

        />
        <BottomTab.Screen
          name="NotificationNavigator"
          options={{ ...NotificationOptions, tabBarVisible: current_route ? false : true }}
          options={NotificationOptions}
          component={Demo}
        />
        <BottomTab.Screen
          name="CartNavigator"
          options={{ ...CartOptions, tabBarVisible: current_route ? false : true }}
          options={CartOptions}
          component={CartContainer}
        />
        <BottomTab.Screen
          name="AccountNavigator"
          options={{ ...AccountOptions, tabBarVisible: current_route ? false : true }}
          options={AccountOptions}
          component={Demo}
        />
      </BottomTab.Navigator>
    )
  );
}

function mapStateToProps({ products }) {
  const { current_route } = products;
  return {
    current_route: current_route
  };
}

export default connect(mapStateToProps, null)(MainTabNavigator)

