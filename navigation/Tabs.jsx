import React, { useEffect } from "react";
import {
  createBottomTabNavigator,
  BottomTabBar,
} from "@react-navigation/bottom-tabs";
import HomeStack from "../screens/Home/HomeStack";
import Home from "../screens/Home/Home";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <>
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
        />
        
      </Tab.Navigator>
    </>
  );
};

export default Tabs;
