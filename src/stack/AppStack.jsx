import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTab from './BottomTab';
import ContextProvider from '../context/AppContext';
import ProgressBar from '../components/ProgressBar';

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
                    <Stack.Screen name='Poll' component={ProgressBar} />
                </Stack.Navigator>
            </NavigationContainer>
        </ContextProvider>
    );
}