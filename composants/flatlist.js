import React from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';

export default function MyFlatList() {
  const data = [
    { id: '1', name: 'Robel' },
    { id: '2', name: 'Mani ' },
    { id: '3', name: 'DD' },
  ];

  return (
    <FlatList 
      data={data}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Text>{item.name}</Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});
