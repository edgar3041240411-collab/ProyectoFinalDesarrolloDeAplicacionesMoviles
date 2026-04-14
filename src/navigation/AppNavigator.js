import React, { createContext, useState, useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "../screens/HomeScreen";
import ProductListScreen from "../screens/ProductListScreen";
import ProductDetailScreen from "../screens/ProductDetailScreen";
import CartScreen from "../screens/CartScreen";
import ProfileScreen from "../screens/ProfileScreen";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  
  const addToCart = (product) => setCart((prev) => [...prev, product]);
  const clearCart = () => setCart([]);

  // ELIMINACIÓN POR ÍNDICE (RESTA GARANTIZADA)
  const removeFromCart = (indexToRemove) => {
    setCart((currentCart) => {
      const newCart = [...currentCart]; 
      newCart.splice(indexToRemove, 1); 
      return newCart; 
    });
  };

  // SUMA CORREGIDA: Elimina TODAS las comas de CUALQUIER precio
  const getTotal = () => {
    return cart.reduce((sum, item) => {
      // String(item.price).replace(/,/g, '') quita TODAS las comas (ej: "1,250.00" -> "1250.00")
      const cleanPrice = String(item.price || "0").replace(/,/g, '').replace(/[^0-9.]/g, '');
      const priceValue = parseFloat(cleanPrice) || 0;
      return sum + priceValue;
    }, 0);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, clearCart, getTotal, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ title: "Inicio" }} />
      <Stack.Screen name="ProductListScreen" component={ProductListScreen} options={{ title: "Productos" }} />
      <Stack.Screen name="ProductDetail" component={ProductDetailScreen} options={{ title: "Detalle" }} />
    </Stack.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <CartProvider>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName = route.name === "Inicio" ? "home" : route.name === "Carrito" ? "cart" : "person";
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#a71515", 
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Inicio" component={HomeStack} options={{ headerShown: false }} />
        <Tab.Screen name="Carrito" component={CartScreen} options={{ title: "Mi Carrito" }} />
        <Tab.Screen name="Perfil" component={ProfileScreen} options={{ title: "Mi Perfil" }} />
      </Tab.Navigator>
    </CartProvider>
  );
}