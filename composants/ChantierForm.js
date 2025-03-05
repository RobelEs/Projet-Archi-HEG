import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";

const ChantierForm = ({ onSubmit }) => {
  const [nom, setNom] = useState("");
  const [statut, setStatut] = useState("");

  const handleSubmit = () => {
    if (!nom || !statut) {
      Alert.alert("Erreur", "Veuillez remplir tous les champs !");
      return;
    }

    onSubmit({ nom, statut });
    setNom("");
    setStatut("");
  };

  return (
    <View style={styles.formContainer}>
      <Text style={styles.title}>Nouveau Chantier</Text>

      <Text style={styles.label}>Nom du Chantier</Text>
      <TextInput
        style={styles.input}
        value={nom}
        onChangeText={setNom}
        placeholder="Nom du chantier"
      />

      <Text style={styles.label}>Statut</Text>
      <TextInput
        style={styles.input}
        value={statut}
        onChangeText={setStatut}
        placeholder="Statut du chantier"
      />

      {/* Bouton personnalisé avec style */}
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Ajouter</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    width: "100%",
    maxWidth: 450, // Limiter la largeur du formulaire
    padding: 20,
    backgroundColor: "#fff", // Fond blanc pour le formulaire
    borderRadius: 10,
    shadowColor: "#000", // Ombre pour donner de la profondeur
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5, // Ombre pour Android
    alignItems: "stretch", // Assurer que les éléments prennent toute la largeur
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#2c3e50", // Couleur sombre pour le titre
  },
  label: {
    fontSize: 16,
    color: "#34495e", // Couleur gris foncé pour les labels
    marginBottom: 5,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: "#fff", // Fond blanc pour les champs de texte
    fontSize: 16,
    color: "#2c3e50", // Texte sombre
  },
  submitButton: {
    backgroundColor: "#3498db", // Bleu pour attirer l'attention sur le bouton
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
    elevation: 3, // Ombre pour effet de surélévation sur Android
    shadowOpacity: 0.1, // Ombre pour iOS
    shadowRadius: 5,
  },
  submitButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default ChantierForm;
