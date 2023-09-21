import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from '../styles/Poll'
import { Colors, pixelSizeVertical } from '../Constants/Theme'
import TextInputBox from './TextInputBox'
import Animated, { SlideInLeft, } from 'react-native-reanimated'
import { useAppContext } from '../context/AppContext'

const AddOption = ({ items, value, onChangeText, animate, onRemoveOption, }) => {

    const [characCount, setCharacCount] = useState(value ? value.length : 0);

    // Update the character count when the value changes
    useEffect(() => {
        setCharacCount(value ? value.length : 0);
    }, [value]);


    const { options } = useAppContext();

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
            <View style={styles.titleCont}>
                <Animated.Text
                    style={styles.titleTxt}
                    entering={animate ? SlideInLeft : ''}
                >
                    {items}
                </Animated.Text>
                {options.indexOf(items) !== 0 && options.indexOf(items) !== 1 ?
                    <TouchableOpacity
                        onPress={() => onRemoveOption(items)}
                    >
                        <Animated.Text
                            style={[styles.titleTxt, { color: Colors.primary }]}
                            entering={animate ? SlideInLeft : ''}
                        >
                            Remove
                        </Animated.Text>
                    </TouchableOpacity>
                    :
                    ''
                }

            </View>
            <Animated.View
                entering={animate ? SlideInLeft.duration(500) : ''}
            >
                <TextInputBox
                    maxLength={140}
                    placeholder={'Add option'}
                    height={50}
                    value={value}
                    onChangeText={onChangeText}
                />
            </Animated.View>
            <Animated.Text
                style={styles.charactersTxt}
                entering={animate ? SlideInLeft.duration(700) : ''}
            >
                Charater left : {characCount}/140
            </Animated.Text>
        </View>
    )
}

export default AddOption