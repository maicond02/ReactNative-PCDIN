import { Text, TextInput, View, TouchableOpacity } from 'react-native';
import { styles } from './styles'

export default function LoginPage({navigation}){
    return(
        <View style={styles.container}>
        
        <View>
            <Text style={styles.textColor}>Entre em sua conta</Text>
        </View>
        <View style={styles.loginSetup}>
            <View>
                <Text style={styles.requiredLoginText}>Email ou usuário</Text>
                <TextInput style={styles.textInput} placeholder='Digite seu Email ou Usuário'/>
                <Text style={styles.requiredLoginText}>Senha</Text>
                <TextInput style={styles.textInput} placeholder='Digite sua senha' secureTextEntry={true}/>
                <TouchableOpacity style={styles.buttonStyle} onPress={() => {}}>
                    <Text>Entrar</Text>
                </TouchableOpacity>
                <View style={styles.moreConnections}>
                    <Text>ou</Text>
                        <TouchableOpacity style={styles.buttonRegister} onPress={() => navigation.navigate('Register')}>
                            <Text>Crie sua conta</Text>
                        </TouchableOpacity>
                </View>
            </View>
        </View>
    </View>
    );
}