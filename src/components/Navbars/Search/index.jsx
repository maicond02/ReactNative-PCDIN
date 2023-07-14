import { Button, TextInput, View } from "react-native";
import { styles } from './styles'
export default function NavbarSearch(){
    return(
        <View style={styles.container}>
            <TextInput style={styles.inputSearch} placeholder="Pesquisar"/>
        </View>
    );
}