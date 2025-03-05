// screens/AjouterChantierScreen.js
import React from "react";
import { View, StyleSheet } from "react-native";
import ChantierForm from "../composants/ChantierForm";

const AjouterChantierScreen = ({ navigation }) => {
  const handleAjoutChantier = (chantier) => {
    console.log("Chantier ajouté :", chantier);
    navigation.navigate("Chantiers"); // Retour à la liste des chantiers après l'ajout
  };

  return (
    <View style={styles.container}>
      <ChantierForm onSubmit={handleAjoutChantier} />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      width: "100%", 
      justifyContent: "center",
      alignItems: "center", 
      padding: 20,
      backgroundColor: "#fff", 
    },
  });
  

export default AjouterChantierScreen;
