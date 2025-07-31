import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";
import Home from "../screens/Home";
import Products from "../screens/Products";
import AboutUs from "../screens/AboutUs";
import Icon from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HeaderLogo from "../assets/HeaderLogo.png";

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
    return (
        <Tab.Navigator initialRouteName="Home"
            screenOptions={{
                headerShown: true,
                headerTitle: () => (
                    <Image
                        source={HeaderLogo}
                        style={{
                            width: 200,
                            height: 200,
                            resizeMode: "contain",
                            shadowColor: '#8B4513',
                            shadowOffset: { width: 0, height: 4 },
                            shadowOpacity: 0.3,
                            shadowRadius: 6,
                            elevation: 6,
                        }}
                    />
                ),
                headerStyle: {
                    backgroundColor: "#FFF3DC",
                    height: 115,
                    borderBottomWidth: 2,
                    borderBottomColor: "#5C1B1B",
                },
                headerTitleAlign: "center",
                headerTintColor: "#f7f7f7",
                headerTitleStyle: {
                    fontSize: 30,
                    fontWeight: "bold",
                    alignItems: "center",
                },
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: "#5C1B1B",
                    position: "fixed",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: 70,
                    paddingBottom: 0,
                    zIndex: 10,
                    borderTopWidth: 1,
                    borderTopColor: "#e0e0e0",
                    borderTopLeftRadius: 60,
                    borderTopRightRadius: 60,
                },
                tabBarLabelStyle: {
                    fontSize: 15,
                },
                tabBarIconStyle: {
                    marginTop: 15,
                    marginBottom: 5,
                },
                tabBarActiveTintColor: "#B58248",
                tabBarInactiveTintColor: "white",
            }}>
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