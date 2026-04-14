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
              source={require("../../assets/logo.png")} 
              style={styles.image}
            />
            <View style={styles.badge}>
              <Text style={styles.badgeText}>ESTUDIANTE</Text>
            </View>
          </View>

          <View style={styles.infoBox}>
            <Text style={styles.label}>Nombre del Estudiante</Text>
            <Text style={styles.value}>Caballero López Edgar Alfredo</Text>
            
            <View style={styles.divider} />
            
            <Text style={styles.label}>Proyecto</Text>
            <Text style={styles.value}>Insumos MAAC</Text>

            <View style={styles.divider} />

            <Text style={styles.label}>Correo Electrónico</Text>
            <Text style={styles.value}>edgar30413210@utd.edu.mx</Text>
            
            <View style={styles.divider} />
            
            <Text style={styles.label}>Asignatura</Text>
            <Text style={styles.value}>Desarrollo de Apps Móviles</Text>
          </View>
        </View>

        <Text style={styles.footerText}>Examen Parcial 3 • 5°A</Text>
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
    borderTopColor: '#a71515', // Borde superior con tu color de marca
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
    marginBottom: 4 
  },
  value: { 
    fontSize: 17, 
    fontWeight: '600', 
    color: '#2d3436', 
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