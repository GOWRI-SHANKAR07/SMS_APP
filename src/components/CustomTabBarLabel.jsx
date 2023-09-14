import React from 'react';
import { Text } from 'react-native';
import { styles } from '../styles/TabLabel';

const CustomTabBarLabel = ({ label }) => {
  // Format the label with the first letter in uppercase and the rest in lowercase
  const formattedLabel = label.charAt(0).toUpperCase() + label.slice(1).toLowerCase();

  return (
    <Text style={styles.tabTxt}>{formattedLabel}</Text>
  );
};

export default CustomTabBarLabel;
