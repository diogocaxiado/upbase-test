import CustomText from 'components/Text';
import TopBar from 'components/TopBar';
import { StyleSheet, View } from 'react-native';

export default function UserScreen() {
  return (
    <View style={styles.container}>
      <TopBar link={false} />

      <View style={styles.center}>
        <CustomText>User Page</CustomText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#ffffff',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})