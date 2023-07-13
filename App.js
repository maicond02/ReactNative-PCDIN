import Home from "./src/screens/Home";
import Register from "./src/screens/Register";
import Feed from "./src/screens/User/Feed"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, TouchableOpacity, Text, TextInput } from "react-native";
import NavFeed from './src/components/Navbars/Feed';
//import globalStyle from './src/styles/global';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="PCD-IN" component={Home} options={{
          title:'',
          headerLeft: () => (
            <Button title="PCD-IN" color="#0097FF"/>
          ),
        }}/>
        <Stack.Screen name="Register" component={Register}/>
        <Stack.Screen name="Feed" component={Feed} 
        options={{
          title:'',
          headerLeft: () => (
            <NavFeed />
          ),
          headerRight: () => (
            <Text>Aqui vai ser o inputText</Text>
          ),
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

