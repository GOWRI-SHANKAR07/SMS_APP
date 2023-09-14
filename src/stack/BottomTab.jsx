import Home from '../screens/Home';
import Schedules from '../screens/Schedules';
import Accounts from '../screens/Accounts';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Colors, fontPixel, widthPixel } from '../Constants/Theme';
import { SimpleLineIcons } from '@expo/vector-icons';
import Academics from '../screens/Academics';

// creating Bottom Tab
const Tab = createMaterialBottomTabNavigator();

const BottomTab = () => {
    return (
        <Tab.Navigator
            barStyle={{ 
                backgroundColor: Colors.white, 
                borderTopColor: Colors.grey, 
                borderTopWidth: 2,
            }}
            screenOptions={({ route }) => ({
                tabBarLabelStyle: { fontSize: fontPixel(20),},
                tabBarActiveTintColor: '#00A8E8',
                tabBarInactiveTintColor: 'lightgray',
                tabBarPressColor: '#ffffff00',
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    // route icon handling
                    switch (route.name) {
                        case 'Home':
                            iconName = focused
                                ? 'home'
                                : 'home';
                            break;

                        case 'Academics':
                            iconName = focused
                                ? 'graduation'
                                : 'graduation';
                            break;

                        case 'Schedules':
                            iconName = focused
                                ? 'calendar'
                                : 'calendar';
                            break;

                        case 'Accounts':
                            iconName = focused
                                ? 'user'
                                : 'user';
                            break;

                    }

                    return (
                        <SimpleLineIcons
                            name={iconName}
                            size={widthPixel(25)}
                            color={color}
                        />
                    );
                }
            })}
            initialRouteName='Academics'
        >
            <Tab.Screen name='Home' component={Home} />
            <Tab.Screen name='Academics' component={Academics} />
            <Tab.Screen name='Schedules' component={Schedules} />
            <Tab.Screen name='Accounts' component={Accounts} />
        </Tab.Navigator >
    )
}

export default BottomTab;