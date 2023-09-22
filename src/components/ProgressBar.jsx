import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Colors, heightPixel, pixelSizeHorizontal, pixelSizeVertical, widthPixel } from '../Constants/Theme';
import Animated, { Easing, useSharedValue, useAnimatedStyle, withSpring, withTiming, SlideInLeft } from 'react-native-reanimated';
import { styles } from '../styles/ProgressBar';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const data = [
    {
        option: 'Private',
        percentage: 24,
        correctAnswer: false,
    },
    {
        option: 'Public',
        percentage: 53,
        correctAnswer: true,
    },
    {
        option: 'Public Permissioned',
        percentage: 14,
        correctAnswer: false,
    },
    {
        option: 'Permissioned',
        percentage: 8,
        correctAnswer: false,
    },
];

const pollDetails = {
    totalVotes: '12 votes',
    daysLeft: '7',
}

const ProgressBar = ({ item, isSelected, selectedOption }) => {
    const animatedValueLeft = useSharedValue(0);

    const widthAnimation = useSharedValue(1);

    if (isSelected) {
        widthAnimation.value = withTiming(1, {
            duration: 500,
            easing: Easing.linear,
        });
    } else {
        widthAnimation.value = withTiming(0, {
            duration: 500,
            easing: Easing.linear,
        });
    }


    const containerLeftStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateX: animatedValueLeft.value }],
            width: (widthAnimation.value * item.percentage) + '%',
        };
    });

    const gap = '    ';

    const length = (item.option).length * 12;
    console.log(length);



    return (
        <View style={styles.progressBar}>
            {/* <View style={styles.progressCont}> */}
            {isSelected ?
                <>
                    <Animated.View
                        style={[
                            styles.progress,
                            {
                                height: heightPixel(40),
                                backgroundColor: isSelected ? Colors.greyMessage : Colors.white,
                            },
                            containerLeftStyle
                        ]}
                    />
                    <View style={styles.optionTxtCont}>
                        <Text style={[
                            styles.optionTxt,
                            {
                                top: item === selectedOption ? pixelSizeVertical(8) : pixelSizeVertical(8),
                            }
                        ]}>
                            {item.option}{gap}
                        </Text>
                        {item.correctAnswer ?
                            <Ionicons
                                name="checkmark-circle"
                                size={24}
                                color={Colors.darkgreeen}
                                style={[styles.selectedIcon,
                                {
                                    top: pixelSizeVertical(6)
                                }
                                ]}
                            />
                            :
                            ''
                        }
                    </View>
                </>
                :
                <Text style={[
                    styles.optionTxt,
                    {
                        top: item === selectedOption ? pixelSizeVertical(8) : pixelSizeVertical(8),
                        height: heightPixel(40)
                    }
                ]}>
                    {item.option}
                </Text>
            }

            {/* </View> */}


            {isSelected ?
                <View style={styles.percentageCont}>
                    <Text style={styles.percentageTxt}>{item.percentage}%</Text>
                </View>
                :
                ''
            }
        </View>
    );
};

const Polling = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [animate, setAnimate] = useState(false);

    const handleAnimate = (item) => {
        setSelectedOption(item);
        setAnimate(true);
    }

    return (
        <View style={styles.container}>
            <View style={styles.pollCont}>
                <Text style={styles.questionTxt}>Bitcoin is based on _________ blockchain?</Text>
                {data.map((item, index) => (
                    <TouchableOpacity
                        key={index}
                        onPress={() => handleAnimate(item)}
                    >
                        <ProgressBar item={item} isSelected={animate} selectedOption={selectedOption} />
                    </TouchableOpacity>
                ))}
                <View style={styles.voteCont}>
                    <Text style={styles.voteTxt}>{pollDetails.totalVotes}</Text>
                    <Entypo name="dot-single" size={20} color="black" />
                    <Text style={styles.voteTxt}>{pollDetails.daysLeft}d left</Text>
                    <Entypo name="dot-single" size={20} color="black" />
                    <TouchableOpacity 
                        onPress={() => setAnimate(false)}
                    >
                        <Text style={[styles.voteTxt, { color: Colors.primary }]}>Undo</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};



export default Polling;
