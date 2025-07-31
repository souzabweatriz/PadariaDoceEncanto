import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Products from "../screens/Products";
import AboutUs from "../screens/AboutUs";
import Icon from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Tab = createBottomTabNavigator();

export default function TabNavigation() {
    return (
        <Tab.Navigator initialRouteName="Home">
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="home" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Products"
                component={Products}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="cupcake" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="AboutUs"
                component={AboutUs}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="people" color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}