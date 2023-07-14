import { Text, TextInput, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import { styles } from './styles'

export default function LoginPage({navigation}){
    return(
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <View>
                    <Text style={styles.textColor}>Bem vindo a maior comunidade profissional de pessoas PCD'S</Text>
                </View>
                <View style={styles.loginSetup}>
                    <View>
                        <Text style={styles.requiredLoginText}>Email ou usuário</Text>
                        <TextInput style={styles.textInput} placeholder='Digite seu Email ou Usuário'/>
                        <Text style={styles.requiredLoginText}>Senha</Text>
                        <TextInput style={styles.textInput} placeholder='Digite sua senha' secureTextEntry={true}/>
                        <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate('Feed')}>
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
                <View>
                    <Image source={require('../../../assets/home/work.png')} style={{ width: 500, height: 500 }}/>
                </View>
            </View>
        </ScrollView>
    );
}