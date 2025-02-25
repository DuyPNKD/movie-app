import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeMovie from "../../screens/home/HomeMovie";
import HeaderMovie from "../home/MovieHeader";
import "react-native-gesture-handler";
import CategoryTrending from "../home/MovieTrending";
import CategoryPopular from "../home/MoviePopular";
import CategoryRecommend from "../home/MovieRecommend";
import CategoryKid from "../home/MovieKid";
import CategoryAdventure from "../home/MovieAdventure";
import CategoryRomance from "../home/MovieRomance";
import CategoryTopRated from "../home/MovieTopRate";
const NavigationStack = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="HomeMovie"
        component={HomeMovie}
        options={{ header: () => <HeaderMovie /> }}
      />
      <Stack.Screen name="CategoryTrending" component={CategoryTrending} />
      <Stack.Screen name="CategoryPopular" component={CategoryPopular} />
      <Stack.Screen name="CategoryTopRated" component={CategoryTopRated} />
      <Stack.Screen name="CategoryRecommend" component={CategoryRecommend} />
      <Stack.Screen name="CategoryKid" component={CategoryKid} />
      <Stack.Screen name="CategoryAdventure" component={CategoryAdventure} />
      <Stack.Screen name="CategoryRomance" component={CategoryRomance} />
    </Stack.Navigator>
  );
};

const NavigationPro = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen name="HomeMovies" component={NavigationStack} />
      <Drawer.Screen name="MovieList" component={CategoryTrending} />
    </Drawer.Navigator>
  );
};
export default NavigationPro;
