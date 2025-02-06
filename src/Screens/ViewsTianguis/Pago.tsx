import React, { useState } from "react";
import { View, Text, SafeAreaView, Image, Dimensions, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';

const { width, height } = Dimensions.get("window");

const Pago = ({ navigation }) => {
  const [selectedOption, setSelectedOption] = useState("saldoPendiente");
  const [otherAmount, setOtherAmount] = useState("");
  const handlePaymentNavigation = () => {
    navigation.navigate("MetodoPago");
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../../../assets/LOGOTIPO-02.png")} />
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Selecciona el monto que deseas pagar:</Text>
        <TouchableOpacity style={styles.optionContainer} onPress={() => setSelectedOption("saldoPendiente")}>
          <View style={styles.radioButton}>
            {selectedOption === "saldoPendiente" && <View style={styles.radioButtonSelected} />}
          </View>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>Saldo Pendiente: $45.00</Text>
            <Text style={styles.optionSubText}>Vigencia al: 2024-12-31</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionContainer} onPress={() => setSelectedOption("otroMonto")}>
          <View style={styles.radioButton}>
            {selectedOption === "otroMonto" && <View style={styles.radioButtonSelected} />}
          </View>
          <TextInput
            style={styles.input}
            placeholder="Otro Monto"
            keyboardType="numeric"
            value={otherAmount}
            onChangeText={setOtherAmount}
            editable={selectedOption === "otroMonto"}
          />
        </TouchableOpacity>
        <Text style={styles.totalText}>Total a pagar: ${selectedOption === "saldoPendiente" ? "45.00" : otherAmount || "0.00"}</Text>
        <TouchableOpacity style={styles.pagar} onPress={handlePaymentNavigation}>
          <Text style={styles.buttonText}>Pagar ahora</Text>
          <FontAwesome name="dollar" size={24} color="white" style={styles.icon}></FontAwesome>
        </TouchableOpacity>
        
        <View style={styles.paymentProviderContainer}>
          <Text style={styles.paymentProviderText}>a través de</Text>
          <Image style={styles.paymentProviderImage} source={require("../../../assets/toka.png")} />
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
    padding: 20,
    alignContent:'center'
  },
    logoContainer: {
      alignItems: "center",
      backgroundColor: "#CC9F53",
      padding: 10,
    },
    logo: {
      width: width * 0.4,
      height: height * 0.2,
      resizeMode: "contain",
      margin: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 20,
    alignSelf:'center'
  },
  optionContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    alignSelf:'center'
  },
  radioButton: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  radioButtonSelected: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: "#000",
  },
  optionTextContainer: {
    flexDirection: "column",
  },
  optionText: {
    fontSize: 16,
  },
  optionSubText: {
    fontSize: 12,
    color: "gray",
  },
  input: {
    borderWidth: 2,
    borderColor: "#000",
    borderRadius: 18,
    padding: 5,
    flex: 0.51,
    alignSelf:'center'
  },
  totalText: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    alignSelf:'center'
  },
  pagar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "green", // Color verde
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: width * 0.5,
    alignSelf: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
    marginRight: 10,
  },
  icon: {
    marginLeft: 5,
  },
  paymentProviderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  paymentProviderText: {
    color: "#000",
    fontSize: width * 0.04,
    textAlign: "center",
  },
  paymentProviderImage: {
    width: width * 0.2, // ajusta según sea necesario
    height: width * 0.2, // ajusta según sea necesario
    resizeMode: "contain",
    marginLeft: 5, // espacio entre el texto y la imagen
  },
});

export default Pago;
