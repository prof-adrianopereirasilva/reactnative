import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
} from "react-native";
import { Picker } from "@react-native-picker/picker";

export default function Conversor() {
  const [valor, setValor] = useState("");
  const [de, setDe] = useState("USD");
  const [para, setPara] = useState("BRL");
  const [resultado, setResultado] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function converter() {
  if (!valor) return;
  setLoading(true);
  setResultado(null);
  try {
    const url = `https://api.frankfurter.app/latest?amount=${valor}&from=${de}&to=${para}`;
    const resp = await fetch(url);
    const dados = await resp.json();
    if (dados?.rates && dados.rates[para]) {
      setResultado(
        `${valor} ${de} = ${dados.rates[para].toFixed(2)} ${para}`
      );
    } else {
      setResultado("Não foi possível converter (verifique as moedas).");
    }
  } catch (e: any) {
    setResultado("Erro: " + e.message);
  } finally {
    setLoading(false);
  }
}

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <Text style={styles.titulo}>Conversor de Moedas 💱</Text>

      <View style={styles.row}>
        <View style={styles.col}>
          <Text style={styles.label}>Valor</Text>
          <TextInput
            style={styles.input}
            placeholder="Ex.: 100"
            keyboardType="numeric"
            value={valor}
            onChangeText={setValor}
          />
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.col}>
          <Text style={styles.label}>De</Text>
          <Picker selectedValue={de} onValueChange={(v) => setDe(v)}>
            <Picker.Item label="USD - Dólar" value="USD" />
            <Picker.Item label="BRL - Real" value="BRL" />
            <Picker.Item label="EUR - Euro" value="EUR" />
            <Picker.Item label="GBP - Libra" value="GBP" />
            <Picker.Item label="ARS - Peso Argentino" value="ARS" />
          </Picker>
        </View>
        <View style={styles.col}>
          <Text style={styles.label}>Para</Text>
          <Picker selectedValue={para} onValueChange={(v) => setPara(v)}>
            <Picker.Item label="USD - Dólar" value="USD" />
            <Picker.Item label="BRL - Real" value="BRL" />
            <Picker.Item label="EUR - Euro" value="EUR" />
            <Picker.Item label="GBP - Libra" value="GBP" />
            <Picker.Item label="ARS - Peso Argentino" value="ARS" />
          </Picker>
        </View>
      </View>

      <Button
        title={loading ? "Convertendo..." : "Converter"}
        onPress={converter}
        disabled={loading}
      />

      {loading && <ActivityIndicator size="large" color="#2563eb" style={{ marginTop: 10 }} />}

      {resultado && <Text style={styles.result}>{resultado}</Text>}
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20, gap: 14 },
  titulo: {
    fontSize: 22,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 10,
  },
  row: { flexDirection: "row", gap: 10, marginBottom: 10 },
  col: { flex: 1 },
  label: { marginBottom: 6, color: "#64748b", fontWeight: "500" },
  input: {
    borderWidth: 1,
    borderColor: "#cbd5e1",
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#fff",
  },
  result: {
    marginTop: 18,
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
  },
});
