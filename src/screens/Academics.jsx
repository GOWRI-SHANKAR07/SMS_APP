import { View, Text, Platform, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from '../styles/Academics'
import { SimpleLineIcons, AntDesign, EvilIcons } from '@expo/vector-icons';
import { Colors, fontPixel, pixelSizeHorizontal, widthPixel } from '../Constants/Theme'
import CoursesCard from '../components/CoursesCard'
import { coursesData } from '../data/Courses'
import ProgressChart from '../components/ProgressChart';


const Academics = () => {

  const descTxt1 = 'CGPA';
  const descTxt2 = 'GPA';

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
        <Text style={styles.headerTxt}>Courses</Text>
        <TouchableOpacity>
          <AntDesign
            name='menufold'
            size={30}
            color={'red'}
            style={styles.menu}
          />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={styles.chartCont}>
          <Text style={styles.innerTxt}>2021/UG/LB-VU/Independence-3</Text>
          <Text style={styles.innerTxt}>Independence-3</Text>
          <View>
            <View style={styles.progressCont}>
              <ProgressChart descTxt1={descTxt1} />
              <ProgressChart descTxt2={descTxt2} />
            </View>
            <View style={styles.desTxt1}>
              <Text style={{ fontSize: fontPixel(20), fontFamily: 'Montserrat-Medium', }}>
                {descTxt1}
              </Text>
              <Text style={{fontFamily: 'Montserrat-Medium',}}>7.94</Text>
            </View>
            <View style={styles.desTxt2}>
              <Text style={{ fontSize: fontPixel(20), fontFamily: 'Montserrat-Medium', }}>
                {descTxt2}
              </Text>
              <Text style={{fontFamily: 'Montserrat-Medium',}}>7.94</Text>
            </View>
          </View>
        </View>
        <View style={styles.coursesCont}>
          <Text style={styles.coursesTxt}>Registered Courses</Text>
          {coursesData.map(item => <CoursesCard key={item.id} items={item} />
          )}
        </View>
      </ScrollView>
    </View>
  )
}

export default Academics