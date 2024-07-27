import CustomButton from 'components/Button';
import CustomText from 'components/Text';
import { StyleSheet, View } from 'react-native';

export default function NotFoundScreen() {
  return (
    <View style={styles.container}>
      <CustomText>Not Found</CustomText>
      <CustomButton onPress={'/'} onOutline={false} title='Voltar' />
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
});
