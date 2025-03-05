import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function MyButton({ title, onPress }) {
    return(
        <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007BFF', // Bleu
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25, // Bords arrondis
    alignItems: 'center',
  },
  text: {
    color: '#fff', // Texte blanc
    fontSize: 16,
    fontWeight: 'bold',
  },
});

