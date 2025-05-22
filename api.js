
import AsyncStorage from '@react-native-async-storage/async-storage';

const API_BASE_URL = "https://projetheg.abraha.ch/api"; // remplace par ton IP locale

export const loginUser = async (email, password) => {
  try {
    const response = await fetch(`${API_BASE_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Erreur lors de la connexion");
    }
    //console.log("Token reçu :", data.token);

    await AsyncStorage.setItem("token", data.token);
    return data; // contient le token et les infos utilisateur
  } catch (error) {
    throw error;
  }
};

export const fetchChantiers = async () => {
  try {
    // 🔑 Récupère le token depuis AsyncStorage
    const token = await AsyncStorage.getItem("token");

    if (!token) {
      throw new Error("Token non trouvé, l'utilisateur n'est pas connecté.");
    }

    const response = await fetch(`${API_BASE_URL}/chantiers`, {
      headers: {
        Authorization: `Bearer ${token}`,  
        Accept: "application/json",
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Erreur lors du chargement des chantiers");
    }

    return data.data || data;
  } catch (error) {
    throw error;
  }
};


