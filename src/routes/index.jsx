import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/Home'
import Feed from '../components/User/Feed'
import FriendsPage from '../screens/User/Friends';

const {Navigator, Screen} = createBottomTabNavigator()

export default function Route() {
  return (
        <NavigationContainer>
            <Navigator>
                <Screen name="Home" component={Home} options={{
                    title:'PCD-IN',
                    tabBarStyle: { display:'none' },
                }}/>
                <Screen name="Feed" component={Feed} options={{
                    title:'HOME',
                }}/>
                <Screen name="FriendsPage" component={FriendsPage} options={{
                    title:'Friends',
                }}/>
            </Navigator>
        </NavigationContainer>
  );
}

