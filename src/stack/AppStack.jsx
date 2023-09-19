import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTab from './BottomTab';
import ContextProvider from '../context/AppContext';

// App Stack creation
const Stack = createNativeStackNavigator();

export default function AppStack() {
    return (
        <ContextProvider>
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerShown: false
                    }}
                >
                    <Stack.Screen name='Homes' component={BottomTab} />
                </Stack.Navigator>
            </NavigationContainer>
        </ContextProvider>
    );
}