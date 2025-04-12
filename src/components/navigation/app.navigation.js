import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import "react-native-gesture-handler";
import HeaderMovie from "../home/MovieList/MovieHeader";
import HomeMovie from "../../screens/home/HomeMovie";
import CategoryTrending from "../home/MovieList/MovieTrending";
import CategoryPopular from "../home/MovieList/MoviePopular";
import CategoryRecommend from "../home/MovieList/MovieRecommend";
import CategoryKid from "../home/MovieList/MovieKid";
import CategoryAdventure from "../home/MovieList/MovieAdventure";
import CategoryRomance from "../home/MovieList/MovieRomance";
import CategoryTopRated from "../home/MovieList/MovieTopRate";
import FavoriteScreen from "../../screens/favorite/FavoriteScreen";
import ProfileScreen from "../../screens/profile/ProfileScreen";
import { Ionicons } from "@expo/vector-icons";
import ModalCategory from "../home/ModalCategory";
import SearchMovie from "../../screens/search/SearchMovie";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const NavigationStack = () => {
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
      <Stack.Screen name="SearchMovie" component={SearchMovie} />
    </Stack.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Favorite") {
            iconName = focused ? "heart" : "heart-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "person" : "person-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#FDC252",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          backgroundColor: "#2A2D45",
          borderTopWidth: 0,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          height: 60,
          paddingBottom: 5,
          paddingTop: 5,
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          elevation: 0,
          shadowOpacity: 0,
        },
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={NavigationStack} />
      <Tab.Screen name="Favorite" component={FavoriteScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

const NavigationPro = () => {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen name="HomeMovie" component={TabNavigator} />
      <Drawer.Screen name="ModalCategory" component={ModalCategory} />
    </Drawer.Navigator>
  );
};

export default NavigationPro;
