import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function ProductCard({ id, name, price, image, description, navigation }) {
  return (
    <View style={styles.card}>
      <TouchableOpacity 
        onPress={() => navigation.navigate("ProductDetail", { id, name, price, image, description })}
      >
        <Image source={{ uri: image }} style={styles.image} />
        <View style={styles.info}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.price}>${price}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: "#fff", borderRadius: 10, marginBottom: 20, elevation: 3, overflow: "hidden", borderWidth: 1, borderColor: "#eee" },
  image: { width: "100%", height: 150 },
  info: { padding: 10 },
  name: { fontSize: 18, fontWeight: "bold" },
  price: { fontSize: 16, color: "#2ecc71", fontWeight: "bold", marginTop: 5 }
});