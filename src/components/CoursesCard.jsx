import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo'
import { Colors } from '../Constants/Theme'
import { styles } from '../styles/CoursesCard'


const CoursesCard = ({ items }) => {
    return (
        <View>
            <TouchableOpacity style={styles.container}>
                <View>
                    <Text style={styles.txt}>{items.code}</Text>
                    <Text style={styles.txt}>{items.name}</Text>
                </View>
                <Entypo
                    name='chevron-small-right'
                    size={30}
                    color={Colors.black}
                />
            </TouchableOpacity>
        </View>
    )
}

export default CoursesCard