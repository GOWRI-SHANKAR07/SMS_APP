import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Entypo, AntDesign } from '@expo/vector-icons';
import { Colors, heightPixel, pixelSizeHorizontal, pixelSizeVertical, widthPixel } from '../Constants/Theme'
import { styles } from '../styles/RegCoursesCard'
import Animated, { Easing, withTiming, useSharedValue, useAnimatedStyle, SlideInLeft, SlideOutLeft, Layout } from 'react-native-reanimated';



const RegCoursesCard = ({ items }) => {

    const [open, setOpen] = useState(false);
    const [lectureExit, setLectureExit] = useState(false);
    const [labExit, setLabExit] = useState(false);

    const toggleOpen = () => {
        setOpen(!open);
    };

    const toggleClose = () => {
        setLectureExit(true);
        setLectureExit(true);
        setLabExit(true);
        setTimeout(() => {
            setOpen(false);
            setLectureExit(false);
            setLabExit(false);
        }, 1000);
    };

    console.log(lectureExit, " lecture");
    console.log(labExit, " Lab");
    console.log(open, "Open");

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
                                style={[styles.innerSub]}
                                layout={Layout.springify()}
                                entering={open && SlideInLeft.duration(500)}
                                exiting={lectureExit && SlideOutLeft.duration(500)}
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
                                style={[styles.innerSub]}
                                layout={Layout.springify()}
                                entering={open && SlideInLeft.duration(700)}
                                exiting={labExit && SlideOutLeft.duration(700)}
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
                <View style={styles.statusCont}>
                    <Text style={styles.statusTxt}>{items.registered ? 'Registered' : 'Pending'}</Text>
                    <Text style={[styles.statusTxt, { color: Colors.greyDark }]}>De-Register</Text>
                </View>
            </View>
        </View>
    )
}

export default RegCoursesCard