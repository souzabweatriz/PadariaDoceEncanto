import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import Inicial from "../screens/Inicial";
import BottomTabNavigator from "./BottomTabNavigator";

const Stack = createStackNavigator();

export default function StackNavigator() {
    return (
        <Stack.Navigator initialRouteName="Inicial">
            <Stack.Screen 
                name="Home" 
                component={Home} 
                options={{ headerShown: false }} 
            />
            <Stack.Screen 
                name="Inicial" 
                component={Inicial} 
                options={{ headerShown: false }} 
            />
            <Stack.Screen 
                name="BottomTabNavigator" 
                component={BottomTabNavigator} 
                options={{ headerShown: false }} 
            />
        </Stack.Navigator>
    );
}