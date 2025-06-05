import React from "react";
import { View, Text, StyleSheet } from "react-native";

const EmployeDetailsScreen = ({ route }) => {
  const { employe } = route.params;

  if (!employe) {
    return (
      <View style={styles.container}>
        <Text style={styles.error}>Aucune information sur l'employé</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{employe.nom}</Text>
      <Text style={styles.text}>Rôle : {employe.role}</Text>
      <Text style={styles.text}>Statut : {employe.statut}</Text>
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
