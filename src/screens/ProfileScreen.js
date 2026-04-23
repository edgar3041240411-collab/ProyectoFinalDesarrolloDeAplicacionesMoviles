import React from "react";
import { View, Text, StyleSheet, SafeAreaView, Image, ScrollView } from "react-native";

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.profileCard}>
          {/* Contenedor de Imagen de Perfil */}
          <View style={styles.imageContainer}>
            <Image
              source={require("../../assets/pro.jpeg")} 
              style={styles.image}
            />
            <View style={styles.badge}>
              <Text style={styles.badgeText}>3bbq y 1ranch</Text>
            </View>
          </View>

          <View style={styles.infoBox}>
            <Text style={styles.label}>Integrantes y Roles</Text>
            
            <Text style={styles.value}>Caballero López Edgar Alfredo</Text>
            <Text style={styles.role}>Electrónica (Circuito)</Text>

            <Text style={styles.value}>Rojas Rodriguez Angel Mauricio</Text>
            <Text style={styles.role}>Diseño y Pruebas (Diseño y estructura)</Text>

            <Text style={styles.value}>Zapata Villarreal Pedro Durango</Text>
            <Text style={styles.role}>Programador (Controlador)</Text>

            <Text style={styles.value}>Díaz Hernández Eduardo</Text>
            <Text style={styles.role}>Mecánica (Estructura)</Text>
            
            <View style={styles.divider} />
            
            <Text style={styles.label}>Proyecto</Text>
            <Text style={styles.value}>Carrito Seguidor de Lineas</Text>

            <View style={styles.divider} />
            
            <View style={styles.divider} />
            
            <Text style={styles.label}>Asignatura</Text>
            <Text style={styles.value}>Desarrollo de Apps Móviles</Text>
          </View>
        </View>

        <Text style={styles.footerText}>Proyecto Final • 5°A</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#f8f9fa', 
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
  },
  profileCard: { 
    backgroundColor: '#fff', 
    padding: 25, 
    borderRadius: 25, 
    elevation: 8, 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    borderTopWidth: 5,
    borderTopColor: '#a71515', 
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 20,
    marginTop: -10
  },
  image: { 
    width: 130, 
    height: 130, 
    borderRadius: 65,
    borderWidth: 4,
    borderColor: '#f0f0f0',
    backgroundColor: '#eee'
  },
  badge: {
    backgroundColor: '#a71515',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 10,
    marginTop: -15,
  },
  badgeText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
  },
  infoBox: {
    marginTop: 10,
  },
  label: { 
    fontSize: 11, 
    color: '#a71515', 
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 8 
  },
  value: { 
    fontSize: 16, 
    fontWeight: '600', 
    color: '#2d3436', 
    marginBottom: 2 
  },
  role: {
    fontSize: 13,
    color: '#636e72',
    fontStyle: 'italic',
    marginBottom: 12
  },
  divider: { 
    height: 1, 
    backgroundColor: '#f1f1f1', 
    marginBottom: 12 
  },
  footerText: {
    textAlign: 'center',
    marginTop: 25,
    color: '#bdc3c7',
    fontSize: 12,
    fontWeight: '500'
  }
});