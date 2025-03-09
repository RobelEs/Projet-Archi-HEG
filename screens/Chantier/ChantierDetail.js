// screens/ChantierDetail.js
import React from "react";
import { View, Text, FlatList, Button, StyleSheet } from "react-native";

const ChantierDetail = ({ route, navigation }) => {
  const { chantierId } = route.params;

  // Exemple de données pour les chantiers et employés
  const chantiersDetails = [
    {
      id: "1",
      nom: "Chantier A",
      statut: "En cours",
      dateFinPrevu: "2025-06-30",
      employes: [
        { id: "1", nom: "Alice Dupont" },
        { id: "2", nom: "Marc Lemoine" },
        { id: "3", nom: "Julie Rousseau" },
      ],
    },
    {
      id: "2",
      nom: "Chantier B",
      statut: "Terminé",
      dateFinPrevu: "2025-01-15",
      employes: [
        { id: "1", nom: "Léo Dupuis" },
        { id: "2", nom: "Claire Bernard" },
      ],
    },
    {
      id: "3",
      nom: "Chantier C",
      statut: "En cours",
      dateFinPrevu: "2025-08-20",
      employes: [
        { id: "1", nom: "Paul Martin" },
        { id: "2", nom: "Emma Lefevre" },
        { id: "3", nom: "Victor Pires" },
      ],
    },
  ];

  // Recherche du chantier spécifique en fonction de l'ID
  const chantier = chantiersDetails.find((item) => item.id === chantierId);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{chantier?.nom}</Text>
      <Text style={styles.statut}>{chantier?.statut}</Text>

      <Text style={styles.sectionTitle}>Date de fin prévue :</Text>
      <Text style={styles.date}>{chantier?.dateFinPrevu}</Text>

      <Text style={styles.sectionTitle}>Employés travaillant sur ce chantier :</Text>
      <FlatList
        data={chantier?.employes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.employeItem}>
            <Text style={styles.employeName}>{item.nom}</Text>
          </View>
        )}
      />

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
    color: "#2c3e50",
    marginBottom: 20,
  },
  statut: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#e74c3c", // Rouge pour mettre en avant le statut
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#34495e",
    marginVertical: 10,
  },
  date: {
    fontSize: 18,
    color: "#7f8c8d", // Gris clair
    marginBottom: 20,
  },
  employeItem: {
    padding: 15,
    marginVertical: 5,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 5, // Pour Android
  },
  employeName: {
    fontSize: 18,
    color: "#34495e",
  },
});

export default ChantierDetail;
