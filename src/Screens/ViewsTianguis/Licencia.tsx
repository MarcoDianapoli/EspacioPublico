import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Image,
  ImageBackground,
  Dimensions,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const { width, height } = Dimensions.get("window");

const Licencia = ({ navigation, route }: any) => {
  const { licencia } = route.params;
  const [searchText, setSearchText] = useState("");
  const handlePaymentNavigation = () => {
    navigation.navigate("Pago");
  };
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require("../../../assets/logo.png")}
          />
        </View>

        <View style={styles.price}>
          <Text style={styles.amountText}>$45.00</Text>
          <Text style={styles.amountLabel}>ADEUDO</Text>
        </View>

        <View style={styles.statusContainer}>
          <Text style={styles.statusText}>NO PAGADA</Text>
        </View>

        <View style={styles.optionseparator}>
          <ImageBackground
            source={require("../../../assets/background.png")}
            style={styles.background}
          >
            <Text style={styles.backgroundText}>
              Licencia {licencia}
            </Text>
          </ImageBackground>
        </View>
        <View>
          <Text style={styles.plainText}>MID del comerciante</Text>
          <Text style={styles.plainTextInstrucciones}>123ABc456De78f9</Text>
          <Text style={styles.plainText}>Juan Hernández López</Text>
          <Text style={styles.plainTextInstrucciones}>LOCAL no.45</Text>
          <Text style={styles.plainText}>Vigencia al: 2024-12-31</Text>
        </View>

        <TouchableOpacity style={styles.payButton} onPress={handlePaymentNavigation} >
          <Text style={styles.payButtonText}>
            Pagar Ahora <FontAwesome name="money" size={24} color="white" />
          </Text>
        </TouchableOpacity>

        <Text style={styles.paymentProvider}>a través de TokaPay</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#3C3C3B",
  },
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#CC9F53",
  },
  logo: {
    width: width * 0.4,
    height: height * 0.2,
    resizeMode: "contain",
    marginRight: 10,
  },
  price: {
    backgroundColor: "#CC9F53",
  },
  amountText: {
    color: "white",
    textAlign: "center",
    fontSize: width * 0.15,
  },
  amountLabel: {
    color: "white",
    fontSize: width * 0.04,
    padding: 10,
    textAlign: "center",
  },
  statusContainer: {
    alignItems: "center",
    backgroundColor: "red",
    height: height * 0.1,
  },
  statusText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: width * 0.1,
  },
  optionseparator: {
    height: height * 0.05,
  },
  plainText: {
    paddingTop: 10,
    fontSize: width * 0.05,
    textAlign: "center",
  },
  plainTextInstrucciones: {
    fontSize: width * 0.04,
    textAlign: "center",
  },
  background: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
  },
  backgroundText: {
    color: "white",
    paddingLeft: "10%",
    fontSize: width * 0.05,
    fontWeight: "bold",
  },
  payButton: {
    backgroundColor: "#309864",
    padding: 15,
    alignItems: "center",
    borderRadius: 10,
    marginVertical: 20,
    marginHorizontal: width * 0.2,
  },
  payButtonText: {
    color: "#FFF",
    fontSize: width * 0.05,
    fontWeight: "bold",
  },
  paymentProvider: {
    color: "#000",
    fontSize: width * 0.04,
    textAlign: "center",
    marginTop: 10,
  },
});

export default Licencia;
