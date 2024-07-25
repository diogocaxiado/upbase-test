import { IButton } from '@/types/IButton';
import React from 'react';
import { Text, TouchableOpacity, StyleSheet} from 'react-native';

export default function CustomButton({ title, onPress, style, textStyle, variant }: IButton) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        variant ? styles.buttonSelected : styles.buttonUnselected,
        style,
      ]}
    >
      <Text style={[styles.text, variant ? styles.textPrimary : styles.textSecondary, textStyle]}>
        {title}
      </Text>
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