import React from "react";
import { 
  View, Text, FlatList, StyleSheet, 
  SafeAreaView, Platform 
} from "react-native";
import ProductCard from "../components/ProductCard";

export default function ProductListScreen({ navigation }) {
  const products = [
    { 
      id: "1", 
      name: "Alimento Engorda", 
      price: "580.00", 
      image: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=400", 
      description: "Mezcla premium rica en proteínas para el crecimiento saludable del ganado." 
    },
    { 
      id: "2", 
      name: "Fertilizante", 
      price: "1,250.00", 
      image: "https://images.unsplash.com/photo-1628352081506-83c43123ed6d?w=400", 
      description: "Fertilizante orgánico que fortalece las raíces y mejora el rendimiento del suelo." 
    },
    { 
      id: "3", 
      name: "Semillas", 
      price: "2,400.00", 
      image: "https://images.unsplash.com/photo-1551730459-92db2a308d6a?w=400", 
      description: "Semillas certificadas con alta tasa de germinación para climas variables." 
    },
    { 
      id: "4", 
      name: "Herramientas", 
      price: "890.00", 
      image: "https://images.unsplash.com/photo-1589923188900-85dae523342b?w=400", 
      description: "Kit de herramientas profesionales de acero inoxidable con mangos ergonómicos." 
    },
    { 
      id: "5", 
      name: "Riego", 
      price: "3,100.00", 
      image: "https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?w=400", 
      description: "Sistema de riego por goteo inteligente para optimizar el consumo de agua." 
    },
    { 
      id: "6", 
      name: "Manguera reforzada 50m", 
      price: "650.00", 
      image: "https://th.bing.com/th/id/OIP.ihZdWo-OjCTp8lUYIhiHMQHaEh?w=300&h=183&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3", 
      description: "Manguera de alta resistencia con protección contra torceduras y rayos UV." 
    },
    { 
      id: "7", 
      name: "Galón de 50 litros", 
      price: "420.00", 
      // Nueva imagen funcional para el galón/contenedor
      image: "https://th.bing.com/th/id/OIP.qRZ74o-VfUTwzI5rwlFyAQHaHa?w=195&h=193&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3", 
      description: "Contenedor industrial de alta densidad para almacenamiento de insumos líquidos." 
    }
  ];

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.header}>
        <Text style={styles.title}>Insumos MAAC</Text>
        <Text style={styles.estudiante}>Caballero López Edgar Alfredo</Text>
      </View>

      <View style={styles.listWrapper}>
        <FlatList
          data={products}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ProductCard 
              {...item} 
              navigation={navigation} 
            />
          )}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: { 
    flex: 1, 
    backgroundColor: "#fff",
    height: Platform.OS === 'web' ? '100vh' : '100%' 
  },
  header: { 
    padding: 20, 
    alignItems: 'center', 
    borderBottomWidth: 1, 
    borderColor: '#eee',
    backgroundColor: '#fff'
  },
  title: { fontSize: 22, fontWeight: 'bold', color: '#333' },
  estudiante: { fontSize: 13, color: '#a71515', fontWeight: '600', marginTop: 4 },
  listWrapper: { flex: 1 },
  scrollContent: { padding: 15, paddingBottom: 30 }
});