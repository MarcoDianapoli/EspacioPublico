import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState, useCallback } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TextInput,
  Alert,
} from "react-native";
// import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome5";

const QR = ({ navigation }: any) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.profile}>
          <Image
            style={styles.logo}
            source={require("../../../assets/logo.png")}
          />
        </View>
        <View style={styles.profile}>
          <FontAwesome
            name="user-circle"
            size={90}
            color="white"
            style={{ paddingBottom: 20 }}
          />
        </View>
        <View style={styles.qrView}>
          <Image
            style={styles.qr}
            source={require("../../../assets/codigo-qr.jpg")}
          />
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
    //#CC9F53
  },
  qrView: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: "#FFF",
    alignItems: "center",
    //#CC9F53
  },
  qr: {
    width: 200,
    height: 200,
    resizeMode: "contain",
    marginRight: 10,
    alignItems: "center",
  },
  plainText: {
    paddingTop: 10,
    fontFamily: "DMSans",
    fontSize: 20,
    textAlign: "center",
  },
  profile: {
    backgroundColor: "#CC9F53",
    alignItems: "center",
  },
  profileText: {
    color: "white",
    fontSize: 28,
    padding: 10,
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: "contain",
    marginRight: 10,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f1f1f1",
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 5,
    marginHorizontal: 15,
    marginBottom: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "#333",
    fontFamily: "Adlinnaka-BoldDemo",
    width: "auto",
    height: 40,
  },
  options: {
    padding: 10,
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    paddingLeft: 15,
  },
  textCerrar: {
    fontSize: 30,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    paddingLeft: 15,
  },
  buttonslide: {
    color: "#FFF",
    backgroundColor: "red",
    marginLeft: 45,
    marginRight: 45,
    marginTop: 40,
    alignItems: "center",
    borderRadius: 40,
    padding: 15,
    fontFamily: "Lucida Console, Monaco, monospace",
    shadowColor: "black",
  },
});
export default QR;
