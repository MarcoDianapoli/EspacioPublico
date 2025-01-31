import React from "react";
import { StyleSheet, View, Text, Image, Dimensions, SafeAreaView, ImageBackground } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";

const { width, height } = Dimensions.get('window');

const SliderScreenView = ({ navigation }: any) => {
    const slides = [
        {
            key: "1",
            title: "Bienvenido a la App",
            text: "Control del Espacio Público Es la plataforma para que los gobiernos locales gestionen de manera eficiente el cumplimiento de las obligaciones con respecto al espacio público y privado.",
            image: require("./../../assets/ICONOS_Mesa de trabajo 1.png"),
            imageBackground: require('../../assets/FONDO 1.jpg'),
        },
        {
            key: "2",
            title: "Conéctate Fácilmente",
            text: "Control del Espacio Público es una plataforma donde los ciudadanos pueden consultar los saldos de las obligaciones que tienen con el gobierno local.",
            image: require("./../../assets/ICONOS-03.png"),
            imageBackground: require('../../assets/FONDO 1.jpg'),
        },
        {
            key: "3",
            title: "¡Empieza Ahora!",
            text: "Con Control del Espacio Público podrás consultar y monitorear los siguientes módulos: \n\n     • Predial \n     • Agua Potable \n     • Licencias Municipales",
            text2: "¡Vuélvete un contribuyente responsable!",
            image: require("./../../assets/ICONOS-02.png"),
            imageBackground: require('../../assets/FONDO 1.jpg'),
        },
    ];

    const renderSlide = ({ item }: any) => (
        <ImageBackground source={item.imageBackground} style={[styles.slide, { width, height }]}>
            <View>
                <Image
                    source={require('../../assets/logo.png')}
                    style={[styles.topImage, { width: logoWidth, height: logoHeight }]}
                    resizeMode="contain" 
                /> 
                  
            </View>
            <View style={styles.centerContent}>
                <Image
                    source={item.image}
                    style={styles.centerImage}
                />
                <Text style={styles.text}>{item.text}</Text>
                <View style={styles.linea}>
                    <Image
                        source={require('../../assets/LÍNEA 1.png')}
                        style={styles.lineImage}
                    />
                </View>
                <Text style={styles.text2}>{item.text2}</Text>
                
            </View>
        </ImageBackground>
    );

    const onDone = async () => {
        navigation.replace("Auth");
    };

    const logoWidth = width * 0.6; // Ajusta el tamaño según sea necesario
    const logoHeight = logoWidth / 1.71;

    return (
        <AppIntroSlider
            renderItem={renderSlide}
            data={slides}
            onDone={onDone}
            showSkipButton
            onSkip={onDone}
            skipLabel="Saltar"
            nextLabel="Siguiente"
            doneLabel="Hecho"
        />
    );
}

const styles = StyleSheet.create({
    slide: {
        flex: 1,
    },
    topImage: {
        marginTop: 60,
        marginLeft: 20,
    },
    centerContent: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    centerImage: {
        marginTop:20,
        marginBottom: 10,
        width: 250,
        height: 250,
    },
    text: {
        fontSize: 18,
        textAlign: "justify",
        paddingHorizontal: 40,
        color: '#FFF',
        fontFamily: 'Adlinnaka-BoldDemo',
       
    },
    text2:{
        fontSize: 16,
        textAlign: "justify",
        paddingHorizontal: 40,
        color: '#FFF',
        fontFamily: 'Adlinnaka-BoldDemo',
        marginBottom:125,
    },
    linea: {
        width: '80%',
        marginTop: 5,
        alignItems: 'center',
    },
    lineImage: {
        width: '100%',
        height: 24,
    },
    
    logos: {
        flexDirection: "row", // Alinea los elementos en una fila
         // Ajusta el espacio entre los elementos
        alignItems: "center", // Alinea los elementos verticalmente en el centro
        marginTop: 20,
        padding:10, // Ajusta el margen superior según sea necesario
      },
      logosGDL2: {
        width: '50%', // Ajusta el ancho de las imágenes según sea necesario
        height: 100, // Ajusta la altura de las imágenes según sea necesario
        resizeMode: "contain",
        marginRight:30, // Asegura que la imagen se ajuste bien dentro del contenedor
      },
      logosGDL3: {
          width: '10%', // Ajusta el ancho de las imágenes según sea necesario
          height: 100, // Ajusta la altura de las imágenes según sea necesario
          resizeMode: "contain", // Asegura que la imagen se ajuste bien dentro del contenedor
        },
        logosGDL1: {
          width: 100, // Ajusta el ancho de las imágenes según sea necesario
          height: 100, // Ajusta la altura de las imágenes según sea necesario
          resizeMode: "contain", // Asegura que la imagen se ajuste bien dentro del contenedor
        },
    
});

export default SliderScreenView;
