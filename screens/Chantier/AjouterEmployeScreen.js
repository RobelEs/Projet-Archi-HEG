// screens/AjouterEmployeScreen.js
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { createEmploye } from "../../api";

const AjouterEmployeScreen = ({ navigation }) => {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [adresse, setAdresse] = useState("");
  const [login, setLogin] = useState("");
  const [mdp, setMdp] = useState("");

  const handleSubmit = async () => {
    try {
      await createEmploye({
        name: `${prenom} ${nom}`.trim(),
        email: login,
        password: mdp,
        adresse,
      });
      Alert.alert("Succès", "Employé ajouté", [
        { text: "OK", onPress: () => navigation.goBack() },
      ]);
    } catch (e) {
      Alert.alert("Erreur", e.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ajouter un Employé</Text>

      <TextInput
        style={styles.input}
        placeholder="Nom"
        value={nom}
        onChangeText={setNom}
      />
      <TextInput
        style={styles.input}
        placeholder="Prénom"
        value={prenom}
        onChangeText={setPrenom}
      />
      <TextInput
        style={styles.input}
        placeholder="Adresse"
        value={adresse}
        onChangeText={setAdresse}
      />
      <TextInput
        style={styles.input}
        placeholder="Login"
        value={login}
        onChangeText={setLogin}
      />
      <TextInput
        style={styles.input}
        placeholder="Mot de passe"
        value={mdp}
        onChangeText={setMdp}
        secureTextEntry
      />

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitText}>Enregistrer</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f6f9",
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#2c3e50",
  },
  input: {
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 15,
    paddingLeft: 10,
    fontSize: 16,
  },
  submitButton: {
    backgroundColor: "#3498db",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  submitText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default AjouterEmployeScreen;
