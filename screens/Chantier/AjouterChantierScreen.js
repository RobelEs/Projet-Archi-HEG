// AjouterChantierScreen.js
import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import ChantierForm from "../../composants/ChantierForm";

const AjouterChantierScreen = ({ navigation }) => {
  const handleAjoutChantier = (chantier) => {
    console.log("Chantier ajouté :", chantier);
    navigation.replace("Chantiers"); // Remplace la page AjouterChantier par Chantiers
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ChantierForm onSubmit={handleAjoutChantier} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1, // Utilise flexGrow pour garantir que le contenu occupe toute la hauteur disponible
    width: "100%",
    padding: 20,
    backgroundColor: "#f5f5f5", // Arrière-plan plus doux
    justifyContent: "center", // Centrer le contenu verticalement
    alignItems: "center", // Centrer horizontalement
  },
});

export default AjouterChantierScreen;
