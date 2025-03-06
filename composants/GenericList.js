// composants/GenericList.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const GenericList = ({ data }) => {
  return (
    <ScrollView style={styles.listContainer}>
      {data.map((item) => (
        <View key={item.id} style={styles.itemContainer}>
          <Text style={styles.itemText}>{item.nom}</Text>
          <Text style={styles.itemText}>{item.statut}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
  },
  itemContainer: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2, // Pour Android
  },
  itemText: {
    fontSize: 16,
    color: '#34495e',
  },
});

export default GenericList;
