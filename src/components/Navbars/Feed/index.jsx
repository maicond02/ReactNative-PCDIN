import { styles } from './styles'
import { Text, TextInput, View, TouchableOpacity, Image, ScrollView } from 'react-native';

export default function LoginPage({navigation}){
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.userProfileButton} onPress={() => navigation.navigate('Register')}>
                <Text style={styles.textProfile}>MD</Text>
            </TouchableOpacity>
        </View>
    );
}