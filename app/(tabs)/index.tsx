import { Link } from "expo-router";
import { View, Text, StyleSheet } from "react-native";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo 👋</Text>
      <Text style={styles.text}>Abra a aba Conversor abaixo ou toque aqui:</Text>
      <Link href="/conversor" style={styles.link}>Ir para Conversor</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center", gap: 10 },
  title: { fontSize: 24, fontWeight: "600" },
  text: { color: "#475569" },
  link: { color: "#2563eb", fontWeight: "600", fontSize: 16 }
});