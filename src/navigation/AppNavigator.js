import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";

// Pantallas
import HomeScreen from "../screens/HomeScreen";
import ProductListScreen from "../screens/ProductListScreen";
import ProductDetailScreen from "../screens/ProductDetailScreen";
import ProfileScreen from "../screens/ProfileScreen";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Stack para la navegación de las secciones informativas
function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="HomeScreen" 
        component={HomeScreen} 
        options={{ title: "Inicio" }} 
      />
      <Stack.Screen 
        name="ProductListScreen" 
        component={ProductListScreen} 
        options={{ title: "Secciones" }} 
      />
      <Stack.Screen 
        name="ProductDetail" 
        component={ProductDetailScreen} 
        options={{ title: "Detalle Informativo" }} 
      />
    </Stack.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "Inicio") {
            iconName = "home";
          } else if (route.name === "Equipo") {
            iconName = "people"; // Icono de grupo para el equipo
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#a71515", 
        tabBarInactiveTintColor: "gray",
        tabBarStyle: { paddingBottom: 5, height: 60 },
      })}
    >
      <Tab.Screen 
        name="Inicio" 
        component={HomeStack} 
        options={{ headerShown: false }} 
      />
      
      <Tab.Screen 
        name="Equipo" 
        component={ProfileScreen} 
        options={{ 
          title: "Equipo de Trabajo",
          headerTitle: "Información del Equipo" 
        }} 
      />
    </Tab.Navigator>
  );
}