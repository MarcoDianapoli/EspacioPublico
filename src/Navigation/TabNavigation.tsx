import React, { useEffect, useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, Text, StyleSheet } from "react-native";

// Importación de pantallas
import HelpScreen from "../Screens/HelpScreen";
import ScanQRCODE from "../Screens/ScanQRCODE";
import BildfoldScreen from "../Screens/BildfoldScreen";
import AccountStack from "./AccountStack";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const Tab = createBottomTabNavigator();

const TabNavigation = ({ route }) => {
  const [userType, setUserType] = useState(route.params.userType); // Estado para almacenar el tipo de usuario

  useEffect(() => {
    if (route.params && route.params.userType) {
      setUserType(route.params.userType);
    }
  }, [route.params]);
  console.log(userType, "este es el tab");

  return (
    <Tab.Navigator
      id={undefined}
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#FFF",
          position: "absolute",
          bottom: 0,
          height: 60,
          elevation: 0,
          shadowOpacity: 0,
          borderTopWidth: 0,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HelpScreen}
        initialParams={{ userType }} // Pasar userType como parámetro inicial
        options={{
          tabBarLabel: ({ focused }) => (
            <Text style={focused ? styles.activeLabel : styles.inactiveLabel}>
              Home
            </Text>
          ),
          tabBarIcon: ({ focused }) => (
            <FontAwesome
              name="home"
              size={30}
              color={focused ? "#CC9F53" : "gray"}
            />
          ),
        }}
      />
      {userType === "admin" && (
        <Tab.Screen
          name="Scan"
          component={ScanQRCODE}
          initialParams={{ userType }} // Pasar userType como parámetro inicial
          options={{
            tabBarLabel: ({ focused }) => (
              <Text style={focused ? styles.activeLabel : styles.inactiveLabel}>
                QR Scan
              </Text>
            ),
            tabBarIcon: ({ focused }) => (
              <FontAwesome
                name="qrcode"
                size={30}
                color={focused ? "#CC9F53" : "gray"}
              />
            ),
          }}
        />
      )}
      <Tab.Screen
        name="Billfold"
        component={BildfoldScreen}
        initialParams={{ userType }} // Pasar userType como parámetro inicial
        options={{
          tabBarLabel: ({ focused }) => (
            <Text style={focused ? styles.activeLabel : styles.inactiveLabel}>
              {userType === "admin" ? "Mapa" : "Iniciar"}
            </Text>
          ),
          tabBarIcon: ({ focused }) => (
            <FontAwesome
              name={userType === "admin" ? "map" : "power-off"}
              size={30}
              color={focused ? "#CC9F53" : "gray"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="AccountTab"
        component={AccountStack}
        initialParams={{ userType }} // Pasar userType como parámetro inicial
        options={{
          tabBarLabel: ({ focused }) => (
            <Text style={focused ? styles.activeLabel : styles.inactiveLabel}>
              Cuenta
            </Text>
          ),
          tabBarIcon: ({ focused }) => (
            <FontAwesome
              name="user-circle-o"
              size={30}
              color={focused ? "#CC9F53" : "gray"}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  activeLabel: {
    color: "#CC9F53",
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "Adlinnaka-BoldDemo",
  },
  inactiveLabel: {
    color: "gray",
    fontSize: 14,
    fontFamily: "Adlinnaka-BoldDemo",
    padding: 6,
  },
});

export default TabNavigation;
