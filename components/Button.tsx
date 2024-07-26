import { IButton } from '../types/IButton';
import React from 'react';
import CustomText from './Text';
import { TouchableOpacity, StyleSheet} from 'react-native';

export default function CustomButton({ title, onPress, style, textStyle, onOutline = false }: IButton) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        onOutline ? styles.buttonSelected : styles.buttonUnselected,
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
  buttonSelected: {
    backgroundColor: '#7B2CBF',
  },
  buttonUnselected: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#00000029',
  },
  text: {
    fontSize: 12,
    fontWeight: 400,
  },
  textPrimary: {
    color: '#FFFFFF',
  },
  textSecondary: {
    color: '#000000CC',
  },
});