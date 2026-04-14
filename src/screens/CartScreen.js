import React, { useLayoutEffect } from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons"; 
import { useCart } from "../navigation/AppNavigator";

export default function CartScreen({ navigation }) {
  const { cart, getTotal, clearCart, removeFromCart } = useCart();

  // Configuración de la flecha y el nuevo título personalizado
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Regresar al insumo", // Cambio de nombre solicitado
      headerLeft: () => (
        <TouchableOpacity 
          style={{ marginLeft: 15 }} 
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={28} color="#333" />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <FlatList
        data={cart}
        keyExtractor={(item, index) => `${item.name}-${index}`}
        renderItem={({ item, index }) => (
          <View style={styles.item}>
            <View style={styles.productRow}>
              {item.image && (
                <Image 
                  source={typeof item.image === 'string' ? { uri: item.image } : item.image} 
                  style={styles.productImage} 
                />
              )}
              <View style={styles.itemInfo}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemPrice}>${item.price}</Text>
              </View>
            </View>
            
            <TouchableOpacity 
              style={styles.removeBtn} 
              onPress={() => removeFromCart(index)}
              activeOpacity={0.7}
            >
              <Text style={styles.removeBtnText}>Eliminar</Text>
            </TouchableOpacity>
          </View>
        )}
        ListEmptyComponent={<Text style={styles.empty}>Tu carrito está vacío</Text>}
      />
      
      {cart.length > 0 && (
        <View style={styles.footer}>
          <Text style={styles.total}>Total: ${getTotal().toFixed(2)}</Text>
          <TouchableOpacity 
            style={styles.btn} 
            onPress={() => clearCart()}
          >
            <Text style={styles.btnText}>VACIAR TODO EL CARRITO</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 20 },
  item: { 
    flexDirection: "row", 
    justifyContent: "space-between", 
    alignItems: "center", 
    paddingVertical: 12, 
    borderBottomWidth: 1, 
    borderColor: "#f0f0f0" 
  },
  productRow: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1
  },
  productImage: {
    width: 55,
    height: 55,
    borderRadius: 8,
    marginRight: 12,
    backgroundColor: "#f9f9f9"
  },
  itemInfo: { flex: 1 },
  itemName: { fontSize: 16, fontWeight: "bold", color: "#333" },
  itemPrice: { fontSize: 14, color: "#2ecc71", marginTop: 4 },
  removeBtn: { 
    backgroundColor: "#e74c3c", 
    paddingVertical: 8, 
    paddingHorizontal: 12, 
    borderRadius: 8 
  },
  removeBtnText: { color: "#fff", fontSize: 12, fontWeight: "bold" },
  footer: { borderTopWidth: 2, borderColor: "#eee", paddingTop: 20, marginTop: 10 },
  total: { fontSize: 22, fontWeight: "bold", textAlign: "right", marginBottom: 15 },
  btn: { backgroundColor: "#1a1a1a", padding: 15, borderRadius: 10, alignItems: "center" },
  btnText: { color: "#fff", fontWeight: "bold" },
  empty: { textAlign: "center", marginTop: 50, color: "#bdc3c7", fontSize: 16 }
});