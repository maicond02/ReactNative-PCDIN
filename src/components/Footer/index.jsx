import { Text, TextInput, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import { styles } from "./styles";
export default function App() {
  return (
    <View style={styles.container}> 
      <View style={styles.rowContainer}>
        <Text>Início</Text>
        <Text>Amigos</Text>
        <Text>Publicação</Text>
        <Text>Notificações</Text>
        <Text>Vagas</Text>
      </View>
    </View>
  );
}