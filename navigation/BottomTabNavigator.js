import React from "react"; 
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"; 
import Home from "../pages/Home";  
import Icon from "react-native-vector-icons/Ionicons";

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
        </Tab.Navigator>
    );
}