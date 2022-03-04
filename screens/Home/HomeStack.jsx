
import React from "react";
import {createSharedElementStackNavigator} from "react-navigation-shared-element";
import Home from "./Home";
import Recipe from "./Recipe";
const Stack = createSharedElementStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      
      screenOptions={{
        detachPreviousScreen: true,
        headerShown: false,
        presentation : "modal"
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: "Home",  
        }}
      />
      <Stack.Screen
        name="Recipe"
        component={Recipe}
        options={{
          title: "Recipe",
        }}
        sharedElements={(route) => {
          return [route.params.recipe.label];
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
