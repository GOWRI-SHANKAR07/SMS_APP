import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState, useEffect, useCallback } from 'react'
import { styles } from '../styles/Poll'
import { EvilIcons } from '@expo/vector-icons';
import TextInputBox from '../components/TextInputBox';
import { AntDesign } from '@expo/vector-icons';
import { Colors, } from '../Constants/Theme';
import AddOption from '../components/AddOption';
import { useAppContext } from '../context/AppContext';

const Poll = ({ }) => {
    const [question, setQuestion] = useState('');
    const [inputValues, setInputValues] = useState({});
    const [animate, setAnimate] = useState(false);

    const { options, setOptions } = useAppContext();
    const [totalOptions, setTotalOptions] = useState(2);
    const [optionTextValues, setOptionTextValues] = useState({});

    // handling removing options
    const handleRemoveOption = useCallback((removedItem) => {
        // Find the index of the removed option
        const removedIndex = options.indexOf(removedItem);

        if (removedIndex !== -1) {
            // Create a copy of the options array excluding the removed option
            const updatedOptions = options.filter((_, index) => index !== removedIndex);

            // Create a copy of the optionTextValues object excluding the removed option
            const updatedOptionTextValues = { ...optionTextValues };
            delete updatedOptionTextValues[removedItem];

            // Update the labels for the remaining options
            const updatedLabels = updatedOptions.map((_, index) => `Option ${index + 1} *`);

            // Create a new object to store the text input values for the remaining options
            const updatedTextValues = {};

            // Update the text input values for the remaining options
            updatedOptions.forEach((option, index) => {
                updatedTextValues[`Option ${index + 1} *`] = optionTextValues[option];
            });

            // Update the state with the new labels, text input values, and totalOptions count
            setOptions(updatedLabels);
            setOptionTextValues(updatedTextValues);
            setTotalOptions(totalOptions - 1);
        }
    }, [options, optionTextValues, setOptions, setOptionTextValues, totalOptions]);

    // handle add option
    const handleAddOption = useCallback(() => {
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
        setOptionTextValues((prevValues) => ({
            ...prevValues,
            [newOptionLabel]: '',
        }));
    }, [totalOptions, options, setOptions]);

    // store input changes to object 
    const handleInputChange = useCallback((key, value) => {
        setInputValues((prevValues) => ({ ...prevValues, [key]: value }));

        // Update the text input value in the state
        setOptionTextValues((prevValues) => ({
            ...prevValues,
            [key]: value,
        }));
    }, []);

    // Saving all the user inputs
    const handleSave = useCallback(() => {
        const allInputValues = {
            Question: question, // Store the question with the key "Question"
        };

        // Store the option values with their respective keys
        options.forEach((option, index) => {
            allInputValues[`Option ${index + 1} *`] = optionTextValues[option];
        });

        // Now allInputValues will contain all the values with proper keys
        setInputValues(allInputValues);
    }, [question, options, optionTextValues]);

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
                            <>
                                <AddOption
                                    animate={animate}
                                    key={item}
                                    items={item}
                                    value={optionTextValues[item]}
                                    onChangeText={(text) => handleInputChange(item, text)}
                                    onRemoveOption={handleRemoveOption}
                                />
                            </>
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
