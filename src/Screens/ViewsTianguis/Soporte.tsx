import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, Dimensions, ScrollView } from 'react-native';

const { width, height } = Dimensions.get("window");

export const Soporte = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          style={styles.logo}
          source={require("../../../assets/logo.png")}
        />
        <Text style={styles.profileText}>Formulario de contacto</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View>
          <Text style={styles.text}>Asunto</Text>
          <TextInput style={styles.txtInput} placeholder='...'></TextInput>
          <Text style={styles.text}>Describe puntualmente cómo podemos ayudarte</Text>
          <TextInput style={styles.txtInput} placeholder='...'></TextInput>
          <TouchableOpacity style={styles.buttonslide}>
            <Text style={styles.textCerrar}>Enviar</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.logos}>
          <Image
            source={require('../../../assets/logogdl2.png')}
            style={styles.logoItem}
          />
          <Image
            source={require('../../../assets/logogdl3.png')}
            style={styles.logoItem}
          />
          <Image
            source={require('../../../assets/logogdl1.png')}
            style={styles.logoItem}
          />
        </View>
        <Text style={styles.letrasPequeñas}>
          2025 Sistema De Control De Espacio Público
        </Text>
      </ScrollView>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 20,
  },
  profile: {
    backgroundColor: "#CC9F53",
    alignItems: "center",
    padding: 20,
  },
  profileText: {
    color: "white",
    fontSize: width * 0.07,
    padding: 10,
  },
  logo: {
    width: width * 0.4,
    height: height * 0.2,
    resizeMode: "contain",
  },
  text: {
    marginTop: 18,
    fontSize: width * 0.05,
    textAlign: "center",
  },
  textCerrar: {
    fontSize: width * 0.08,
    color: 'white',
    fontWeight: 'bold',
    textAlign: "center",
  },
  buttonslide: {
    backgroundColor: "gray",
    marginHorizontal: width * 0.15,
    marginTop: 15,
    alignItems: "center",
    borderRadius: 10,
    padding: 15,
  },
  logos: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: 20,
  },
  logoItem: {
    width: width * 0.25,
    height: height * 0.1,
    resizeMode: "contain",
  },
  letrasPequeñas: {
    color: 'black',
    fontSize: width * 0.03,
    textAlign: 'center',
    marginTop: 20,
  },
  txtInput: {
    height: 50,
    borderColor: '#CC9F53',
    borderWidth: 1,
    paddingLeft: 12,
    borderRadius: 8,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    fontSize: width * 0.04,
    color: '#333',
    margin: 25,
  },
});

export default Soporte;
