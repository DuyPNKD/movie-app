import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeMovie from "../../screens/home/HomeMovie";
import HeaderMovie from "../home/MovieHeader";
import "react-native-gesture-handler";
import CategoryTrending from "../home/MovieTrending";
const NavigationStack = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeStack"
        component={HomeMovie}
        options={{ header: () => <HeaderMovie /> }}
      />
    </Stack.Navigator>
  );
};

const NavigationPro = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen name="Home" component={NavigationStack} />
      <Drawer.Screen name="MovieList" component={CategoryTrending} />
    </Drawer.Navigator>
  );
};
export default NavigationPro;
