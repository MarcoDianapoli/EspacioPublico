import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image, SafeAreaView, Dimensions } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons"

const { width } = Dimensions.get("window");
const CARD_SIZE = width * 0.42;

const CarScreen = ({ navigation }: any) => {
    return (
        <SafeAreaView style={styles.safeArea} >
            <View style={styles.container}>
                <View style={styles.title}>
                    <Text style={styles.titleText}>Mi auto</Text>
                </View>
                <View style={styles.cardsContainer}>
                    <View style={styles.cards}>
                        <TouchableOpacity style={styles.card}>
                            <View style={styles.cardTitleContainer} >
                                <Text style={[styles.cardTitle, styles.cartTitleActive]}>PASE</Text>
                                <Ionicons name="chevron-forward" size={20} color="gray" />
                            </View>
                            <Text style={styles.cardSubtitle}>Recarga tu tag de PASE</Text>
                            <Image source={require('../../assets/adaptive-icon.png')} style={styles.cardImage} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.cards}>
                        <TouchableOpacity style={styles.card}>
                            <View style={styles.cardTitleContainer}>
                                <Text style={styles.cardTitle}>Multas</Text>
                                <Ionicons name="chevron-forward" size={20} color="gray" />
                            </View>
                            <Text style={styles.cardSubtitle}>Espéralo pronto</Text>
                            <Image source={require('../../assets/favicon.png')} style={styles.cardImage} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "#FFF"
    },
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    title: {
        width: 'auto',
        height: '10%',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleText: {
        fontFamily: 'Adlinnaka-BoldDemo',
        fontWeight: 'bold',
        fontSize: 22,
        color: '#309864',
    },
    cardsContainer: {
        margin: '5%',
        justifyContent: 'space-between',
        flexDirection: 'row',
        gap: 10,
    },
    cards: {
        width: CARD_SIZE,
        height: CARD_SIZE,
        marginBottom: 15,
    },
    card: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: "#F4F4F4",
        borderRadius: 10,
        padding: 10,
    },
    cardTitleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    cardTitle: {
        fontFamily: 'Adlinnaka-BoldDemo',
        fontSize: 22
    },
    cartTitleActive: {
        fontWeight: 'bold',
    },
    cardSubtitle: {
        marginTop: 5,
        fontFamily: 'Adlinnaka-BoldDemo',
        fontSize: 16
    },
    cardImage: {
        width: '50%',
        height: '30%',
        resizeMode: 'contain',
    }
});

export default CarScreen;