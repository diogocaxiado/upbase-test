import { useFonts } from 'expo-font';
import React from 'react';
import { Text, StyleSheet, TextProps } from 'react-native';

export default function CustomText(props: TextProps) {
  const [fontLoaded] = useFonts({
    'Jura-Regular': require('../assets/fonts/Jura-Regular.ttf'),
  });

  return <Text {...props} style={[styles.text, props.style]} />;
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Jura-Regular, sans-serif',
  },
});
