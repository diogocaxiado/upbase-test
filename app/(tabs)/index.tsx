import { AntDesign, Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { Image, StyleSheet, View } from 'react-native';
import Immobile from '../../assets/images/immobile.jpeg';

import CustomButton from '../../components/Button';
import CustomText from '../../components/Text';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Ionicons name='arrow-back' size={32} color="#7B2CBF" />
        
        <Link href={'/schedule'} style={styles.link}>
          <Ionicons name='add' size={24} color="#7B2CBF" />
          <CustomText style={{color: '#7B2CBF'}}>Cadastrar imóvel</CustomText>
        </Link>
      </View>

      <View>
        <CustomText style={{fontSize: 24, marginTop: 24, marginBottom: 24}}>Bem-vindo, Raphael!</CustomText>

        <View style={styles.buttons}>
          <CustomButton title={'Todos os flats'} onOutline={true} />
          <CustomButton title={'Indisponíveis'} />
        </View>
      </View>

      <View>
        <View style={styles.product}>
          <Image
            source={Immobile}
            style={{ width: '100%', height: '100%', borderRadius: 24}}
            />
        </View>

        <View style={styles.containerProduct}>
          <View style={styles.info}>
            <CustomText style={{fontSize: 20, fontWeight: 'black'}}>Poundsflats Aquário</CustomText>
            <CustomText style={{fontSize: 12, fontWeight: 400}}>Santos, SP</CustomText>
          </View>

          <View style={styles.values}>
            <View style={styles.notes}>
              <AntDesign name='star' size={16} color="#7B2CBF" />
              <CustomText>4,5</CustomText>
            </View>

            <View style={styles.price}>
              <CustomText style={{fontWeight: 'black'}}>Diária:</CustomText>
              <CustomText>R$97</CustomText>
            </View>
          </View>

        </View>
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
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 24,
  },
  link: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    gap: 24,
    marginBottom: 24,
  },
  product: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    minWidth: 270,
    height: 250,
  },
  containerProduct: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
    gap: 4,
  },
  info: {
   gap: 4,
  },
  values: {
    gap: 4,
  },
  notes: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: 8,
  },
  price: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 2,
  }
});
