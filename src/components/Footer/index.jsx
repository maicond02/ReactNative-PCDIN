import { Text, TextInput, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import { styles } from "./styles";
export default function Footer({navigation}) {
  return (
    <View style={styles.container}> 
      <View style={styles.rowContainer}>
        <TouchableOpacity style={styles.buttonRegister} onPress={() => navigation.navigate('Home')}>
            <Image source={require('../../../assets/Feed/casa.png')} style={{ width: 30, height: 30 }}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonRegister} onPress={() => navigation.navigate('Register')}>
            <Image source={require('../../../assets/Feed/amigos.png')} style={{ width: 30, height: 30, marginLeft:40 }}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonRegister} onPress={() => navigation.navigate('Register')}>
            <Image source={require('../../../assets/Feed/botao-adicionar.png')} style={{ width: 30, height: 30, marginLeft:40 }}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonRegister} onPress={() => navigation.navigate('Register')}>
            <Image source={require('../../../assets/Feed/sino.png')} style={{ width: 30, height: 30, marginLeft:40 }}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonRegister} onPress={() => navigation.navigate('Register')}>
            <Image source={require('../../../assets/Feed/mala-de-viagem.png')} style={{ width: 30, height: 30, marginLeft:40 }}/>
        </TouchableOpacity>
      </View>
    </View>
  );
}