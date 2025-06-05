// HomeScreen.js
import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const HomeScreen = ({ navigation }) => {
  const [role, setRole] = useState(null);

  const handleRoleSelect = (selectedRole) => {
    setRole(selectedRole);

    // Redirection automatique selon le rôle sélectionné
    switch (selectedRole) {
      case "Patron":
        navigation.navigate("Chantiers");
        break;
      case "Client":
        navigation.navigate("Clients");
        break;
      case "Employé":
        navigation.navigate("DonnéesPersonnelles"); // Redirection vers la page de données personnelles
        break;
      default:
        break;
    }
  };

  const handleLogout = async () => {
    // Supprime le token stocké pour sécuriser la déconnexion
    await AsyncStorage.removeItem("token");

    // Réinitialise la navigation pour revenir à la page de connexion
    navigation.reset({
      index: 0,
      routes: [{ name: "Login" }],
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Bienvenue sur l'application</Text>
      <Text style={styles.selectRoleText}>Sélectionnez votre rôle :</Text>

      <View style={styles.roleButtonsContainer}>
        <TouchableOpacity
          style={[styles.roleButton, styles.patronButton]}
          onPress={() => handleRoleSelect("Patron")}
        >
          <Text style={styles.roleButtonText}>Patron</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.roleButton, styles.clientButton]}
          onPress={() => handleRoleSelect("Client")}
        >
          <Text style={styles.roleButtonText}>Client</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.roleButton, styles.employeButton]}
          onPress={() => handleRoleSelect("Employé")}
        >
          <Text style={styles.roleButtonText}>Employé</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.logoutButton}
        onPress={handleLogout} // Appel de la fonction handleLogout
      >
        <Text style={styles.logoutButtonText}>Se déconnecter</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start", // Alignement en haut
    alignItems: "center",
    padding: 20,
    backgroundColor: "#1e1e2d",
    borderRadius: 10,
  },
  welcomeText: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 40, // Un peu plus d'espace avant les autres éléments
    color: "#fff",
    textAlign: "center", // Centré en haut
  },
  selectRoleText: {
    fontSize: 20,
    marginBottom: 20,
    color: "#ccc",
  },
  roleButtonsContainer: {
    flexDirection: "column", // Disposition verticale
    justifyContent: "space-between",
    width: "80%",
    marginBottom: 30,
  },
  roleButton: {
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 10,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
    marginBottom: 10, // Espacement entre les boutons
  },
  patronButton: {
    backgroundColor: "#FF5733", // Rouge
  },
  clientButton: {
    backgroundColor: "#2980B9", // Bleu
  },
  employeButton: {
    backgroundColor: "#27AE60", // Vert
  },
  roleButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  logoutButton: {
    backgroundColor: "#e74c3c", // Rouge de déconnexion
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginTop: 30, // Marge entre les boutons de rôle et le bouton de déconnexion
  },
  logoutButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default HomeScreen;
