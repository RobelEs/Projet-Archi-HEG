import React from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";

const EmployeScreen = ({ navigation }) => {
  const employes = [
    { id: "1", nom: "Jean Dupont", role: "Chef de chantier", statut: "Actif" },
    { id: "2", nom: "Marie Dupuis", role: "Ouvrier", statut: "En congé" },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Liste des Employés</Text>
      <FlatList
        data={employes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("EmployeDetails", { id: item.id })}
            style={styles.item}
          >
            <Text style={styles.itemText}>{item.nom}</Text>
            <Text style={styles.itemText}>Rôle: {item.role}</Text>
            <Text style={styles.itemText}>Statut: {item.statut}</Text>
          </TouchableOpacity>
        )}
      />
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
    marginBottom: 20,
  },
  item: {
    padding: 15,
    marginVertical: 8,
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
  },
  itemText: {
    fontSize: 16,
    color: "gray",
  },
});

export default EmployeScreen;
