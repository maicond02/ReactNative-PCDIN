import { Text, TextInput, View, TouchableOpacity } from 'react-native';
import { styles } from './styles'

export default function Register({navigation}) {
  return (
    <View style={styles.container}>
        <View>
            <Text style={styles.textColor}>Crie sua conta gratuitamente</Text>
        </View>
        <View style={styles.loginSetup}>
            <View>
                <Text style={styles.requiredLoginText}>Email ou usuário</Text>
                <TextInput style={styles.textInput}/>
                <Text style={styles.requiredLoginText}>Senha</Text>
                <TextInput style={styles.textInput}/>
                <TouchableOpacity style={styles.buttonStyle} onPress={() => {}}>
                            <Text>Crie sua conta</Text>
                        </TouchableOpacity>
                <View style={styles.moreConnections}>
                    <Text>já tem conta?</Text>
                    <TouchableOpacity style={styles.buttonRegister} onPress={() => navigation.navigate('PCD-IN')}>
                      <Text>Entre em sua conta</Text>
                  </TouchableOpacity>
                </View>
            </View>
        </View>
    </View>
  );
}