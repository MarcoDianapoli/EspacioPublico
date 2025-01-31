import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Image,
  Alert,
  BackHandler,
  Dimensions,
} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import AsyncStorage from "@react-native-async-storage/async-storage";

const { width, height } = Dimensions.get("window");

const HelpScreen = ({ navigation, route }: any) => {
  const [userType, setUserType] = useState(route.params.userType || "");
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  useEffect(() => {
    if (route.params && route.params.userType) {
      setUserType(route.params.userType);
    }
  }, [route.params]);

  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => {
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
              onPress: () => handleLogout(),
            },
          ],
          { cancelable: false }
        );
        return true;
      };

      BackHandler.addEventListener("hardwareBackPress", onBackPress);

      return () => {
        BackHandler.removeEventListener("hardwareBackPress", onBackPress);
      };
    }, [handleLogout, userType, isMenuVisible])
  );

  const handleLogout = async () => {
    await AsyncStorage.removeItem("userType");
    setUserType("");
    navigation.navigate("Login");
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar hidden={true} />
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../../assets/logo.png")} />
      </View>
      <View style={styles.container}>
        <View style={styles.optionsContainer}>
          <Text style={styles.plainText}>
            Bienvenido {userType === "" ? "Inspector" : ""}
          </Text>
          <Text style={styles.plainTextName}>
            {userType === "admin"
              ? "Miguel Jose Jimenez"
              : "Juan Hernández López"}
          </Text>
          <Text style={styles.plainTextInstrucciones}>
            Selecciona la licencia que deseas operar.
          </Text>
          <Text style={styles.plainTextInstrucciones}>
            Puedes acceder a cada una de ellas dando click en el nombre.
          </Text>
        </View>
        <View style={styles.optionseparator}>
          <View style={styles.licenciaContainer}>
            <TouchableOpacity onPress={toggleMenu}>
              <Text style={styles.licenciaText}>+ Licencia de Giro Tipo A</Text>
            </TouchableOpacity>
          </View>
          {isMenuVisible && (
            <>
              {userType === "user" && (
                <>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate("Licencia", {
                        licencia: "Tianguis Parque Rojo",
                      })
                    }
                  >
                    <Text style={styles.backgroudTianguis}>
                      <FontAwesome name="play" size={10} color="black" />
                      Tianguis Parque Rojo
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate("Licencia", {
                        licencia: "Tianguis Cultural",
                      })
                    }
                  >
                    <Text style={styles.backgroudTianguis}>
                      <FontAwesome name="play" size={10} color="black" />
                      Tianguis Cultural
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate("Licencia", {
                        licencia: "Tianguis El Baratillo",
                      })
                    }
                  >
                    <Text style={styles.backgroudTianguis}>
                      <FontAwesome name="play" size={10} color="black" />
                      Tianguis El Baratillo
                    </Text>
                  </TouchableOpacity>
                </>
              )}
            </>
          )}
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
    marginVertical: 20,
    backgroundColor: "#CC9F53",
  },
  logo: {
    width: width * 0.4,
    height: height * 0.2,
    resizeMode: "contain",
    marginRight: 10,
  },
  optionsContainer: {
    paddingHorizontal: 10,
    backgroundColor: "#FFF",
  },
  optionseparator: {
    paddingTop: 25,
    height: "10%",
  },
  plainText: {
    paddingTop: 10,
    fontFamily: "DMSans",
    fontSize: 20,
    textAlign: "center",
  },
  plainTextName: {
    fontFamily: "DMSans",
    fontSize: 25,
    textAlign: "center",
    fontWeight: "bold",
    paddingBottom: 25,
  },
  plainTextInstrucciones: {
    textAlign: "center",
    fontFamily: "DMSans",
    fontSize: 16,
    padding: 10,
    paddingLeft: width * 0.1,
    paddingRight: width * 0.1,
  },
  licenciaContainer: {
    backgroundColor: "#CC9F53",
    height: "auto",
  },
  licenciaText: {
    color: "white",
    paddingLeft: width * 0.1,
    fontSize: 18,
    fontWeight: "bold",
  },
  backgroudTianguis: {
    height: "auto",
    fontWeight: "bold",
    paddingLeft: width * 0.15,
    fontSize: 18,
  },
});

export default HelpScreen;
