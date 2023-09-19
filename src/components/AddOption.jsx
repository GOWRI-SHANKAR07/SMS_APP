import { View, Text } from 'react-native'
import React from 'react'
import { styles } from '../styles/Poll'
import { pixelSizeVertical } from '../Constants/Theme'
import TextInputBox from './TextInputBox'

const AddOption = ({items, value, onChangeText}) => {
    return (
        <View style={
            [
                styles.inpTxtCont,
                {
                    marginTop: pixelSizeVertical(10)
                }
            ]
        }
        >
            <Text style={styles.titleTxt}>{items}</Text>
            <TextInputBox
                maxLength={140}
                placeholder={'Add option'}
                height={50}
                value={value}
                onChangeText={onChangeText}
            />
            <Text style={styles.charactersTxt}>Charater left : 0/140</Text>
        </View>
    )
}

export default AddOption