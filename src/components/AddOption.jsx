import { View, Text } from 'react-native'
import React from 'react'
import { styles } from '../styles/Poll'
import { pixelSizeVertical } from '../Constants/Theme'
import TextInputBox from './TextInputBox'
import Animated, { SlideInLeft } from 'react-native-reanimated'

const AddOption = ({ items, value, onChangeText, animate }) => {
    return (
        <View
            style={
                [
                    styles.inpTxtCont,
                    {
                        marginTop: pixelSizeVertical(10)
                    }
                ]
            }
        >
            <Animated.Text style={styles.titleTxt} entering={animate ? SlideInLeft : ''}>{items}</Animated.Text>
            <Animated.View entering={animate ? SlideInLeft.duration(500) : ''}>
                <TextInputBox
                    maxLength={140}
                    placeholder={'Add option'}
                    height={50}
                    value={value}
                    onChangeText={onChangeText}
                />
            </Animated.View>
        </View>
    )
}

export default AddOption