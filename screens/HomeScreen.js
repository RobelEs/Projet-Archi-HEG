import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
  const [role, setRole] = useState(null);

  // Cette fonction sera appelée dès qu'un rôle est sélectionné
  const handleRoleSelect = (selectedRole) => {
    setRole(selectedRole);

    // Redirection automatique selon le rôle sélectionné
    switch (selectedRole) {
      case "Patron":
        navigation.navigate("Chantiers"); // Le patron voit tous les chantiers
        break;
      case "Client":
        navigation.navigate("Clients"); // Le client voit ses propres chantiers
        break;
      case "Employé":
        navigation.navigate("Employes"); // L'employé n'a pas encore d'accès spécifique
        break;
      default:
        break;
    }
  };

  return (
    <View style={styles.container}>
      {/* Titre Bienvenue centré */}
      <Text style={styles.welcomeText}>Bienvenue sur l'application</Text>

      {/* Choix du rôle */}
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

      {/* Bouton de déconnexion */}
      <TouchableOpacity
        style={styles.logoutButton}
        onPress={() => navigation.navigate("Login")} // Redirection vers la page de login
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
