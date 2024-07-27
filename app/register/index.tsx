import CustomButton from 'components/Button';
import CustomInput from 'components/Input';
import CustomText from 'components/Text';
import TopBar from 'components/TopBar';
import { ScrollView, StyleSheet, View } from 'react-native';

import { useState } from 'react';

export default function FormScreen() {
  const [name, setName] = useState<string>("");
  const [descricao, setDescricao] = useState<string>("");
  const [cep, setCep] = useState<string>("");
  const [endereco, setEndereco] = useState<string>("");
  const [numero, setNumero] = useState<string>("");
  const [complemento, setComplemento] = useState<string>("");
  const [cidade, setCidade] = useState<string>("");
  const [uf, setUf] = useState<string>("");

  return (
    <View style={styles.container}>
      <TopBar link={false} />

      <ScrollView
        showsVerticalScrollIndicator={false} 
        showsHorizontalScrollIndicator={false}
      >
        <CustomText style={{paddingTop: 24, fontSize: 20}}>Para começarmos, precisamos de alguns dados</CustomText>

        <CustomInput placeholder='Nome do imovel' onChangeText={write => setName(write)} defaultValue={name} style={{marginVertical: 8}}/>
        <CustomText style={{fontSize: 12, fontWeight: 400}}>O nome do imóvel será exibido na sua tela inicial e na reserva para o hóspede</CustomText>
        <CustomInput placeholder='Descrição' onChangeText={write => setDescricao(write)} defaultValue={descricao} style={{marginVertical: 8, paddingBottom: 64}} maxLength={250}/>
        <CustomText style={{alignSelf: 'flex-end', fontSize: 12, marginBottom: 16}}>{descricao?.length}/250</CustomText>

        <CustomInput placeholder='CEP' onChangeText={write => setCep(write)} defaultValue={cep} style={{marginVertical: 8}} keyboardType='numeric' />
        <CustomInput placeholder='Endereço' onChangeText={write => setEndereco(write)} defaultValue={endereco} style={{marginVertical: 8}}/>

        <View style={styles.double}>
          <CustomInput placeholder='Número' onChangeText={write => setNumero(write)} defaultValue={numero} style={{marginVertical: 8, width: '47%'}} keyboardType='numeric' />
          <CustomInput placeholder='Complemento' onChangeText={write => setComplemento(write)} defaultValue={complemento} style={{marginVertical: 8, width: '48%'}}/>
        </View>

        <View style={styles.double}>
          <CustomInput placeholder='Cidade' onChangeText={write => setCidade(write)} defaultValue={cidade} style={{marginVertical: 8, width: '65%'}}/>
          <CustomInput placeholder='UF' onChangeText={write => setUf(write)} defaultValue={uf} style={{marginVertical: 8, width: '30%'}}/>
        </View>

        <View style={styles.containerButton}>
          <CustomButton title='Continuar' onOutline={false} style={{ height: 48 }}/>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#ffffff',
  },
  scrollContainer: {
    padding: 24,
  },
  double: {
    display: 'flex',
    flexDirection: 'row',
    gap: 15,
    width: '100%',
  },
  containerButton: {
    marginVertical: 40,
  }
})