// screens/ChantiersScreen.js
import React from "react";
import { View, Text, Button, StyleSheet, FlatList } from "react-native";

const ChantiersScreen = ({ navigation }) => {
  const chantiers = [
    { id: "1", nom: "Chantier A", statut: "En cours" },
    { id: "2", nom: "Chantier B", statut: "Terminé" },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tous les Chantiers</Text>
      
      <Button
        title="Ajouter un chantier"
        onPress={() => navigation.navigate('AjouterChantier')}
      />

      <FlatList
        data={chantiers}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.chantierCard}>
            <Text>{item.nom} - {item.statut}</Text>
          </View>
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
  chantierCard: {
    marginBottom: 15,
    padding: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
  },
});

export default ChantiersScreen;
