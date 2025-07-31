import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Tab from "./navigation/TabNavigation";

export default function App() {
    return (
        <NavigationContainer>
            <Tab />
        </NavigationContainer>
    );
}