import { Camera, CameraView } from "expo-camera";
import React, { useEffect, useState } from "react";
import { Alert, Button, Image, Linking, StyleSheet, Text, TouchableOpacity, View, Dimensions, StatusBar, ScrollView } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const { width, height } = Dimensions.get('window');

export default function ScanQRCODE({ navigation }: any) {
    const [hasPermission, setHasPermission] = useState<Boolean | null>(null);
    const [scanned, setScanned] = useState(false);
    const [torchEnabled, setTorchEnabled] = useState(false);

    useEffect(() => {
        const getCameraPermissions = async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === "granted");
        };

        getCameraPermissions();
    }, []);

    const handleBarcodeScanned = ({ type, data }: any) => {
        if (scanned) return;
        setScanned(true);

        console.log(`Escaneado: Tipo: ${type}, Datos: ${data}`);

        if (type.includes("qr")) {
            const formattedData = encodeURI(data);
            console.log(`URL formateada: ${formattedData}`);

            if (formattedData.startsWith("http")) {
                Linking.openURL(formattedData).catch((err) =>
                    Alert.alert("Error", "No se pudo abrir la URL: " + err.message)
                );
            } else {
                Alert.alert("Código Escaneado", `Contenido no es una URL: ${data}`);
            }
        } else {
            Alert.alert("Código No Válido", "Por favor, escanea un código QR válido.");
        }

        setTimeout(() => setScanned(false), 2000);
    };

    { scanned && <Text style={styles.scanningText}>Procesando código...</Text> }

    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    const logoWidth = width * 0.5;
    const logoHeight = logoWidth / 1.71;

    return (
        <View style={styles.container}>
            <View style={styles.cameraContainer}>
                <CameraView
                    onBarcodeScanned={scanned ? undefined : handleBarcodeScanned}
                    style={styles.camera}
                />
            </View>
            <View style={styles.topImageContainer}>
                <Image
                    source={require('../../assets/LOGOTIPO-02.png')}
                    style={[styles.topImage, { width: logoWidth, height: logoHeight }]}
                />
            </View>
            <View style={styles.roundedCorners} />

            <TouchableOpacity
                style={[styles.flashButton, torchEnabled && styles.flashButtonActive]}
                onPress={() => setTorchEnabled(!torchEnabled)}
            >
                <Ionicons
                    name={torchEnabled ? "flashlight" : "flashlight-outline"}
                    size={24}
                    color={torchEnabled ? "#FFF" : "gray"}
                />
            </TouchableOpacity>

            <View style={styles.inputContainer}>
                <ScrollView contentContainerStyle={styles.scrollContent}>
                    <View>
                        <TouchableOpacity style={[styles.inputRow]} >
                            <Ionicons name="location" size={20} color="gray" style={styles.inputIcon} />
                            <View style={styles.inputTextContainer}>
                                <Text style={styles.textInput}>Espacio Minerva</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.inputRow2}>
                            <Text style={styles.textInput2}>Captura manual</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
            {scanned && (
                <Button title={"Tap to Scan Again"} onPress={() => setScanned(false)} />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    cameraContainer: {
        flex: 2.9, // Ajustar para hacer la cámara más pequeña
        position: "relative", // Asegurarnos de que el botón de la linterna se posicione correctamente
    },
    camera: {
        ...StyleSheet.absoluteFillObject,
    },
    topImageContainer: {
        position: "absolute",
        top: StatusBar.currentHeight ? StatusBar.currentHeight + 10 : 10,
        alignSelf: "center",
    },
    topImage: {
        width: 10,
        height: 'auto',
    },
    roundedCorners: {
        position: "absolute",
        top: "30%",
        left: "10%",
        right: "10%",
        height: '35%',
        borderWidth: 5,
        borderColor: "#FFF",
        borderRadius: 20,
        borderStyle: "dashed",
    },
    flashButton: {
        position: "absolute",
        bottom: 230, // Ajustar la posición del botón de la linterna
        right: '45%',
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        padding: 5,
        borderRadius: 25,
    },
    flashButtonActive: {
        backgroundColor: "#FFBF00",
    },
    inputContainer: {
        flex: 1,
        backgroundColor: "#FFF",
        paddingBottom: 30,
        paddingHorizontal: 20,
    },
    scrollContent: {
        flexGrow: 1,
        justifyContent: "center",
    },
    inputRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        borderBottomColor: "gray",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 15,
        backgroundColor: "#F4F4F4",
        width: '100%',
        marginVertical: 10,
    },
    inputRow2: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#E86927",
        borderRadius: 10,
        color: "#FFF",
        paddingVertical: 10,
        marginVertical: 10,
    },
    inputTextContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        right: '5%'
    },
    inputIcon: {
        marginRight: 10,
        alignSelf: "flex-start"
    },
    textInput: {
        fontSize: 16,
        fontFamily: "Adlinnaka-BoldDemo",
        color: '#000',
        fontWeight: 'bold',
        alignItems: 'center',
        textAlign: "center",
    },
    textInput2: {
        fontSize: 16,
        fontFamily: "Adlinnaka-BoldDemo",
        color: '#FFF',
        fontWeight: 'bold',
        textAlign: "center",
    },
    scanningText: {
        position: "absolute",
        top: "50%",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        color: "white",
        padding: 10,
        borderRadius: 5,
    },
});
