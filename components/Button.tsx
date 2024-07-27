import { IButton } from '../types/IButton';
import React from 'react';
import CustomText from './Text';
import { TouchableOpacity, StyleSheet} from 'react-native';
import { router } from 'expo-router';

export default function CustomButton({ title, onPress = '/', style, textStyle, onOutline = true }: IButton) {
  return (
    <TouchableOpacity
      onPress={() => router.push(onPress)}
      style={[
        styles.button,
        onOutline ? styles.buttonOutline : styles.buttonStandart,
        style,
      ]}
    >
      <CustomText style={[styles.text, onOutline ? styles.textPrimary : styles.textSecondary, textStyle]}>
        {title}
      </CustomText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  buttonStandart: {
    backgroundColor: '#7B2CBF',
  },
  buttonOutline: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#00000029',
  },
  text: {
    fontSize: 12,
    fontWeight: 400,
  },
  textPrimary: {
    color: '#000000CC',
  },
  textSecondary: {
    color: '#FFFFFF',
  },
});