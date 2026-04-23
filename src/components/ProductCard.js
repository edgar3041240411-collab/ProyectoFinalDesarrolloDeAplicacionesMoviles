import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function ProductCard({ name, price, image, description, navigation }) {
  return (
    <TouchableOpacity 
      style={styles.card} 
      onPress={() => navigation.navigate("ProductDetail", { name, price, image, description })}
    >
      <Image 
        source={typeof image === 'string' ? { uri: image } : image} 
        style={styles.image} 
      />
      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>
        
        {/* CORRECCIÓN: Solo mostramos el texto si existe, sin el signo de $ */}
        {price ? <Text style={styles.price}>{price}</Text> : null}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: { 
    backgroundColor: "#fff", 
    borderRadius: 15, 
    marginBottom: 20, 
    overflow: "hidden", 
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  image: { 
    width: "100%", 
    height: 180, 
    resizeMode: "cover" 
  },
  info: { 
    padding: 15 
  },
  name: { 
    fontSize: 18, 
    fontWeight: "bold", 
    color: "#2d3436" 
  },
  price: { 
    fontSize: 14, 
    color: "#2ecc71", // El verde que mencionas
    fontWeight: "bold", 
    marginTop: 5 
  },
});