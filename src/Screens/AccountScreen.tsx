import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState, useCallback } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Image,
  TextInput,
  Alert,
  Dimensions
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome5";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Octicons from "@expo/vector-icons/Octicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useFocusEffect } from '@react-navigation/native';

const { width, height } = Dimensions.get("window");

const AccountScreen = ({ navigation }) => {
  const [searchText, setSearchText] = useState("user");
  const [userType, setUserType] = useState("");

  const handleLogout = async () => {
    await AsyncStorage.removeItem("userType");
    setUserType("");
    navigation.navigate("Login");
  };

  const confirmLogout = () => {
    Alert.alert(
      "Cerrar Sesión",
      "¿Estás seguro de que quieres cerrar sesión?",
      [
        {
          text: "Cancelar",
          onPress: () => null,
          style: "cancel",
        },
        {
          text: "Sí",
          onPress: handleLogout,
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.profile}>
          <Image
            style={styles.logo}
            source={require("../../assets/logo.png")}
          />
        </View>
        <View style={styles.profile}>
          <FontAwesome
            name="user-circle"
            size={width * 0.25}
            color="white"
            style={{ paddingBottom: 20 }}
          />
        </View>
        <View style={styles.container}>
          <TouchableOpacity style={styles.options} onPress={() =>
            navigation.navigate("MiInfo")}>
            <Text style={styles.text}>
              <Octicons name="info" size={width * 0.06} color="#CC9F53" />
              Mi información
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.options}
          onPress={() =>
            navigation.navigate("Soporte")
          }>
            <Text style={styles.text}>
              <Octicons name="question" size={width * 0.06} color="#CC9F53" />
              Soporte Técnico
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.options} onPress={() =>
            navigation.navigate("QR")}>
            <Text style={styles.text}>
              <MaterialCommunityIcons
                name="qrcode-scan"
                size={width * 0.06}
                color="#CC9F53"
              />
              Ver Identificador QR
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonslide} onPress={confirmLogout}>
            <Text style={styles.textCerrar}>Cerrar sesión</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  profile: {
    backgroundColor: "#CC9F53",
    alignItems: "center",
    paddingVertical: height * 0.02,
  },
  logo: {
    width: width * 0.4,
    height: height * 0.2,
    resizeMode: "contain",
  },
  options: {
    padding: height * 0.015,
  },
  text: {
    fontSize: width * 0.05,
    textAlign: "center",
    paddingLeft: 15,
  },
  textCerrar: {
    fontSize: width * 0.08,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    paddingLeft: 15,
  },
  buttonslide: {
    backgroundColor: "red",
    marginLeft: width * 0.1,
    marginRight: width * 0.1,
    marginTop: height * 0.05,
    alignItems: "center",
    borderRadius: 40,
    padding: height * 0.02,
    shadowColor: "black",
  },
});

export default AccountScreen;
