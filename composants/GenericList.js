import React from "react";
import { View, FlatList, Text, StyleSheet } from "react-native";

const GenericList = ({ data, renderItemContent }) => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}  // Assure-toi que chaque élément a une propriété 'id' unique
      renderItem={({ item }) => (
        <View style={styles.itemContainer}>
          {renderItemContent(item)}  {/* Appelle la fonction renderItemContent pour personnaliser le rendu de chaque item */}
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: "#fff",
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 5,  // Ombre sur Android
  },
});

export default GenericList;
