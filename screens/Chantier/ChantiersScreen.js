import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, FlatList, ActivityIndicator } from "react-native";
import { fetchChantiers } from "../../api";


const ChantiersScreen = ({ navigation }) => {
 const [chantiers, setChantiers] = useState([]);
  const [visibleItems, setVisibleItems] = useState(3);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadChantiers = async () => {
      try {
        const data = await fetchChantiers();
        // Tri des chantiers par nom pour l'affichage
        data.sort((a, b) => (a.name || "").localeCompare(b.name || ""));
        setChantiers(data); // data doit être un tableau
      } catch (error) {
        console.error("Erreur lors du chargement des chantiers :", error.message);
      } finally {
        setLoading(false);
      }
    };

    loadChantiers();
  }, []);

  // Affiche seulement les chantiers visibles
  const limitedChantiers = chantiers.slice(0, visibleItems);

  const loadMoreItems = () => {
    setVisibleItems((prev) => prev + 3);
  };

  const renderChantier = ({ item }) => (
    <TouchableOpacity
      style={styles.chantierItem}
      onPress={() => navigation.navigate("ChantierDetail", { chantierId: item.id })}
    >
      <Text style={styles.chantierName}>{item.name}</Text>
      <Text style={styles.chantierStatus}>Client: {item.client_id}</Text>
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

      {loading ? (
        <ActivityIndicator size="large" color="#3498db" />
      ) : (
        <FlatList
          data={limitedChantiers}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderChantier}
          contentContainerStyle={{ paddingBottom: 80 }}
        />
      )}

      {!loading && (
        <TouchableOpacity style={styles.loadMoreButton} onPress={loadMoreItems}>
          <Text style={styles.loadMoreText}>Voir plus</Text>
        </TouchableOpacity>
      )}

      <TouchableOpacity
        style={styles.addClientButton}
        onPress={() => navigation.navigate("AjouterEmploye")}
      >
        <Text style={styles.addClientButtonText}>Ajouter un Employé</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.employeesButton}
        onPress={() => navigation.navigate("Employes")}
      >
        <Text style={styles.employeesButtonText}>Voir les Employés</Text>
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
  employeesButton: {
    backgroundColor: "#e67e22", // Orange
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 20,
    alignItems: "center",
  },
  employeesButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default ChantiersScreen;
