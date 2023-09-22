import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Colors, heightPixel, pixelSizeHorizontal, pixelSizeVertical } from '../Constants/Theme';
import Animated, { Easing, useSharedValue, useAnimatedStyle, withSpring, withTiming, SlideInLeft } from 'react-native-reanimated';
import { styles } from '../styles/ProgressBar';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const data = [
    {
        option: 'Private',
        percentage: 24,
    },
    {
        option: 'Public',
        percentage: 53,
    },
    {
        option: 'Public Permissioned',
        percentage: 14,
    },
    {
        option: 'Permissioned',
        percentage: 8,
    },
];

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
            <View style={styles.progressCont}>
                {isSelected ?
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
                    :
                    ''
                }
                <Text style={[
                    styles.optionTxt,
                    {
                        position: isSelected ? 'absolute' : 'relative',
                        top: item === selectedOption ? pixelSizeVertical(8) : pixelSizeVertical(8),
                        marginBottom: item === selectedOption ? pixelSizeVertical(10) : '',
                        paddingLeft: isSelected ? pixelSizeVertical(10) : '',
                        marginRight: isSelected ? pixelSizeVertical(10) : '',
                    }
                ]}>
                    {item.option} {gap}
                </Text>
                {item === selectedOption ?
                        <Ionicons
                            name="checkmark-circle"
                            size={24}
                            color={Colors.green}
                            style={[styles.selectedIcon,  { left: pixelSizeHorizontal(length), marginBottom: pixelSizeVertical(5) }]}
                        />
                        :
                        ''
                    }
            </View>


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
                    <Text style={styles.voteTxt}>12 votes</Text>
                    <Entypo name="dot-single" size={24} color="black" />
                    <Text style={styles.voteTxt}>7d left</Text>
                    <Entypo name="dot-single" size={24} color="black" />
                    <Text style={[styles.voteTxt, { color: Colors.primary }]}>Undo</Text>
                </View>
            </View>
        </View>
    );
};



export default Polling;
