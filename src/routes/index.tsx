import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "@screens/Home";
import { SearchRecipe } from "@screens/SearchRecipe";
import { SearchRecipeDetails } from "@screens/SearchRecipeDetails";
import { SalvedList } from "@screens/SalvedList";
import { StartPage } from "@screens/StartPage";

import { rootParams } from "@utils/rootParams";

const Stack = createNativeStackNavigator<rootParams>();

export function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="StartPage"
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="SearchRecipe" component={SearchRecipe} />
        <Stack.Screen name="SearchRecipeDetails" component={SearchRecipeDetails} />
        <Stack.Screen name="SalvedList" component={SalvedList} />
        <Stack.Screen name="StartPage" component={StartPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}