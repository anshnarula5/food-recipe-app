import { CardStyleInterpolators } from "@react-navigation/stack";
import React from "react";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import RecipeSearch from "./RecipeSearch";
import Search from "./Search";
const Stack = createSharedElementStackNavigator();

const SearchStack = () => {
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
        name="Search"
        component={Search}
        options={{
          title: "Search",
        }}
      />
      <Stack.Screen
        name="RecipeSearch"
        component={RecipeSearch}
        options={{
          title: "RecipeSearch",
        }}
        sharedElements={(route) => {
          return [route.params.recipe.label];
        }}
      />
    </Stack.Navigator>
  );
};

export default SearchStack;
