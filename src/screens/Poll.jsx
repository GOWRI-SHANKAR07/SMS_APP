import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { styles } from '../styles/Poll'
import { EvilIcons } from '@expo/vector-icons';
import TextInputBox from '../components/TextInputBox';
import { AntDesign } from '@expo/vector-icons';
import { Colors, } from '../Constants/Theme';
import AddOption from '../components/AddOption';
import Animated, { Easing, SlideInLeft, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { useAppContext } from '../context/AppContext';

const Poll = ({ }) => {
    const [question, setQuestion] = useState('');
    const [inputValues, setInputValues] = useState({});
    const [characCount, setCharacCount] = useState(0);
    const [animate, setAnimate] = useState(false);

    const { options, setOptions } = useAppContext();
    const [totalOptions, setTotalOptions] = useState(2);
    const [optionTextValues, setOptionTextValues] = useState({});

    const handleRemoveOption = (removedItem) => {
        // Find the index of the removed option
        const removedIndex = options.indexOf(removedItem);
      
        if (removedIndex !== -1 && removedIndex < totalOptions - 1) {
          // Create a copy of the current options and optionTextValues
          const updatedOptions = [...options];
          const updatedOptionTextValues = { ...optionTextValues };
      
          // Replace the content of the removed option with the content of the next option
          const removedLabel = updatedOptions[removedIndex];
          const nextLabel = updatedOptions[removedIndex + 1];
      
          updatedOptionTextValues[removedLabel] = optionTextValues[nextLabel];
      
          // Remove the next option from the options list and optionTextValues
          updatedOptions.splice(removedIndex + 1, 1);
          delete updatedOptionTextValues[nextLabel];
      
          // Update the state with the new options and values
          setOptions(updatedOptions);
          setOptionTextValues(updatedOptionTextValues);
          setTotalOptions(totalOptions - 1);
        }
      };
      

    console.log(optionTextValues, 'ppp');
    // console.log(inputValues, "ipp");
    // console.log(options, 'op');

    // handle add option
    const handleAddOption = () => {
        if (totalOptions >= 5) {
            alert('You can only add up to 5 items.');
            return;
        }

        setAnimate(true);
        const newOptionLabel = `Option ${totalOptions + 1} *`;

        // Update options and increment the totalOptions count
        setOptions([...options, newOptionLabel]);
        setTotalOptions(totalOptions + 1);

        // Add an empty text input value for the new option
        setOptionTextValues({
            ...optionTextValues,
            [newOptionLabel]: '',
        });
    };

    // store input changes to object 
    const handleInputChange = (key, value) => {
        setInputValues({ ...inputValues, [key]: value });
        setCharacCount(value.length);

        // Update the text input value in the state
        setOptionTextValues({
            ...optionTextValues,
            [key]: value,
        });
    };

    // Saving all the user inputs
    const handleSave = () => {
        setInputValues({ ...inputValues, ['Question']: question });
    }

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
                <Text style={styles.headerTxt}>Create a poll</Text>
            </View>
            <ScrollView>
                <View style={styles.inpCont}>
                    <View style={styles.innerCont}>
                        <View style={styles.inpTxtCont}>
                            <Text
                                style={styles.titleTxt}
                            >
                                Your questions *
                            </Text>
                            <TextInputBox
                                maxLength={140}
                                placeholder={'Add question'}
                                height={150}
                                multiline={true}
                                align={'top'}
                                value={question}
                                onChangeText={e => setQuestion(e)}
                            />
                            <Text
                                style={styles.charactersTxt}
                            >
                                Charater left : {question.length}/140
                            </Text>
                        </View>
                        {options.map((item, index) => (
                            <AddOption
                                animate={animate}
                                key={item}
                                items={item}
                                value={optionTextValues[item]}
                                onChangeText={(text) => handleInputChange(item, text)}
                                onRemoveOption={handleRemoveOption}
                            />
                        ))}
                        <View>
                            <TouchableOpacity
                                style={styles.addCont}
                                onPress={handleAddOption}
                            >
                                <AntDesign
                                    name="plus"
                                    size={24}
                                    color={Colors.greyDark}
                                />
                                <Text style={styles.addTxt}>Add Option</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity
                                style={styles.doneBtn}
                                onPress={handleSave}
                            >
                                <Text style={styles.doneTxt}>Done</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default Poll;
