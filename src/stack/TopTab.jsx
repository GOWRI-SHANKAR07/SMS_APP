import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Colors, fontPixel, pixelSizeHorizontal, widthPixel } from '../Constants/Theme';
import RegisteredCoureses from '../screens/RegisteredCourses';
import AvailableCourses from '../screens/AvailableCourses';
import CustomTabBarLabel from '../components/CustomTabBarLabel';


// creating Bottom Tab
const Tab = createMaterialTopTabNavigator();

const TopTab = ({ route }) => {
    return (
        <Tab.Navigator
            initialRouteName='Registered'
            tabBarPosition='top'
            screenOptions={{
                tabBarOptions: {
                    labelStyle: { textTransform: 'none' }, // Disable default text transformation
                }, 
                tabBarIndicatorStyle: {
                    backgroundColor: Colors.green,
                    width: widthPixel(148),
                    left: pixelSizeHorizontal(29)
                }
            }}
        >
            <Tab.Screen
                name='Registered'
                component={RegisteredCoureses}
                options={{
                    tabBarLabel: ({ focused }) => (
                        <CustomTabBarLabel label='Registered Courses' focused={focused} />
                    ),
                }}
            />
            <Tab.Screen
                name='Available Courses'
                component={AvailableCourses}
                options={{
                    tabBarLabel: ({ focused }) => (
                        <CustomTabBarLabel label='Available Courses' focused={focused} />
                    ),
                }}
            />
        </Tab.Navigator >
    )
}

export default TopTab;