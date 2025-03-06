// screens/ChantiersScreen.js
import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import GenericList from "../../composants/GenericList"; // Assure-toi que GenericList est bien importé

const ChantiersScreen = ({ navigation }) => {
  const chantiers = [
    { id: "1", nom: "Chantier A", statut: "En cours" },
    { id: "2", nom: "Chantier B", statut: "Terminé" },
    { id: "3", nom: "Chantier C", statut: "En cours" },
    { id: "4", nom: "Chantier D", statut: "Terminé" },
    { id: "5", nom: "Chantier E", statut: "En cours" },
    { id: "6", nom: "Chantier F", statut: "Terminé" },
  ];

  const [visibleItems, setVisibleItems] = useState(3); // Nombre d'éléments à afficher initialement

  useEffect(() => {
    setVisibleItems(3); // Réinitialiser à chaque fois qu'on revient à la page
  }, []);

  const loadMoreItems = () => {
    setVisibleItems(visibleItems + 3); // Ajouter 3 éléments à chaque fois qu'on clique sur "Voir plus"
  };

  // Limite les chantiers affichés à ceux qui sont visibles
  const limitedChantiers = chantiers.slice(0, visibleItems);

  // Fonction pour afficher chaque chantier
  const renderChantier = (item) => (
    <View style={styles.chantierItem}>
      <Text style={styles.chantierName}>{item.nom}</Text>
      <Text style={styles.chantierStatus}>{item.statut}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tous les Chantiers</Text>

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate("AjouterChantier")}
      >
        <Text style={styles.addButtonText}>Ajouter un Chantier</Text>
      </TouchableOpacity>

      {/* Utilisation de GenericList pour afficher la liste */}
      <GenericList
        data={limitedChantiers}
        renderItemContent={renderChantier}
      />

      {/* Bouton pour charger plus d'éléments */}
      <TouchableOpacity style={styles.loadMoreButton} onPress={loadMoreItems}>
        <Text style={styles.loadMoreText}>Voir plus</Text>
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
  addButton: {
    backgroundColor: "#3498db", // Bleu
    paddingVertical: 15,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: "center",
  },
  addButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  loadMoreButton: {
    backgroundColor: "#95a5a6",
    paddingVertical: 12,
    borderRadius: 10,
    marginTop: 20,
    alignItems: "center",
  },
  loadMoreText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  chantierItem: {
    marginBottom: 15,
  },
  chantierName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#34495e",
  },
  chantierStatus: {
    fontSize: 14,
    color: "#95a5a6",
  },
});

export default ChantiersScreen;
