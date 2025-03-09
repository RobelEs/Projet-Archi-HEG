// screens/ChantiersScreen.js
import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from "react-native";

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

  const renderChantier = ({ item }) => (
    <TouchableOpacity
      style={styles.chantierItem}
      onPress={() => navigation.navigate("ChantierDetail", { chantierId: item.id })}
    >
      <Text style={styles.chantierName}>{item.nom}</Text>
      <Text style={styles.chantierStatus}>{item.statut}</Text>
    </TouchableOpacity>
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

      {/* Utilisation de FlatList pour afficher la liste */}
      <FlatList
        data={limitedChantiers}
        keyExtractor={(item) => item.id}
        renderItem={renderChantier}
        contentContainerStyle={{ paddingBottom: 80 }} // Ajouter un peu d'espace au bas de la liste pour le bouton "Voir plus"
      />

      <TouchableOpacity style={styles.loadMoreButton} onPress={loadMoreItems}>
        <Text style={styles.loadMoreText}>Voir plus</Text>
      </TouchableOpacity>

      {/* Nouveau bouton pour naviguer vers la page d'ajout d'un employé */}
      <TouchableOpacity
        style={styles.addClientButton}
        onPress={() => navigation.navigate("AjouterEmploye")}
      >
        <Text style={styles.addClientButtonText}>Ajouter un Employé</Text>
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
    padding: 15,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 5, // Pour Android
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
  addClientButton: {
    backgroundColor: "#2ecc71", // Vert
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 20,
    alignItems: "center",
  },
  addClientButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default ChantiersScreen;
