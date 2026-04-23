import React from "react";
import { View, Text, FlatList, StyleSheet, SafeAreaView, StatusBar } from "react-native";
import ProductCard from "../components/ProductCard";

export default function ProductListScreen({ navigation }) {
  const products = [
    { 
      id: "1", 
      name: "1. Experiencia de Bienvenida", 
      price: "Acceso Principal", 
      image: "https://th.bing.com/th/id/OIP.kC8UzXINNQQgCtmWp7JdWQHaHa?w=209&h=183&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3", 
      description: `¿El Primer Vistazo al Proyecto?\n\nEsta pantalla no es solo un inicio, es la puerta de entrada a una solución tecnológica de vanguardia. Representa el puente entre el usuario y el "Carrito Seguidor de Línea", estableciendo desde el segundo uno la identidad visual y el profesionalismo de nuestro equipo de desarrollo.\n\n¿Navegación Sin Esfuerzo?\n\nHemos diseñado una interfaz donde la claridad es prioridad. Con accesos directos y un entorno visualmente equilibrado, el usuario puede explorar cada rincón del proyecto con una experiencia intuitiva.` 
    },
    { 
      id: "2", 
      name: "2. Mentes Detrás del Código", 
      price: "El Equipo", 
      image: "https://th.bing.com/th/id/OIP.RpoMANihIIWLmbGKrlEWIQHaEz?w=274&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3", 
      description: `¿Quiénes Hacen Esto Posible?\n\nDetrás de cada línea de código y cada conexión eléctrica, hay un equipo comprometido con la excelencia académica y técnica:\n\n• Edgar Alfredo Caballero López\n• Ángel Mauricio Rojas Rodríguez\n• Pedro Durango Zapata Villarreal\n• Eduardo Díaz Hernández\n\n¿Sinergia y Colaboración?\n\nNo solo ensamblamos piezas; integramos conocimientos. Cada miembro ha aportado una pieza clave del rompecabezas, demostrando que el éxito del proyecto reside en la coordinación y el talento compartido.` 
    },
    { 
      id: "3", 
      name: "3. El Corazón del Proyecto", 
      price: "Visión General", 
      image: "https://e66.psgsm.net/t4b.com/p/865696/480/haitronic-4wd-robot-smart-car-2.jpg", 
      description: `¿Qué es lo que estamos construyendo?\n\nImagina un sistema capaz de "sentir" su camino y tomar decisiones en milisegundos. Eso es nuestro carrito: un robot autónomo que desafía la complejidad de la navegación simple, siguiendo trayectorias con una precisión que imita los sistemas industriales modernos.\n\n¿Por qué es Relevante?\n\nEste no es solo un ejercicio escolar; es una simulación de los AGVs (Vehículos de Guiado Automático) que mueven el mundo en las fábricas del futuro.` 
    },
    { 
      id: "4", 
      name: "4. ADN Tecnológico: Materiales", 
      price: "Hardware", 
      image: require('../../assets/pro2.jpeg'), 
      description: `¿De qué está hecho un Robot?\n\nCada tornillo y cada sensor tiene una razón de ser. Aquí desglosamos la anatomía de nuestro seguidor de línea:

ensa9 (La Armadura): Chasis robusto que brinda la estabilidad necesaria para maniobras rápidas.

https://down-tw.img.susercontent.com/file/8095cb6d759b99e070b8426fb9dbb34e_tn (Músculos de Tracción): Motores DC que transforman la energía pura en movimiento preciso.

ensa2 (Ojos Infrarrojos): Sensores que interpretan la luz para distinguir el camino de los obstáculos.

ensa6 (El Cerebro): Microcontrolador Arduino, procesando cada señal para dictar el siguiente paso.

ensa1 (Módulo de Potencia): El controlador L298N que gestiona la fuerza enviada a las ruedas.

ensa5 (Energía Vital): Nuestra fuente de poder, el desafío de equilibrar autonomía y peso.

ensa4 (Sistema Nervioso): Cables y ruedas que unifican el hardware en un solo organismo funcional.` 
    },
    { 
      id: "5", 
      name: "5. Magia en Movimiento: Lógica", 
      price: "Funcionamiento", 
      image: "https://tse4.mm.bing.net/th/id/OIP.rmTaug4ZdfwDT_w0Ld1ruAHaEK?w=1200&h=674&rs=1&pid=ImgDetMain&o=7&rm=3", 
      description: `¿Cómo ocurre la "Magia"?\n\nTodo empieza con la luz. Los sensores lanzan ráfagas infrarrojas; si la luz vuelve, hay camino claro; si se absorbe, hemos encontrado la línea. Es un baile constante entre la física y la programación.\n\n¿Inteligencia en Tiempo Real?\n\nEl Arduino no descansa: lee, procesa y actúa. Si el carrito se desvía un milímetro, los motores corrigen el rumbo al instante.` 
    },
    { 
      id: "6", 
      name: "6. Galería de Conquistas", 
      price: "Evidencia", 
      image: require('../../assets/comquista.jpeg'),
      description: `¿El Camino del Desarrollo?\n\nDesde el primer cable suelto hasta la victoria en la pista. Aquí documentamos visualmente el esfuerzo y la evolución de nuestro prototipo.

carroEnsamblado (Resultado Final): La culminación de horas de diseño y montaje.

arquiInterna (Arquitectura Interna): Un vistazo al orden necesario para que la tecnología funcione.

calibra (Afinación): El arte de ajustar los sensores para una detección impecable.` 
    },
    { 
      id: "7", 
      name: "7. Lecciones y Horizontes", 
      price: "Conclusiones", 
      image: "https://th.bing.com/th?q=Icono+Azul+Conclusion&w=120&h=120&c=1&rs=1&qlt=70&o=7&cb=1&dpr=1.3&pid=InlineBlock&rm=3&setlang=es&adlt=moderate&t=1&mw=247", 
      description: `¿Qué nos llevamos de esto?\n\nMás allá de un carrito funcional, nos llevamos el dominio de la electrónica y la resiliencia ante los fallos. Aprendimos que una buena calibración es la clave del éxito.\n\n¿Hacia Dónde Vamos?\n\nEsto es solo el inicio. El futuro apunta a controles PID más suaves y quizás, una integración aún más profunda con sistemas de IA.` 
    },
    { 
      id: "8", 
      name: "8. Ficha Técnica e Institucional", 
      price: "Créditos", 
      image: require('../../assets/confff.jpeg'),
      description: `¿Respaldo Académico?\n\nEste proyecto es el resultado de la materia de Desarrollo de Aplicaciones Móviles y Estructura de Datos.\n\n• Grupo: 5° “A” TI\n• Docente: Ing. Ana Laura Lara Chairez\n• Institución: Universidad Politécnica de Durango\n\nFecha de Entrega: Abril de 2026.` 
    },
  ];

  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.header}>
        <Text style={styles.headerTitle}>SISTEMA AUTÓNOMO: SEGUIDOR DE LÍNEA</Text>
        <Text style={styles.headerSub}>INGENIERÍA • SOFTWARE • HARDWARE</Text>
      </View>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ProductCard {...item} navigation={navigation} />}
        contentContainerStyle={styles.listPadding}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: { flex: 1, backgroundColor: "#F8F9FA" },
  header: { padding: 25, backgroundColor: '#FFFFFF', borderBottomWidth: 1, borderColor: '#EBEEF2', elevation: 4 },
  headerTitle: { fontSize: 16, fontWeight: '900', color: '#1A1A1A', textAlign: 'center', letterSpacing: 1 },
  headerSub: { fontSize: 10, color: '#D63031', fontWeight: 'bold', textAlign: 'center', marginTop: 6, letterSpacing: 2 },
  listPadding: { padding: 15 }
});