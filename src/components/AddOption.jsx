import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from '../styles/Poll'
import { Colors, pixelSizeVertical } from '../Constants/Theme'
import TextInputBox from './TextInputBox'
import Animated, { SlideInLeft, SlideOutLeft } from 'react-native-reanimated'
import { useAppContext } from '../context/AppContext'

const AddOption = ({ items, value, onChangeText, animate, onRemoveOption, containerLeftStyle1, index, removal }) => {

    const { options } = useAppContext();

    isRemoving = options.indexOf(items) !== 0 &&  options.indexOf(items) !== 1 && options.indexOf(removal) === index;


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
                    style={[styles.titleTxt, isRemoving ? containerLeftStyle1 : '']}
                    // entering={animate ? SlideInLeft : ''}
                    // exiting={animate ? SlideOutLeft : ''}
                >
                    {items}
                </Animated.Text>
                {options.indexOf(items) !== 0 &&  options.indexOf(items) !== 1  ?
                    <TouchableOpacity
                        onPress={() => onRemoveOption(items)}
                    >
                        <Animated.Text
                            style={[styles.titleTxt, isRemoving ? containerLeftStyle1 : '', { color: Colors.primary }]}
                            // entering={animate ? SlideInLeft : ''}
                        >
                            Remove
                        </Animated.Text>
                    </TouchableOpacity>
                    :
                    ''
                }

            </View>
            <Animated.View
            style={[isRemoving ? containerLeftStyle1 : '']} 
            // entering={animate ? SlideInLeft.duration(500) : ''}
            >
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