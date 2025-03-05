// screens/ClientsScreen.js
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
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  item: {
    padding: 15,
    marginVertical: 8,
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
  },
  itemText: {
    fontSize: 18,
  },
  itemSubText: {
    color: "gray",
  },
});

export default ClientsScreen;
