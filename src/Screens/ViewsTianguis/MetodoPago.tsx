import React from 'react';
import { View, StyleSheet, Dimensions, Image, TouchableOpacity, Text, Alert } from 'react-native';

const { width, height } = Dimensions.get("window");

const PaymentMethod = ({ name, cardNumber, expDate, isSelected, onSelect }) => {
  return (
    <TouchableOpacity style={[styles.paymentMethod, isSelected && styles.paymentMethodSelected]} onPress={onSelect}>
      <View style={[styles.radioButton, isSelected && styles.radioButtonSelected]}>
        {isSelected && <View style={styles.radioButtonInner} />}
      </View>
      <View style={styles.cardDetails}>
        <Text style={styles.cardName}>{name}</Text>
        <Text style={styles.cardNumber}>**** {cardNumber}</Text>
        <Text style={styles.expDate}>EXP {expDate}</Text>
      </View>
    </TouchableOpacity>
  );
};

export const MetodoPago = ({ navigation }) => {
  const [selectedMethod, setSelectedMethod] = React.useState('DOMINIC PRICE');

  const handleProceed = () => {
    Alert.alert(
      'Confirmar pago',
      '¿Está seguro que quiere continuar?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Aceptar',
          onPress: () => {
            Alert.alert('Éxito', 'Pago generado con éxito', [
              {
                text: 'OK',
                onPress: () => navigation.navigate('Main',{ userType: 'user' }),
              },
            ]);
          },
        },
      ]
    );
  };

  return (
    <View>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../../../assets/LOGOTIPO-02.png")} />
      </View>
      <View style={styles.paymentMethodsContainer}>
        <PaymentMethod
          name="JOHN DOE"
          cardNumber="4587"
          expDate="11/2025"
          isSelected={selectedMethod === 'JOHN DOE'}
          onSelect={() => setSelectedMethod('JOHN DOE')}
        />
        <PaymentMethod
          name="DOMINIC PRICE"
          cardNumber="5670"
          expDate="11/2025"
          isSelected={selectedMethod === 'DOMINIC PRICE'}
          onSelect={() => setSelectedMethod('DOMINIC PRICE')}
        />
        <TouchableOpacity style={styles.addCardButton}>
          <Text style={styles.addCardText}>+ Agrega tarjeta</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.proceedButton} onPress={handleProceed}>
          <Text style={styles.proceedButtonText}>Proceder al Pago</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  logoContainer: {
    alignItems: "center",
    backgroundColor: "#CC9F53",
    padding: 10,
    width: '100%',  // Abarca toda la pantalla a lo ancho
  },
  logo: {
    width: '80%',  // Ajuste para mantener proporciones
    height: height * 0.2,
    resizeMode: "contain",
  },
  paymentMethodsContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  paymentMethod: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  paymentMethodSelected: {
    borderColor: '#CC9F53',
    backgroundColor: '#fdf1e3',
  },
  radioButton: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  radioButtonSelected: {
    borderColor: '#CC9F53',
  },
  radioButtonInner: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: '#CC9F53',
  },
  cardDetails: {
    flex: 1,
  },
  cardName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cardNumber: {
    fontSize: 14,
    color: '#666',
  },
  expDate: {
    fontSize: 14,
    color: '#666',
  },
  addCardButton: {
    marginTop: 20,
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#CC9F53',
    backgroundColor: '#fff',
  },
  addCardText: {
    fontSize: 16,
    color: '#CC9F53',
  },
  proceedButton: {
    marginTop: 10,
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: '#CC9F53',
  },
  proceedButtonText: {
    fontSize: 16,
    color: '#fff',
  },
});
