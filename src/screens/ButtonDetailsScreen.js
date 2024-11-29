import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ButtonDetailsScreen = ({ route }) => {
  const { buttonText } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>You selected:</Text>
      <Text style={styles.buttonText}>{buttonText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007bff',
  },
});

export default ButtonDetailsScreen;
