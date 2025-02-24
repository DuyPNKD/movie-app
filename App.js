import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import NavigationPro from "./src/components/navigation/app.navigation.js";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <NavigationPro />
    </NavigationContainer>
  );
}
