import React from "react";
import { View, Text, Image, ScrollView, StyleSheet, SafeAreaView } from "react-native";

export default function ProductDetailScreen({ route }) {
  const { name, description, image } = route.params;

  // Mapa de imágenes locales corregido según tus archivos actuales
  const imageMap = {
    carroEnsamblado: require("../../assets/carroEnsamblado.jpeg"),
    ensa1: require("../../assets/ensa1.png"),
    ensa2: require("../../assets/ensa2.png"),
    ensa3: require("../../assets/ensa3.png"),
    ensa4: require("../../assets/ensa4.png"),
    ensa5: require("../../assets/ensa5.png"),
    ensa6: require("../../assets/ensa6.png"),
    ensa7: require("../../assets/ensa7.png"),
    ensa8: require("../../assets/ensa8.png"),
    ensa9: require("../../assets/ensa9.png"),
    arquiInterna: require("../../assets/arquiInterna.png"), // Solo se cambió esta línea
    cableado2: require("../../assets/cableado2.jpeg"),
    calibra: require("../../assets/calibra.jpeg"),
    "confff.jpeg": require("../../assets/confff.jpeg"),
  };

  const renderContent = () => {
    return description.split("\n\n").map((section, index) => {
      // Renderizado de subtítulos atractivos
      if (section.startsWith("¿")) {
        return <Text key={index} style={styles.impactTitle}>{section}</Text>;
      }

      // Regex mejorada para detectar si el inicio es una URL o una clave del mapa local
      const imageMatch = section.match(/^(https?:\/\/[\S]+|[\w.-]+)\s*\((.*?)\):\s*([\s\S]*)/);
      
      if (imageMatch) {
        const [_, imgSource, label, info] = imageMatch;
        const isUrl = imgSource.startsWith("http");

        return (
          <View key={index} style={styles.featureCard}>
            <Text style={styles.bodyText}>
              <Text style={styles.highlight}>({label}):</Text> {info}
            </Text>
            {/* Decide si cargar de internet o de la carpeta assets */}
            <Image 
              source={isUrl ? { uri: imgSource } : imageMap[imgSource]} 
              style={styles.featureImage} 
            />
          </View>
        );
      }

      return <Text key={index} style={styles.bodyText}>{section}</Text>;
    });
  };

  return (
    <SafeAreaView style={styles.mainBox}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Imagen principal de la sección */}
        <Image 
          source={typeof image === "string" ? { uri: image } : image} 
          style={styles.hero} 
        />
        
        <View style={styles.contentContainer}>
          <Text style={styles.topName}>{name}</Text>
          <View style={styles.accentLine} />
          
          {renderContent()}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainBox: { flex: 1, backgroundColor: "#FFF" },
  hero: { width: "100%", height: 260, resizeMode: "cover" },
  contentContainer: { padding: 25 },
  topName: { fontSize: 26, fontWeight: "900", color: "#2D3436" },
  accentLine: { height: 4, width: 40, backgroundColor: "#D63031", marginVertical: 15, borderRadius: 2 },
  impactTitle: { fontSize: 18, fontWeight: "bold", color: "#D63031", marginTop: 25, marginBottom: 10, lineHeight: 24 },
  bodyText: { fontSize: 16, color: "#4A4A4A", lineHeight: 26, textAlign: 'justify', marginBottom: 12 },
  highlight: { color: "#000", fontWeight: "bold" },
  featureCard: { 
    backgroundColor: "#FDFDFD", 
    padding: 18, 
    borderRadius: 15, 
    marginVertical: 15, 
    borderLeftWidth: 6, 
    borderLeftColor: "#D63031", 
    elevation: 3, 
    shadowColor: "#000", 
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.1, 
    shadowRadius: 4 
  },
  featureImage: { 
    width: "100%", 
    height: 230, 
    borderRadius: 10, 
    marginTop: 15, 
    resizeMode: "contain", 
    backgroundColor: '#FFF' 
  }
});