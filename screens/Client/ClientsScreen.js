import React from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";

const ClientsScreen = ({ navigation }) => {
  const chantiers = [
    { id: "1", nom: "Chantier A", description: "Rénovation d'appartement" },
    { id: "2", nom: "Chantier B", description: "Construction d'une maison" },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chantiers à noter</Text>
      <FlatList
        data={chantiers}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("NoterChantier", { chantierId: item.id })}
            style={styles.item}
          >
            <Text style={styles.itemText}>{item.nom}</Text>
            <Text style={styles.itemSubText}>{item.description}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ecf0f1", // Fond clair pour un aspect plus moderne
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#2c3e50", // Couleur sombre pour le titre
    marginBottom: 20,
  },
  item: {
    padding: 20,
    marginVertical: 10,
    backgroundColor: "#ffffff", // Fond blanc pour chaque item
    borderRadius: 10,
    shadowColor: "#000", // Ombre pour donner un effet de profondeur
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 5, // Pour Android
  },
  itemText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#34495e", // Couleur sombre pour les titres des chantiers
  },
  itemSubText: {
    color: "#7f8c8d", // Gris clair pour la description
    fontSize: 16,
    marginTop: 5,
  },
});

export default ClientsScreen;
