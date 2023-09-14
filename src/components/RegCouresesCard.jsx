import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Entypo, AntDesign } from '@expo/vector-icons';
import { Colors, heightPixel, pixelSizeHorizontal, pixelSizeVertical, widthPixel } from '../Constants/Theme'
import { styles } from '../styles/RegCoursesCard'


const RegCoursesCard = ({ items }) => {

    const [open, setOpen] = useState(false)

    return (
        <View style={styles.container}>
            <View style={styles.outerCont}>
                <TouchableOpacity
                    style={styles.innerCont}
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
                    <View style={styles.detailsCont}>
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