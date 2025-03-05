// screens/NoterChantierScreen.js
import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const NoterChantierScreen = ({ route, navigation }) => {
  const { chantierId } = route.params;
  const [note, setNote] = useState("");
  const [commentaire, setCommentaire] = useState("");

  const handleSubmit = () => {
    // Logique pour enregistrer la note et le commentaire
    console.log(`Note pour le chantier ${chantierId}: ${note}`);
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
