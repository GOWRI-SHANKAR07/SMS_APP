import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Entypo, AntDesign } from '@expo/vector-icons';
import { Colors, heightPixel, pixelSizeHorizontal, pixelSizeVertical, widthPixel } from '../Constants/Theme'
import { styles } from '../styles/RegCoursesCard'
// import Animated, { Easing, withTiming, useSharedValue, useAnimatedStyle, SlideInLeft, SlideOutLeft, Layout, SlideInDown, SlideInUp, SlideOutUp } from 'react-native-reanimated';
import Animated, { Easing, withSpring, useSharedValue, useAnimatedStyle, withRepeat, withTiming } from 'react-native-reanimated';



const RegCoursesCard = ({ items }) => {

    const [open, setOpen] = useState(false);
    const [lectureExit, setLectureExit] = useState(false);
    const [labExit, setLabExit] = useState(false);

    const animatedValueLeft1 = useSharedValue(-50);
    const animatedValueLeft2 = useSharedValue(-70);


    const toggleOpen = () => {
        slideInFromLeft1();
        slideInFromLeft2();
        setOpen(!open);
    };

    const toggleClose = () => {
        slideInToLeft1();
        slideInToLeft2();
        // setOpen(false);
        handleClose();
    };

    const handleClose = () => {
        setTimeout(() => {
            setOpen(false);
        }, 500);
    }


    console.log(lectureExit, " lecture");
    console.log(labExit, " Lab");
    console.log(open, "Open");

    const slideInFromLeft1 = () => {
        animatedValueLeft1.value = withTiming(open ? 0 : 60, {
            duration: 200, // Adjust the duration as needed
            easing: Easing.inOut(Easing.linear),
        });
    };


    const slideInFromLeft2 = () => {
        animatedValueLeft2.value = withTiming(open ? 0 : 60, {
            duration: 500, // Adjust the duration as needed
            easing: Easing.inOut(Easing.linear),
        });
    };

    const slideInToLeft1 = () => {
        animatedValueLeft1.value = withTiming(open ? -280 : 0, {
            duration: 500, // Adjust the duration as needed
            easing: Easing.inOut(Easing.linear),
        });
    };


    const slideInToLeft2 = () => {
        animatedValueLeft2.value = withTiming(open ? -280 : 0, {
            duration: 200, // Adjust the duration as needed
            easing: Easing.inOut(Easing.linear),
        });
    };



    const containerLeftStyle1 = useAnimatedStyle(() => {
        return {
            transform: [{ translateX: animatedValueLeft1.value }],
        };
    });

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
                    style={[
                        styles.innerCont,
                        {
                            // height: open ? heightPixel(170) : 'auto'
                        }
                    ]}
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
                            // entering={open && SlideInLeft.duration(500)}
                            // exiting={lectureExit && SlideOutLeft.duration(500)}
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
                            // entering={open && SlideInLeft.duration(700)}
                            // exiting={labExit && SlideOutLeft.duration(700)}
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
                // entering={open && SlideInDown.duration(500)}
                // exiting={SlideInUp.duration(5000)}
                >
                    <Text style={styles.statusTxt}>{items.registered ? 'Registered' : 'Pending'}</Text>
                    <Text style={[styles.statusTxt, { color: Colors.greyDark }]}>De-Register</Text>
                </Animated.View>
            </View>
        </View>
    )
}

export default RegCoursesCard