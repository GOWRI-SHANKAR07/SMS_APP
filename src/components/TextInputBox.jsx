import { View, TextInput } from 'react-native'
import React from 'react'
import { Colors, heightPixel, pixelSizeVertical } from '../Constants/Theme'
import { styles } from '../styles/TextInputBox'

const TextInputBox = ({ placeholder, height, multiline, align, value, onChangeText, maxLength }) => {
    return (
        <TextInput
            textAlignVertical={align ? align : 'center'}
            multiline={multiline}
            placeholder={placeholder}
            placeholderTextColor={Colors.greyplaceholder}
            value={value}
            onChangeText={onChangeText}
            maxLength={maxLength}
            style={
                [
                    styles.inpTxt,
                    {
                        height: heightPixel(height),
                        paddingTop: align ? pixelSizeVertical(20) : ''
                    }
                ]
            }
        />
    )
}

export default TextInputBox