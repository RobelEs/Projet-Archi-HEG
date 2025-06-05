import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet, ActivityIndicator } from "react-native";
import { fetchEmployes } from "../api";

const EmployeScreen = ({ navigation }) => {
  const [employes, setEmployes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await fetchEmployes();
        // Tri alphabétique des employés par nom
        data.sort((a, b) => {
          const nomA = a.nom || a.name || "";
          const nomB = b.nom || b.name || "";
          return nomA.localeCompare(nomB);
        });
        setEmployes(data);
      } catch (e) {
        console.error("Erreur lors du chargement des employés:", e.message);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Liste des Employés</Text>
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <FlatList
          data={employes}
          keyExtractor={(item) => item.id?.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("EmployeDetails", { id: item.id, employe: item })
              }
              style={styles.item}
            >
              <Text style={styles.itemText}>{item.nom || item.name}</Text>
              {item.role && <Text style={styles.itemText}>Rôle: {item.role}</Text>}
              {item.statut && <Text style={styles.itemText}>Statut: {item.statut}</Text>}
            </TouchableOpacity>
          )}
        />
      )}
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
