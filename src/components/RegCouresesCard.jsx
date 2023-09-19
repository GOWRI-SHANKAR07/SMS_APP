import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Entypo, AntDesign } from '@expo/vector-icons';
import { Colors } from '../Constants/Theme'
import { styles } from '../styles/RegCoursesCard'
// import Animated, { Easing, withTiming, useSharedValue, useAnimatedStyle, SlideInLeft, SlideOutLeft, Layout, SlideInDown, SlideInUp, SlideOutUp } from 'react-native-reanimated';
import Animated, { Easing, useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';



const RegCoursesCard = ({ items }) => {
    // state for handling dropdown open & close
    const [open, setOpen] = useState(false);

    // animation starting point
    const animatedValueLeft1 = useSharedValue(-50);
    const animatedValueLeft2 = useSharedValue(-70);

    // handling opening the dropdown
    const toggleOpen = () => {
        slideInFromLeft1();
        slideInFromLeft2();
        setOpen(!open);
    };
    // handling closing the dropdown
    const toggleClose = () => {
        slideInToLeft1();
        slideInToLeft2();
        handleClose();
    };

    // handling the delay state updation
    const handleClose = () => {
        setTimeout(() => {
            setOpen(false);
        }, 500);
    }

    // handling lecture content sliding from left
    const slideInFromLeft1 = () => {
        animatedValueLeft1.value = withTiming(open ? 0 : 60, {
            duration: 200, // Adjust the duration as needed
            easing: Easing.inOut(Easing.linear),
        });
    };

    // handling lab content sliding from left
    const slideInFromLeft2 = () => {
        animatedValueLeft2.value = withTiming(open ? 0 : 60, {
            duration: 500, // Adjust the duration as needed
            easing: Easing.inOut(Easing.linear),
        });
    };

    // handling lecture content sliding into left
    const slideInToLeft1 = () => {
        animatedValueLeft1.value = withTiming(open ? -280 : 0, {
            duration: 500, // Adjust the duration as needed
            easing: Easing.inOut(Easing.linear),
        });
    };

    // handling lab content sliding into left
    const slideInToLeft2 = () => {
        animatedValueLeft2.value = withTiming(open ? -280 : 0, {
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

    return (
        <View style={styles.container}>
            <View style={styles.outerCont}
            >
                <TouchableOpacity
                    style={styles.innerCont}
                    onPress={() => open ? toggleClose() : toggleOpen()}
                >
                    <View>
                        <Text style={styles.txt}>{items.code}</Text>
                        <Text style={styles.txt}>{items.name}</Text>
                    </View>
                    {open ?
                        <Entypo
                            name='chevron-small-up'
                            size={30}
                            color={Colors.black}
                        />
                        :
                        <Entypo
                            name='chevron-small-down'
                            size={30}
                            color={Colors.black}
                        />
                    }
                </TouchableOpacity>
                {open ?
                    <View style={[styles.detailsCont,]}>
                        <View style={styles.subCont}>
                            <Animated.View
                                style={[styles.innerSub, containerLeftStyle1]}
                            >
                                <Text style={styles.subTxt}>{items.lecture}</Text>
                                {items.lectureCompleted ?
                                    ''
                                    :
                                    <AntDesign
                                        name="exclamationcircle"
                                        size={15}
                                        color={Colors.red}
                                        style={styles.warnIcon}
                                    />
                                }
                            </Animated.View>
                            <Animated.View
                                style={[styles.innerSub, containerLeftStyle2]}
                            >
                                <Text style={styles.subTxt}>{items.lab}</Text>
                                {items.labCompleted ?
                                    ''
                                    :
                                    <AntDesign
                                        name="exclamationcircle"
                                        size={15}
                                        color={Colors.red}
                                        style={styles.warnIcon}
                                    />
                                }
                            </Animated.View>
                        </View>
                    </View>
                    :
                    ''
                }
                <Animated.View
                    style={styles.statusCont}
                >
                    <Text style={styles.statusTxt}>{items.registered ? 'Registered' : 'Pending'}</Text>
                    <Text style={[styles.statusTxt, { color: Colors.greyDark }]}>De-Register</Text>
                </Animated.View>
            </View>
        </View>
    )
}

export default RegCoursesCard