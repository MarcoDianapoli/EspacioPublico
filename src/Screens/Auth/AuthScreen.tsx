import React, { useState } from "react";
import { Alert, SafeAreaView, StyleSheet, View, Text, Image, ImageBackground, Dimensions, TouchableOpacity } from "react-native";
import TextInputUI from '../../Components/TextInputUI';
import TextUI from '../../Components/TextUI';
import Ionicons from 'react-native-vector-icons/Ionicons';

const { width, height } = Dimensions.get('window');

const AuthScreen = ({ navigation }: any) => {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    

        // if (user !== "usuario@controlespaciopublico.com" || password !== "Pass123."){
        //     Alert.alert('Error', "Usuario o contraseña incorrectos.");
        //     return;
        // }
            // Aquí conectarás con tu API cuando esté lista
            // fetch('https://tu-endpoint.com/login', {
            //   method: 'POST',
            //   headers: { 'Content-Type': 'application/json' },
            //   body: JSON.stringify({ email, password }),
            // })
            // .then(response => response.json())
            // .then(data => {
            //   // Manejar respuesta del servidor
            //   console.log(data);
            // })
            // .catch(error => {
            //   console.error(error);
            // });
      
    const logoWidth = width * 0.7;
    const logoHeight = logoWidth / 1.71;

    return (
        <ImageBackground
            source={require('../../../assets/1.jpg')}
            style={styles.imageBackground}
        >
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.content}>
                    <Image
                        source={require('../../../assets/logo.png')}
                        style={[styles.topImage, { width: logoWidth, height: logoHeight }]}
                    />
                    <View style={styles.info}>
                        <Ionicons name="ellipse" color="#E86927" />
                        <Text style={styles.infoText}>¡Optimiza y automatiza la verficación del cumplimiento de las obligaciones municipales en el espacio público!</Text>
                    </View>
                </View>
                <View style={styles.buttons}>
                    <View style={styles.button}>
                        <TouchableOpacity onPress={() => { navigation.navigate("Login")}}>
                            <View style={styles.buttonContent}>
                                <Text style={styles.buttonText}>Iniciar sesión</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
            
                    
                    <View style={styles.noticeContainer}>
                        <Text style={styles.noticeText}>
                            Al ingresar, aceptas nuestros{' '}
                            <Text style={styles.link}>Términos y Condiciones</Text>{' '}
                            y confirmas que leíste el{' '}
                            <Text style={styles.link}>Aviso de privacidad.</Text>
                        </Text>
                    </View>
                </View>
            </SafeAreaView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
    imageBackground: {
        flex: 1,
        resizeMode: 'cover',
    },
    content: {
        flex: 1,
    },
    topImage: {
        marginTop:60,
        width: 250,
        height: 100,
    },
    info: {
        marginLeft: '5%',
        marginTop: 10,
        flexDirection: 'row'
    },
    infoText: {
        fontFamily: 'Adlinnaka-BoldDemo',
        color: '#FFF',
        width: '60%',
        textAlign: "justify",
    },
    buttons: {
        position: 'relative',
        bottom: 60,
        left: 0,
        right: 0,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    button: {
        width: '100%',
        height: 50,
        borderRadius: 15,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        paddingHorizontal: 20,
        marginBottom: 10,
    },
    button2: {
        width: '100%',
        height: 50,
        borderRadius: 15,
        backgroundColor: '#000',
        justifyContent: 'center',
        paddingHorizontal: 20,
        marginBottom: 10,
    },
    buttonContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    buttonText: {
        fontFamily: 'Adlinnaka-BoldDemo',
        fontSize: 18,
        fontWeight: 'bold',
        flex: 1,
        textAlign: 'center',
    },
    buttonText2: {
        fontFamily: 'Adlinnaka-BoldDemo',
        fontSize: 18,
        fontWeight: 'bold',
        flex: 1,
        textAlign: 'center',
        color: '#FFF',
    },
    icon: {
        marginRight: 10,
    },
    noticeContainer: {
        paddingVertical:30,
        paddingHorizontal: 20,
    },
    noticeText: {
        color: '#FFF',
        fontSize: 12,
        textAlign: 'center',
        lineHeight: 20,
    },
    link: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },
});
export default AuthScreen;