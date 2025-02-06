import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { StyleSheet } from "react-native";

// Importación de pantallas
import AuthScreen from "../Screens/Auth/AuthScreen";
import LoginScreen from "../Screens/Auth/LoginScreen";
import SliderScreenView from "../Screens/SliderScreen";
import Licencia from "../Screens/ViewsTianguis/Licencia";
import { MiInfo } from "../Screens/ViewsTianguis/MiInfo";
import QR from "../Screens/ViewsTianguis/QR";
import { Soporte } from "../Screens/ViewsTianguis/Soporte";
import  Pago  from "../Screens/ViewsTianguis/Pago";
import TabNavigation from "./TabNavigation";
import { MetodoPago } from "../Screens/ViewsTianguis/MetodoPago";

const Stack = createStackNavigator();

const StackApplication = () => {

    return (
        <Stack.Navigator id={undefined} screenOptions={{ headerShown: false, headerStyle: { backgroundColor: '#cc9f53' },headerTintColor:'white' }}>
            <Stack.Screen name="Slider" component={SliderScreenView} />
            <Stack.Screen name="Auth" component={AuthScreen} options={{ title: "Selecciona un método de inicio de sesión" }} />
            <Stack.Screen name="Login" component={LoginScreen} options={{ title: "Inicio de sesión" }} />
            <Stack.Screen name="Licencia" component={Licencia}/>
            <Stack.Screen name="QR" component={QR} options={{ title: "QR", headerShown: true }}/>
            <Stack.Screen name="Soporte" component={Soporte} options={{ title: "Soporte", headerShown: true}}/>
            <Stack.Screen name="MiInfo" component={MiInfo} options={{ title: "Mi Informacion", headerShown: true }}/>
            <Stack.Screen name="Pago" component={Pago} />
            <Stack.Screen name="MetodoPago" component={MetodoPago}/>
            <Stack.Screen name="Main" component={TabNavigation} />
        </Stack.Navigator>
            //
    );
}

const styles = StyleSheet.create({
    slide: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
    },
    image: {
        width: 200,
        height: 200,
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 10,
    },
    text: {
        fontSize: 16,
        textAlign: "center",
        color: "#888",
        paddingHorizontal: 20,
    },
});

export default StackApplication;