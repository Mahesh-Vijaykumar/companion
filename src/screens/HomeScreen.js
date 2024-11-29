import React from 'react';
import { View, StyleSheet } from 'react-native';
import CustomButton from '../components/CustomButton';

const HomeScreen = ({ navigation }) => {
  const handleButtonPress = (buttonText) => {
    navigation.navigate('ButtonDetails', { buttonText });
  };

  return (
    <View style={styles.container}>
      <CustomButton text="Safety Score Calculation" onPress={() => handleButtonPress('Safety Score Calculation')} />
      <CustomButton text="Interactive Safety Map" onPress={() => handleButtonPress('Interactive Safety Map')} />
      <CustomButton text="Community Reporting System" onPress={() => handleButtonPress('Community Reporting System')} />
      <CustomButton text="Emergency Support Features" onPress={() => handleButtonPress('Emergency Support Features')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f7f7f7',
  },
});

export default HomeScreen;
