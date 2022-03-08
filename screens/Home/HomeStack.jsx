
import {CardStyleInterpolators} from "@react-navigation/stack";
import React from "react";
import {createSharedElementStackNavigator} from "react-navigation-shared-element";
import List from "../../components/List";
import Home from "./Home";
import Recipe from "./Recipe";
const Stack = createSharedElementStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Recipes"
      
      screenOptions={{
        detachPreviousScreen: true,
        headerShown: false,
        presentation: "modal",
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        
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
      <Stack.Screen
        name="List"
        component={List}
        options={{
          title: "List",
        }}
       
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
