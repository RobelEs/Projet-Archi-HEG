import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import { fetchEmployeById } from "../../api";

const EmployeDetailsScreen = ({ route }) => {
  const { employe, id } = route.params || {};
  const [details, setDetails] = useState(employe);
  const [loading, setLoading] = useState(!employe && !!id);

  useEffect(() => {
    if (!employe && id) {
      const load = async () => {
        try {
          const data = await fetchEmployeById(id);
          setDetails(data);
        } catch (e) {
          console.error("Erreur lors du chargement de l'employé:", e.message);
        } finally {
          setLoading(false);
        }
      };
      load();
    }
  }, [id]);
  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (!details) {
    return (
      <View style={styles.container}>
        <Text style={styles.error}>Aucune information sur l'employé</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{details.nom || details.name}</Text>
      {details.role && <Text style={styles.text}>Rôle : {details.role}</Text>}
      {details.statut && <Text style={styles.text}>Statut : {details.statut}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
  error: {
    fontSize: 18,
    color: "red",
  },
});

export default EmployeDetailsScreen;
