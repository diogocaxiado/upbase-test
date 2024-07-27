import NotFoundScreen from "app/+not-found";
import { useFonts } from "expo-font";
import { StyleSheet, TextInput, TextInputProps } from "react-native";

export default function CustomInput({keyboardType = 'default', placeholder, style, ...props }: TextInputProps) {
  const [fontLoaded] = useFonts({
    'Jura': require('../assets/fonts/Jura.ttf'),
  });

  if (!fontLoaded) {
    return <NotFoundScreen />;
  }

  return (
    <TextInput keyboardType={keyboardType} placeholder={placeholder} style={[styles.input, style]} {...props} />
  )
}

const styles = StyleSheet.create({
  input: {
    padding: 16, 
    marginTop: 24, 
    borderRadius: 4, 
    borderWidth: 1,
    borderColor: '#00000029',
    fontFamily: 'Jura',
  },
})