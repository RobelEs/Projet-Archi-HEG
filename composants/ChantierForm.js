import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const ChantierForm = ({ onSubmit }) => {
  const [nom, setNom] = useState("");
  const [statut, setStatut] = useState("");

  const handleSubmit = () => {
    if (!nom || !statut) {
      alert("Veuillez remplir tous les champs !");
      return;
    }

    onSubmit({ nom, statut });
    setNom("");
    setStatut("");
  };

  return (
    <View style={styles.container}>
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

      <Button title="Ajouter" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    width: "100%", 
    justifyContent: "center", 
    alignItems: "center", 
    paddingHorizontal: 20, 
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    alignSelf: "flex-start",
    marginBottom: 5,
  },
  input: {
    width: "100%",
    maxWidth: 400, 
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: "#f9f9f9",
  },
});

export default ChantierForm;
