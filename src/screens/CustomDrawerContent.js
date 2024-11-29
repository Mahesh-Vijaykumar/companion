import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const CustomDrawerContent = ({ navigation, email }) => {
  const buttons = [
    { title: 'Home', screen: 'Home' },
    { title: 'About', screen: 'About' },
    { title: 'Profile', screen: 'Profile' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Geo-Smart Companion</Text>
        <Text style={styles.subtitle}>Empowering Safety</Text>
      </View>

      <View style={styles.buttonContainer}>
        {buttons.map((button, index) => (
          <TouchableOpacity
            key={index}
            style={styles.button}
            onPress={() => navigation.navigate(button.screen)}
          >
            <Text style={styles.buttonText}>{button.title}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Welcome,</Text>
        <Text style={styles.email}>{email || 'Guest'}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: '#f7f7f7',
  },
  header: {
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
  },
  buttonContainer: {
    flex: 1,
  },
  button: {
    padding: 15,
    marginVertical: 5,
    borderRadius: 8,
    backgroundColor: '#007bff',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  footer: {
    alignItems: 'center',
  },
  footerText: {
    fontSize: 16,
    color: '#333',
  },
  email: {
    fontSize: 14,
    color: '#007bff',
    fontWeight: '600',
  },
});

export default CustomDrawerContent;
