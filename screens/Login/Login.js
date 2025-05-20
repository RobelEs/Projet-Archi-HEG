import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { loginUser } from "../../api";


const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");     
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (email === "" || password === "") {
      Alert.alert("Erreur", "Veuillez remplir tous les champs.");
      return;
    }

    try {
      const response = await loginUser(email, password);
      console.log("Connexion réussie, token :", response.token);
      navigation.replace("Home"); // Naviguer après succès
    } catch (error) {
      Alert.alert("Erreur", error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Connexion</Text>

      <TextInput
        style={styles.input}
        placeholder="Adresse e-mail"
        placeholderTextColor="#aaa"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Mot de passe"
        placeholderTextColor="#aaa"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.loginButton]} onPress={handleLogin}>
          <Text style={styles.buttonText}>Se connecter</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.forgotButton]} onPress={() => Alert.alert("Mot de passe oublié")}>
          <Text style={styles.buttonText}>Mot de passe oublié</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1e1e2d",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    maxWidth: 400,
    height: 50,
    backgroundColor: "#2a2a3b",
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
    color: "#fff",
    borderWidth: 1,
    borderColor: "#444",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    maxWidth: 400,
    marginTop: 10,
  },
  button: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginHorizontal: 5,
  },
  loginButton: {
    backgroundColor: "#4CAF50",
  },
  forgotButton: {
    backgroundColor: "#FF9800",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Login;
