import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Entypo, AntDesign } from '@expo/vector-icons';
import { Colors, heightPixel, pixelSizeHorizontal, pixelSizeVertical, widthPixel } from '../Constants/Theme'
import { styles } from '../styles/RegCoursesCard'
import Animated, { Easing, withTiming, useSharedValue, useAnimatedStyle, FlipInXUp, FlipOutXDown, SlideInUp, SlideInDown, ZoomIn, ZoomOut, FadeOut, SlideInLeft, SlideInRight } from 'react-native-reanimated';



const RegCoursesCard = ({ items }) => {

    const [open, setOpen] = useState(false);
    // const animationValue = useSharedValue(0); // Initialize it to 0

    // const containerStyle = useAnimatedStyle(() => {
    //     return {
    //         height: animationValue.value, // Apply the animated height
    //     };
    // });

    // const toggleOpen = () => {
    //     // Update the animation value based on the open state
    //     animationValue.value = withTiming(open ? 0 : 80, {
    //         duration: 300, // Adjust the duration as needed
    //         easing: Easing.inOut(Easing.ease), // Adjust the easing function as needed
    //     });

    //     // Toggle the open state
    //     setOpen(!open);
    // };

    // const toggleClose = () => {
    //     // Update the animation value based on the open state
    //     animationValue.value = withTiming(open ? 20 : 0, {
    //         duration: 300, // Adjust the duration as needed
    //         easing: Easing.inOut(Easing.ease) // Adjust the easing function as needed
    //     });

    //     // Toggle the open state
    //     setOpen(!open);
    // };


    return (
        <View style={styles.container}>
            <View style={styles.outerCont}
            >
                <TouchableOpacity
                    style={[
                        styles.innerCont,
                    ]}
                    onPress={() => open ? setOpen(false) : setOpen(true)}
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
                    <Animated.View
                        entering={SlideInUp}
                        exiting={SlideInDown.duration(30)}
                        style={styles.detailsCont}
                    >
                        <View style={styles.subCont}>
                            <View style={styles.innerSub}>
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
                            </View>
                            <View style={styles.innerSub}>
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
                            </View>
                        </View>
                    </Animated.View>
                    :
                    ''
                }
                <View style={styles.statusCont}>
                    <Text style={styles.statusTxt}>{items.registered ? 'Registered' : 'Pending'}</Text>
                    <Text style={[styles.statusTxt, { color: Colors.greyDark }]}>De-Register</Text>
                </View>
            </View>
        </View>
    )
}

export default RegCoursesCard