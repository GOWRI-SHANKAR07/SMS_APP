import { View, Text, TouchableOpacity, Platform } from 'react-native'
import React from 'react'
import { styles } from '../styles/Academics'
import { AntDesign, EvilIcons } from '@expo/vector-icons';
import TopTab from '../stack/TopTab';

const CourseRegistration = () => {
    return (
        <View style={styles.container}>
            <View style={[styles.headerCont, Platform.OS === 'android' ? styles.androidShadow : styles.iosShadow]}>
                <TouchableOpacity>
                    <EvilIcons
                        name='arrow-left'
                        size={40}
                        color={'darkblue'}
                    />
                </TouchableOpacity>
                <Text style={styles.headerTxt}>Course Registration</Text>
                <TouchableOpacity>
                    <AntDesign
                        name='menufold'
                        size={30}
                        color={'red'}
                        style={styles.menu}
                    />
                </TouchableOpacity>
            </View>
            <TopTab />
        </View>
    )
}

export default CourseRegistration