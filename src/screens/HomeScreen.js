import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>MAAC - Insumos para el Campo</Text>
      
      {/* Tu logo desde la carpeta assets */}
      <Image 
        source={require("../../assets/logo.png")} 
        style={styles.logo} 
        resizeMode="contain" 
      />
      
      {/* Único botón de acción: Ver Catálogo */}
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate("ProductListScreen")}
      >
        <Text style={styles.buttonText}>Ver Catálogo</Text>
      </TouchableOpacity>

      {/* El botón de "Ir al Carrito" se eliminó para evitar redundancia con los Tabs */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center", 
    backgroundColor: "#fff",
    paddingHorizontal: 20 
  },
  title: { 
    fontSize: 24, 
    fontWeight: "bold", 
    marginBottom: 20,
    color: "#333",
    textAlign: "center"
  },
  logo: { 
    width: 250, 
    height: 250, 
    marginBottom: 40 
  },
  button: { 
    backgroundColor: "#a71515", // Tu color rojo característico
    padding: 18, 
    borderRadius: 12, 
    width: "85%", 
    alignItems: "center",
    elevation: 4, // Sombra para Android
    shadowColor: "#000", // Sombra para iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5
  },
  buttonText: { 
    color: "#fff", 
    fontSize: 18, 
    fontWeight: "bold",
    letterSpacing: 1
  }
});