import { Link, router } from "expo-router";
import { StyleSheet, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';

import CustomText from "./Text";
import ITopBar from "types/ITopBar";

export default function TopBar({route = '/', link = true}: ITopBar) {
  return (
    <View style={styles.top}>
      <Ionicons name='arrow-back' size={32} color="#7B2CBF" onPress={() => router.replace(route)}/>
      
      {link && 
        <Link href={'/register'} style={styles.link}>
          <Ionicons name='add' size={18} color="#7B2CBF" style={styles.icon} />
          <CustomText style={styles.text}>Cadastrar imóvel</CustomText>
        </Link>
      }
    </View>
  )
}

const styles = StyleSheet.create({
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
  icon: {
    marginRight: 8,
  },
  text: {
    color: '#7B2CBF',
  }
})