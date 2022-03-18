import React, { useEffect } from "react";
import {
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/AntDesign";
import { useSelector } from "react-redux";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import HomeStack from "../screens/Home/HomeStack";
import SearchStack from "../screens/Search/SearchStack";
import {background, pink, pPink} from "../constants";

const Tab = createBottomTabNavigator();

function MyTabBar({ state, descriptors, navigation }) {
  return (
    <LinearGradient
      style={(styles.gradient, { flexDirection: "row", elevation: 0 })}
      colors={["transparent", "black"]}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              paddingVertical: 8,
            }}
          >
            <Icon
              name="user"
              color={isFocused ? "cyan" : "white"}
              size={25}
              style={{ alignSelf: "center" }}
            />
          </TouchableOpacity>
        );
      })}
    </LinearGradient>
  );
}

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
          options={{
            tabBarIcon: ({ focused }) => (
              <Icon name="home" color={focused ? pink : pPink} size={25} />
            ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={SearchStack}
          options={{
            tabBarIcon: ({ focused }) => (
              <Icon
                name="search1"
                color={focused ? pink : pPink}
                size={25}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default Tabs;

const styles = StyleSheet.create({
  gradient: {
    height: 50,
    display: "flex",
    justifyContent: "flex-end",
  },
});
