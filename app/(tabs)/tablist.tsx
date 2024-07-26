import CustomText from 'components/Text';
import { StyleSheet, View } from 'react-native';

export default function TabListScreen() {
  return (
    <View style={styles.container}>
      <CustomText>Tablist Page</CustomText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})