
import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function TextInputKullanimi() {
  const [name, setName] = useState("");

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Name"
        placeholderTextColor={"red"}
        autoCapitalize="none"
        multiline
        value={name}
        onChangeText={(text) => setName(text)}
        style={{ width: 200, height: 200, borderWidth: 2, padding: 15 }}
      />

      <Text style={{ fontSize: 30, marginTop: 20 }}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});