import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { Alert, SafeAreaView, StyleSheet, View, ImageBackground, Image, Dimensions, TouchableOpacity, Text } from "react-native";
import TextInputUI from '../../Components/TextInputUI';
import TextUI from '../../Components/TextUI';

const { width, height } = Dimensions.get('window');

const LoginScreen = ({ navigation }) => {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleLogin = () => {
        if (!user || !password) {
            Alert.alert('Error', 'Por favor, llena todos los campos.');
            return;
        }

        let userType = "";

        if (user === "user" && password === "1234") {
            userType = "user";
        } else if (user === "admin" && password === "1234") {
            userType = "admin";
        } else {
            Alert.alert('Error', "Usuario o contraseña incorrectos.");
            return;
        }

        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            Alert.alert('Login', 'Simulación de login exitosa.');
            console.log(userType);
            navigation.navigate("Main", { userType });
             // Pasa el tipo de usuario a la navegación
        }, 1000);
    }

    const logoWidth = width * 0.6;
    const logoHeight = logoWidth / 1.71;

    return (
        <ImageBackground
            style={styles.imageBackground}
            source={require('../../../assets/1.jpg')}>
                <StatusBar style="auto" />
            <SafeAreaView>
                <View>
                    <View>
                        <Image
                            source={require('../../../assets/logo.png')}
                            style={[styles.topImage, { width: logoWidth, height: logoHeight }]}
                        />
                    </View>
                    <View style={styles.formulario}>
                        <TextUI
                            label="Ingrese su correo"
                            labelStyle={{
                                fontSize: width * 0.045, color: 'white', fontFamily: 'Adlinnaka-Bold',
                            }}
                            containerStyle={{ marginBottom: height * 0.015 }}
                        />
                        <TextInputUI
                            value={user}
                            onChangeText={(text) => setUser(text)}
                            inputStyle={{
                                backgroundColor: 'white', borderWidth: 2, color: 'black', fontFamily: 'Adlinnaka-Bold', textAlign: 'center', borderRadius: 11
                            }}
                            containerStyle={{ marginBottom: height * 0.025 }}
                            placeholder="Correo electrónico"
                            keyboardType="email-address"
                        />
                    </View>
                    <View style={styles.formulario}>
                        <TextUI
                            label="Contraseña"
                            labelStyle={{
                                fontSize: width * 0.045, color: 'white', fontFamily: 'Adlinnaka-Bold',
                            }}
                            containerStyle={{ marginBottom: height * 0.015 }}
                        />
                        <TextInputUI
                            value={password}
                            onChangeText={(text) => setPassword(text)}
                            inputStyle={{
                                backgroundColor: 'white', borderWidth: 2, color: 'black', fontFamily: 'Adlinnaka-Bold', textAlign: 'center', borderRadius: 11
                            }}
                            containerStyle={{ marginBottom: height * 0.025 }}
                            placeholder="Ingrese su contraseña"
                            secureTextEntry
                        />
                    </View>
                    <View style={styles.contenedor}>
                        <Text style={styles.forgotPass}>
                            *Olvidé la contraseña
                        </Text>
                        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                            <View style={styles.gradient}>
                                <Text style={styles.buttonText}>Iniciar sesión</Text>
                            </View>
                        </TouchableOpacity>
                        <Text style={styles.newUser}>
                            ¿Eres nuevo en la plataforma?                             
                        </Text>
                        <Text style={styles.newUser}>
                            Crea tu usuario a través de una computadora
                        </Text>
                    </View>
                    <View style={styles.logos}>
                        <Image
                            source={require('../../../assets/logogdl2.png')}
                            style={styles.logosGDL2}
                        />
                        <Image
                            source={require('../../../assets/logogdl3.png')}
                            style={styles.logosGDL3}
                        />
                        <Image
                            source={require('../../../assets/logogdl1.png')}
                            style={styles.logosGDL1}
                        />
                    </View>
                    <Text style={styles.letrasPequeñas}>
                        2025 Sistema De Control De Espacio Publico
                    </Text>
                </View>
            </SafeAreaView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    imageBackground: {
        flex: 1,
        resizeMode: 'cover',
    },
    formulario: {
        marginLeft: width * 0.05,
        marginRight: width * 0.05,
    },
    topImage: {
        marginTop: height * 0.1,
        alignSelf: 'center'
    },
    contenedor: {
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontFamily: 'DMSans',
        fontSize: width * 0.05,
        color: '#FFF',
    },
    loginButton: {
        paddingVertical: height * 0.0125,
        paddingHorizontal: width * 0.05,
        borderRadius: 25,
        alignItems: 'center',
    },
    gradient: {
        paddingVertical: height * 0.0125,
        paddingHorizontal: width * 0.05,
        borderRadius: 25,
        alignItems: 'center',
        backgroundColor: 'linear-gradient(90deg, rgba(255,165,0,1) 0%, rgba(255,0,0,1) 100%)',
    },
    forgotPass: {
        fontFamily: 'DMSans',
        fontSize: width * 0.035,
        color: 'white',
        textDecorationLine: 'underline',
        padding: 10,
    },
    newUser: {
        fontFamily: 'DMSans',
        fontSize: width * 0.035,
        color: 'white',
        textDecorationLine: 'underline',
    },
    logos: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: height * 0.025,
        padding: width * 0.025,
    },
    logosGDL2: {
        width: width * 0.45,
        height: height * 0.125,
        resizeMode: "contain",
        marginRight: width * 0.075,

    },
    logosGDL3: {
        width: width * 0.1,
        height: height * 0.050,
        resizeMode: "contain",
        
    },
    logosGDL1: {
        width: width * 0.25,
        height: height * 0.125,
        resizeMode: "contain",
        paddingRight: width * 0.3,
    },
    letrasPequeñas: {
        color: 'white',
        fontSize: width * 0.025,
        textAlign: 'center',
    }
});

export default LoginScreen;
