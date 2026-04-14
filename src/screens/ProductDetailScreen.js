import React from "react";
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Alert } from "react-native";
import { useCart } from "../navigation/AppNavigator";

export default function ProductDetailScreen({ route, navigation }) {
  // Aseguramos la extracción de datos de los parámetros de la ruta [cite: 7]
  const { name, price, image, description } = route.params || {};
  const { addToCart } = useCart();

  const handleAdd = () => {
    if (!name) return; // Evita agregar objetos vacíos si no hay datos
    
    addToCart({ name, price, image });
    
    // Mejora visual: Feedback claro al usuario antes de navegar [cite: 44]
    Alert.alert("Éxito", `${name} se añadió al carrito.`);
    
    // IMPORTANTE: Cambiamos "Cart" por "Carrito" para coincidir con el Tab.Screen en AppNavigator.js
    navigation.navigate("Carrito");
  };

  return (
    <ScrollView style={styles.container}>
      {/* Soporte para imágenes locales (require) o URLs (uri)  */}
      {image && (
        <Image 
          source={typeof image === 'string' ? { uri: image } : image} 
          style={styles.image} 
        />
      )}
      
      <View style={styles.info}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.price}>${price}</Text>
        
        <View style={styles.line} />
        
        <Text style={styles.label}>Descripción:</Text>
        <Text style={styles.desc}>
          {description || "Insumo de alta calidad seleccionado para optimizar los resultados en el sector agropecuario."}
        </Text>
        
        <TouchableOpacity style={styles.btn} onPress={handleAdd}>
          <Text style={styles.btnText}>AGREGAR AL CARRITO</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  image: { width: "100%", height: 320, resizeMode: 'cover' },
  info: { padding: 25 },
  title: { fontSize: 28, fontWeight: "bold", color: "#2d3436" },
  price: { fontSize: 26, color: "#2ecc71", fontWeight: "bold", marginVertical: 10 },
  line: { height: 2, backgroundColor: "#f1f1f1", marginVertical: 15 },
  label: { fontSize: 12, color: "#a71515", fontWeight: "bold", textTransform: "uppercase", marginBottom: 5 },
  desc: { fontSize: 16, color: "#636e72", lineHeight: 24, marginBottom: 20 },
  btn: { 
    backgroundColor: "#a71515", 
    padding: 18, 
    borderRadius: 12, 
    marginTop: 10, 
    alignItems: "center",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4
  },
  btnText: { color: "#fff", fontSize: 18, fontWeight: "bold", letterSpacing: 1 }
});