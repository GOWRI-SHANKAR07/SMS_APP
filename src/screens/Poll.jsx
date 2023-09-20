import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { styles } from '../styles/Poll'
import { EvilIcons } from '@expo/vector-icons';
import TextInputBox from '../components/TextInputBox';
import { AntDesign } from '@expo/vector-icons';
import { Colors, } from '../Constants/Theme';
import AddOption from '../components/AddOption';
import Animated, { SlideInLeft } from 'react-native-reanimated';
import { useAppContext } from '../context/AppContext';


const Poll = ({ }) => {
    const [question, setQuestion] = useState('');
    const [inputValues, setInputValues] = useState({});
    const [characCount, setCharacCount] = useState(0);
    const [animate, setAnimate] = useState(false);

    const { options, setOptions } = useAppContext();

    const handleRemoveOption = (removedItem) => {
        const updatedOptions = options.filter((item) => item !== removedItem);
        setOptions(updatedOptions);
    };

    // handle add option
    const handleAddOption = () => {
        if (options.length >= 5) {
            alert('You can only add up to 5 items.');
            return; // Do not add a new item if the limit is reached
        }
        setAnimate(true);
        // Create a new item (e.g., 'Option X', where X is the next number)
        const newOption = `Option ${options.length + 1} *`;

        // Update the items array with the new item
        setOptions([...options, newOption]);
    };

    // store input changes to object 
    const handleInputChange = (key, value) => {
        setInputValues({ ...inputValues, [key]: value });
        setCharacCount(value.length)
    };

    // Saving all the user inputs
    const handleSave = () => {
        setInputValues({ ...inputValues, ['Question']: question });
    }

    console.log(options);

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
                        {options.map(item =>
                            <>
                                <AddOption
                                    animate={animate}
                                    key={item}
                                    items={item}
                                    onChangeText={(text) => handleInputChange(item, text)}
                                    onRemoveOption={handleRemoveOption}
                                />
                                <Animated.Text
                                    style={styles.charactersTxt}
                                    entering={animate ? SlideInLeft.duration(700) : ''}
                                >
                                    Charater left : {characCount}/140
                                </Animated.Text>
                            </>
                        )}
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

export default Poll