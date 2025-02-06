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
  Dimensions,
  ScrollView
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
              style={{ paddingBottom: 15 }}
            />
            <Text style={styles.miPerfil}>Mi perfil</Text>
          </View>
          <ScrollView>
          <View style={{padding:10}}>
          
            <Text style={{fontWeight:"bold", textAlign:"center",fontSize:18}}>
            <MaterialCommunityIcons name="information-variant" size={24} color="#CC9F53" /> Conoce tu información
            </Text>
            <Text style={{textAlign:"center", paddingLeft:29, paddingRight:29, fontSize:18}}>
              Aquí podrás encontrar la información que registraste al descargar la aplicación
            </Text>
          </View>
          <View>
            <View style={styles.optionA}>
              <TouchableOpacity style={styles.options} onPress={() => navigation.navigate("MiInfo")}>
                <Octicons name="info" size={width * 0.06} color="#CC9F53" style={{paddingLeft:15}}/>
                <Text style={styles.text}>Mi información</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.optionB}>
              <TouchableOpacity style={styles.options} onPress={() => navigation.navigate("Soporte")}>
                <Octicons name="question" size={width * 0.06} color="#CC9F53" style={{paddingLeft:15}}/>
                <Text style={styles.text}>Soporte Técnico</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.optionA}>
              <TouchableOpacity style={styles.options} onPress={() => navigation.navigate("QR")}>
                <MaterialCommunityIcons
                  name="qrcode-scan"
                  size={width * 0.06}
                  color="#CC9F53"
                  style={{paddingLeft:15}}
                />
                <Text style={styles.text}>Ver Identificador QR</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.buttonslide} onPress={confirmLogout}>
              <Text style={styles.textCerrar}>Cerrar sesión</Text>
            </TouchableOpacity>
          </View>
          </ScrollView>
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
    paddingVertical: height * 0.002,
  },
  logo: {
    width: width * 0.5,
    height: height * 0.2,
    resizeMode: "contain",
  },
  options: {
    padding: height * 0.015,
    flexDirection:'row'
  },
  text: {
    fontSize: width * 0.05,
    textAlign: "center",
    paddingLeft:28
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
  optionA:{
    backgroundColor: '#E1E1E1',
    alignItems:'flex-start'
  },
  optionB:{
    backgroundColor: '#F3F3F3',
    alignItems:'baseline'
  },
  miPerfil:{
    color:'white',
    fontFamily:'Sans-serif',
    fontSize:25,
    fontWeight:'bold'
  }
});

export default AccountScreen;
