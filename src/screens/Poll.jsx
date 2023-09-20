import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
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
    const [removal, setRemoval] = useState();
    const [index, setIndex] = useState();

    const { options, setOptions } = useAppContext();

    // animation starting point
    const animatedValueLeft1 = useSharedValue(-50);
    const animatedValueLeft2 = useSharedValue(-70);

    // checking to start the removal animation
    isRemoving = options.indexOf(removal) === index;


    // handling lecture content sliding from left
    const slideInFromLeft1 = () => {
        animatedValueLeft1.value = withTiming(options ? 0 : 60, {
            duration: 200, // Adjust the duration as needed
            easing: Easing.inOut(Easing.linear),
        });
    };

    // handling lab content sliding from left
    const slideInFromLeft2 = () => {
        animatedValueLeft2.value = withTiming(options ? 0 : 60, {
            duration: 500, // Adjust the duration as needed
            easing: Easing.inOut(Easing.linear),
        });
    };

    // handling lecture content sliding into left
    const slideInToLeft1 = () => {
        animatedValueLeft1.value = withTiming(options ? -380 : 0, {
            duration: 500, // Adjust the duration as needed
            easing: Easing.inOut(Easing.linear),
        });
    };

    // handling lab content sliding into left
    const slideInToLeft2 = () => {
        animatedValueLeft2.value = withTiming(options ? -380 : 0, {
            duration: 200, // Adjust the duration as needed
            easing: Easing.inOut(Easing.linear),
        });
    };

    // lecture container style for animation
    const containerLeftStyle1 = useAnimatedStyle(() => {

        return {
            transform: [{ translateX: animatedValueLeft1.value }],
        };
    });

    // lab container style for animation
    const containerLeftStyle2 = useAnimatedStyle(() => {
        return {
            transform: [{ translateX: animatedValueLeft2.value }],
        };
    });

    const handleRemoveOption = (removedItem) => {
        const updatedOptions = options.filter((item) => item !== removedItem);
        const removed = options.indexOf(removedItem);
        setRemoval(removedItem);
        setIndex(removed)
        options.map(item => {
            if (options.indexOf(removal) === options.indexOf(item)) {
                slideInToLeft1();
                slideInToLeft2();
            }
        }
        )

        setTimeout(() => {
            setOptions(updatedOptions);
        }, 800);
    };

    console.log(index, "Removed index");
    console.log(options.indexOf(removal), "arr");

    // handle add option
    const handleAddOption = () => {
        if (options.length >= 5) {
            alert('You can only add up to 5 items.');
            return; // Do not add a new item if the limit is reached
        }
        setAnimate(true);
        // Create a new item (e.g., 'Option X', where X is the next number)
        const newOption = `Option ${options.length + 1} *`;

        slideInFromLeft1();
        slideInFromLeft2();

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
                                    containerLeftStyle1={containerLeftStyle1}
                                    removal={removal}
                                    index={index}
                                />
                                <Animated.Text
                                    style={[
                                        styles.charactersTxt,
                                        options.indexOf(item) !== 0 && options.indexOf(item) !== 1 && isRemoving
                                            ? containerLeftStyle2
                                            : ''
                                    ]}
                                // entering={animate ? SlideInLeft.duration(700) : ''}
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