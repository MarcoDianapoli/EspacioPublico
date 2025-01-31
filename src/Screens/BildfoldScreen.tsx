import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Switch,
  Dimensions
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { ImageBackground } from 'react-native';

const { width, height } = Dimensions.get("window");

const BildfoldScreen = ({ navigation }) => {
  const [searchText, setSearchText] = useState("");
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar backgroundColor="#CC9F53"/>
      
        {/* Contenedor del logo */}
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require("../../assets/logo.png")}
          />
        </View>

        
      <View style={styles.container}>
      <Image
          source={require("../../assets/ejepmMapa.png")}
          style={styles.mapa}
        />
        {/* Estatus */}
        <View style={styles.optionsContainer}>
          <View
            style={[
              styles.estatus,
              isEnabled ? styles.estatusBien : styles.estatusMal,
            ]}
          >
            <Text style={styles.estatusText}>
              {isEnabled ? "Activo" : "Inactivo"}
            </Text>
          </View>
        </View>

        {/* Switch */}
        <View style={styles.switchContainer}>
          <Switch
            trackColor={{ false: "#767577", true: "green" }}
            thumbColor={isEnabled ? "#CC9F53" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#CC9F53",
  },
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: height * 0.025,
    backgroundColor: "#CC9F53",
  },
  logo: {
    width: width * 0.4,
    height: height * 0.2,
    resizeMode: "contain",
  },
  optionsContainer: {
    paddingHorizontal: width * 0.025,
    backgroundColor: "#FFF",
    marginVertical: height * 0.025,
  },
  estatus: {
    padding: height * 0.025,
    alignItems: "center",
    borderRadius: 40,
    marginHorizontal: width * 0.15,
  },
  estatusBien: {
    backgroundColor: "green",
  },
  estatusMal: {
    backgroundColor: "red",
  },
  estatusText: {
    color: "white",
    fontSize: width * 0.06,
  },
  mapa: {
    width: "100%",
    maxHeight: height * 0.25,
    resizeMode: "contain" as "contain",
  },
  switchContainer: {
    alignItems: "center",
    marginVertical: height * 0.025,
    transform: [{ scaleX: 2.5 }, { scaleY: 2.5 }],
  },
});

export default BildfoldScreen;
