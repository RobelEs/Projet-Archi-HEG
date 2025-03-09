import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const DonneesPersonnellesScreen = () => {
  const navigation = useNavigation(); // Pour la navigation

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

      {/* Informations non modifiables */}
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

      {/* Champs modifiables */}
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

      {/* Bouton de sauvegarde */}
      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Sauvegarder</Text>
      </TouchableOpacity>

      {/* Bouton Voir mes horaires */}
      <TouchableOpacity
        style={styles.horairesButton}
        onPress={() => navigation.navigate("Horaires")}
      >
        <Text style={styles.horairesButtonText}>Voir mes horaires</Text>
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
    textAlign: "center",
  },
  infoContainer: {
    marginBottom: 15,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  infoLabel: {
    fontSize: 18,
    color: "#555",
  },
  infoText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
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
    borderRadius: 8,
    paddingLeft: 10,
    fontSize: 16,
    marginTop: 5,
    backgroundColor: "#fff",
  },
  saveButton: {
    backgroundColor: "#27AE60",
    paddingVertical: 12,
    borderRadius: 10,
    marginTop: 20,
    alignItems: "center",
  },
  saveButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  horairesButton: {
    backgroundColor: "#3498db",
    paddingVertical: 12,
    borderRadius: 10,
    marginTop: 15,
    alignItems: "center",
  },
  horairesButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default DonneesPersonnellesScreen;
