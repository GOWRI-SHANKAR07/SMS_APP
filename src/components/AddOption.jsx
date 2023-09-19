import { View, Text } from 'react-native'
import React from 'react'
import { styles } from '../styles/Poll'
import { pixelSizeVertical } from '../Constants/Theme'
import TextInputBox from './TextInputBox'
import Animated, { SlideInLeft } from 'react-native-reanimated'

const AddOption = ({ items, value, onChangeText }) => {
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
            <Animated.Text style={styles.titleTxt} entering={SlideInLeft}>{items}</Animated.Text>
            <Animated.View entering={SlideInLeft.duration(500)}>
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