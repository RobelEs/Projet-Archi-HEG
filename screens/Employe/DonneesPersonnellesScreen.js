// DonnéesPersonnellesScreen.js
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

const DonneesPersonnellesScreen = () => {
  const [phone, setPhone] = useState("0123456789");
  const [email, setEmail] = useState("exemple@email.com");
  const [address, setAddress] = useState("123 Rue Exemple, Ville");

  const firstName = "John";
  const lastName = "Doe";
  const birthDate = "01/01/1990";

  const handleSave = () => {
    alert("Données enregistrées !");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mes informations personnelles</Text>

      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Nom</Text>
        <Text style={styles.infoText}>{lastName}</Text>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Prénom</Text>
        <Text style={styles.infoText}>{firstName}</Text>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Date de naissance</Text>
        <Text style={styles.infoText}>{birthDate}</Text>
      </View>

      {/* Modifiables */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Numéro de téléphone</Text>
        <TextInput
          style={styles.input}
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Adresse email</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Adresse</Text>
        <TextInput
          style={styles.input}
          value={address}
          onChangeText={setAddress}
        />
      </View>

      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Sauvegarder</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  infoContainer: {
    marginBottom: 15,
  },
  infoLabel: {
    fontSize: 18,
    color: "#555",
  },
  infoText: {
    fontSize: 16,
    color: "#777",
    marginTop: 5,
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 18,
    color: "#555",
  },
  input: {
    height: 45,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    fontSize: 16,
    marginTop: 5,
  },
  saveButton: {
    backgroundColor: "#27AE60",
    paddingVertical: 12,
    borderRadius: 10,
    marginTop: 30,
    alignItems: "center",
  },
  saveButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default DonneesPersonnellesScreen;
