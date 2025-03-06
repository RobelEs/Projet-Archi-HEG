// navigations/stackNavigation.js
import React from "react"; // Ajoute cet import si ce n'est pas déjà fait
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { NavigationContainer } from "@react-navigation/native";
import ChantiersScreen from "../screens/Chantier/ChantiersScreen";
import EmployeScreen from "../screens/EmployeScreen";
import ClientsScreen from "../screens/Client/ClientsScreen";
import NoterChantierScreen from "../screens/Client/NoterChantierScreen";
import Login from "../screens/Login/Login";
import AjouterChantierScreen from "../screens/Chantier/AjouterChantierScreen";
import DonneesPersonnellesScreen from "../screens/Employe/DonneesPersonnellesScreen"; // Importer la nouvelle page

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: "Connexion" }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Accueil' }}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ title: 'Profil' }}
        />
        <Stack.Screen
          name="Chantiers"
          component={ChantiersScreen}
          options={{ title: 'Chantiers' }}
        />
        <Stack.Screen
          name="AjouterChantier"
          component={AjouterChantierScreen}
          options={{ title: 'Ajouter un Chantier' }}
        />
        <Stack.Screen
          name="Employes"
          component={EmployeScreen}
          options={{ title: 'Employés' }}
        />
        <Stack.Screen
          name="Clients"
          component={ClientsScreen}
          options={{ title: 'Clients' }}
        />
        <Stack.Screen
          name="NoterChantier"
          component={NoterChantierScreen}
          options={{ title: 'Noter le Chantier' }}
        />
        
        {/* Nouvelle page pour les données personnelles */}
        <Stack.Screen
          name="DonnéesPersonnelles"
          component={DonneesPersonnellesScreen}
          options={{ title: 'Données Personnelles' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
