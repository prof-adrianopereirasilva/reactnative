import { View, Text, StyleSheet } from "react-native";

export default function Explore() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Explore</Text>
      <Text style={styles.text}>Esta é só uma aba exemplo.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center", gap: 8 },
  title: { fontSize: 22, fontWeight: "600" },
  text: { color: "#64748b" }
});