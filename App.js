import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import MovieDetailScreen from "./src/screens/detail/MovieDetailScreen";

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="MovieDetail" component={MovieDetailScreen} options={{headerShown: false}} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
