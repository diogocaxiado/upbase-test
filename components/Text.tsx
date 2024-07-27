import { useFonts } from 'expo-font';
import React from 'react';
import { Text, StyleSheet, TextProps } from 'react-native';
import NotFoundScreen from 'app/+not-found';

export default function CustomText(props: TextProps) {
  const [fontLoaded] = useFonts({
    'Jura': require('../assets/fonts/Jura.ttf'),
  });

  if (!fontLoaded) {
    return <NotFoundScreen />;
  }

  return <Text {...props} style={[styles.text, props.style]} />;
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Jura',
    fontSize: 16,
  },
});
