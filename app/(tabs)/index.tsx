import { AntDesign, Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { Button, Image, Text, View } from 'react-native';
import { styles } from './style';
import Immobile from '@/assets/images/immobile.jpeg';
import CustomButton from '@/components/Button';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Ionicons name='arrow-back' size={32} color="#7B2CBF" />
        
        <Link href={'/schedule'} style={styles.link}>
          <Ionicons name='add' size={24} color="#7B2CBF" />
          <Text style={{fontWeight: '700', color: '#7B2CBF'}}>Cadastrar imóvel</Text>
        </Link>
      </View>

      <View>
        <Text style={{fontSize: 24, fontWeight: 700, marginTop: 24, marginBottom: 24}}>Bem-vindo Raphael!</Text>

        <View style={styles.buttons}>
          <CustomButton title={'Todos os flats'} variant={true} />
          <CustomButton title={'Indisponíveis'} variant={false} />
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
            <Text style={{fontSize: 20, fontWeight: 700}}>Poundsflats Aquário</Text>
            <Text style={{fontSize: 12, fontWeight: 400}}>Santos, SP</Text>
          </View>

          <View style={styles.values}>
            <View style={styles.notes}>
              <AntDesign name='star' size={16} color="#7B2CBF" />
              <Text>4,5</Text>
            </View>

            <View style={styles.price}>
              <Text style={{fontWeight: 700}}>Diária:</Text>
              <Text>R$97</Text>
            </View>
          </View>

        </View>
      </View>
    </View>
  );
}