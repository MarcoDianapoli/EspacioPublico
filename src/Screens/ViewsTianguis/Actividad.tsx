import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Image,
  ImageBackground,
} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const Actividad = ({ navigation }: any) => {
  const [searchText, setSearchText] = useState("");
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Contenedor del logo */}
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require("../../assets/logo.png")}
          />
        </View>

        {/* Barra de búsqueda */}
        <View style={styles.optionsContainer}>
          <Text style={styles.plainText}>Bienvenido</Text>
          <Text style={styles.plainTextName}>Juan Hernández López</Text>
          <Text style={styles.plainTextInstrucciones}>
            Selecciona la licencia que deseas operar.
          </Text>
          <Text style={styles.plainTextInstrucciones}>
            Puedes acceder a cada una de ellas dando click en el nombre.
          </Text>
        </View>

        <ImageBackground
          source={require("../../assets/background.png")}
          style={styles.background}
        >
          <View style={styles.optionseparator}>
            <Text style={styles.optionText}>+ Licencia de Giro Tipo A</Text>
          </View>
        </ImageBackground>

        <View style={styles.optionList}>
          <TouchableOpacity
            style={styles.optionItem}
            onPress={() =>
              navigation.navigate("Licencia", {
                licencia: "Tianguis Parque Rojo",
              })
            }
          >
            <Text style={styles.optionText}>
              <FontAwesome name="play" size={10} color="black" />
              Tianguis Parque Rojo
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.optionItem}
            onPress={() =>
              navigation.navigate("Licencia", { licencia: "Tianguis Cultural" })
            }
          >
            <Text style={styles.optionText}>
              <FontAwesome name="play" size={10} color="black" />
              Tianguis Cultural
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.optionItem}
            onPress={() =>
              navigation.navigate("Licencia", {
                licencia: "Tianguis El Baratillo",
              })
            }
          >
            <Text style={styles.optionText}>
              <FontAwesome name="play" size={10} color="black" />
              Tianguis El Baratillo
            </Text>
          </TouchableOpacity>
        </View>
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
    marginVertical: 20,
    backgroundColor: "#CC9F53",
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: "contain",
    marginRight: 10,
  },
  optionsContainer: {
    paddingHorizontal: 10,
    backgroundColor: "#FFF",
  },
  optionseparator: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 25,
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
    fontFamily: "DMSans",
    fontSize: 14,
    padding: 10,
    paddingLeft: "10%",
    paddingRight: "10%",
  },
  background: {
    width: "100%",
    height: 80,
    justifyContent: "center",
    alignItems: "center",
  },
  optionText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    paddingLeft: "10%",
  },
  optionList: {
    padding: 10,
  },
  optionItem: {
    paddingVertical: 10,
    backgroundColor: "#FFF",
    marginVertical: 5,
    borderRadius: 5,
  },
  backgroudTianguis: {
    color: "#000",
    padding: 4,
    fontWeight: "bold",
    paddingLeft: "15%",
  },
});

export default Actividad;
