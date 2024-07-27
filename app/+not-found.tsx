import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function NotFoundScreen() {
  return (
    <View style={styles.container}>
      <Text>Not Found</Text>
      <Link href={'/'} style={styles.link}>Voltar</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    gap: 8,
  },
  link: {
    backgroundColor: '#7B2CBF',
    color: 'white',
    padding: 8,
    borderRadius: 8,
  }
});
