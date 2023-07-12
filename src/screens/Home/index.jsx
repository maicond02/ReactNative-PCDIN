import { Text, TextInput, View, Button, TouchableOpacity } from 'react-native';
import { styles } from './styles'

export default function Home() {
  return (
    <View style={styles.container}>
        <View style={styles.containerLogin}>
            <Text style={styles.textColor}>Bem-vindo ao</Text>
            <Text style={styles.textColor}>PCD-IN</Text>
            <View style={styles.loginContent}>
                <View style={styles.loginContent}>
                    <Text style={styles.textHeader}>
                        Entre em sua conta
                    </Text>
                    <Text style={styles.requiredLoginText}>Email ou usuário</Text>
                    <TextInput style={styles.textInput}/>
                    <Text style={styles.requiredLoginText}>Senha</Text>
                    <TextInput style={styles.textInput}/>
                    <TouchableOpacity style={styles.buttonStyle} onPress={() => {}}>
                        <Text>Entrar</Text>
                    </TouchableOpacity>
                    <View style={styles.moreConnections}>
                        <Text>ou</Text>
                        <TouchableOpacity style={styles.buttonMoreConnections} onPress={() => {}}>
                            <Text>Crie sua conta</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    </View>
  );
}