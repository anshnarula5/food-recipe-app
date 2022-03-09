import React, { useEffect } from "react";
import { View } from "react-native";
import {
  createBottomTabNavigator,
  BottomTabBar,
} from "@react-navigation/bottom-tabs";
import HomeStack from "../screens/Home/HomeStack";
import Home from "../screens/Home/Home";
import SearchStack from "../screens/Search/SearchStack";
import Icon from "react-native-vector-icons/AntDesign";
import {pink, pPink} from "../constants";
const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 40,
          backgroundColor: "white",
          borderTopWidth: 0,
        },
        tabBarHideOnKeyboard: true,
      }}
      // tabBar={(props) => <MyTabBar {...props} />}
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon name="home" color={focused ? pink : pPink} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="search"
        component={SearchStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon name="search1" color={focused ? pink : pPink} size={25} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
