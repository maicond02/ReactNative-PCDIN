import { Text, TextInput, View, TouchableOpacity, ScrollView, Image } from 'react-native';
import { styles } from './styles';
import Profile from '../../Navbars/Feed/index'

export default function Feed({ navigation }){
    return(
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <View style={styles.card}>
                    <View style={styles.header}>
                        <Profile/>
                      <View>
                          <Text style={styles.title}>Maicon Alves</Text>
                          <Text >Engenheiro de Software</Text>
                      </View>
                    </View>
                    <View style={styles.content}>
                        <Text style={styles.post}>Olá rede, estou passando para divulgar algumas vagas de Software developer na empresa PCD-IN</Text>
                        <Image source={require('../../../../assets/Feed/vagas.jpg')} style={{ flex:1, width: '90%', height: '90%' }}/>
                    </View>
                    <View style={styles.footer}>
                        <Text>190 Curtidas 30 Comentários</Text>
                    </View>
                    </View>
                <View style={styles.card}>
                    <View>
                        <Text>Maicon Alves</Text>
                    </View>
                    <View>
                        <Text>Post</Text>
                    </View>
                    <View>
                        <Text>Curtidas</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}