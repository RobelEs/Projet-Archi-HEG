// screens/NoterChantierScreen.js
import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const NoterChantierScreen = ({ route, navigation }) => {
  const { chantierId } = route.params;
  const [note, setNote] = useState("");
  const [commentaire, setCommentaire] = useState("");

  const handleSubmit = () => {
    const noteValue = parseInt(note, 10); // Convertir la note en entier

    if (noteValue < 1 || noteValue > 5 || isNaN(noteValue)) {
      alert("La note doit être comprise entre 1 et 5.");
      return;
    }

    // Logique pour enregistrer la note et le commentaire
    console.log(`Note pour le chantier ${chantierId}: ${noteValue}`);
    console.log(`Commentaire: ${commentaire}`);

    // Rediriger vers la page précédente ou vers une confirmation
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Noter le Chantier</Text>
      <Text style={styles.label}>Note (de 1 à 5):</Text>
      <TextInput
        style={styles.input}
        value={note}
        onChangeText={setNote}
        keyboardType="numeric"
        maxLength={1} // Limite la saisie à 1 caractère (pour les notes entre 1 et 5)
      />
      <Text style={styles.label}>Commentaire:</Text>
      <TextInput
        style={styles.input}
        value={commentaire}
        onChangeText={setCommentaire}
        multiline
      />
      <Button title="Soumettre la note" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  label: {
    fontSize: 18,
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginTop: 10,
    fontSize: 16,
    borderRadius: 5,
  },
});

export default NoterChantierScreen;
