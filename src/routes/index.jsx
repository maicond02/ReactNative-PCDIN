import Home from "../screens/Home";
import Register from "../components/Register";
import Feed from "../components/User/Feed";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, TouchableOpacity, Text, TextInput } from "react-native";
import NavFeed from '../components/Navbars/Feed';
import NavbarSearch from "../components/Navbars/Search";

const Stack = createNativeStackNavigator();

export default function Route() {
  return (
    <>
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
                    headerLeft:() =>(
                    <>
                        <NavFeed />
                    </>
                    ),
                    headerRight: () => (
                    <>
                        <NavbarSearch/>
                    </>
                    ),
                    headerStyle: {
                    backgroundColor: '#0097FF',
                    flex:1,
                    },
                }}/>
            </Stack.Navigator>
        </NavigationContainer>
    </>
    
  );
}

