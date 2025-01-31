import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AccountScreen from "../Screens/AccountScreen";


const Stack = createStackNavigator();

const AccountStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="AccountScreen"
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen
                name="AccountScreen"
                component={AccountScreen}
                options={{ title: "Cuenta" }}
            />
           
        </Stack.Navigator>
    );
}

export default AccountStack;