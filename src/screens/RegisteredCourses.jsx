import { View } from 'react-native'
import React from 'react'
import RegCoursesCard from '../components/RegCouresesCard'
import { coursesData } from '../data/Courses'
import { styles } from '../styles/RegisteredCourses'

const RegisteredCoureses = () => {
  return (
    <View style={styles.container}>
      <View style={styles.coursesCont}>
        {coursesData.map(item => <RegCoursesCard key={item.id} items={item} />
        )}
      </View>
    </View>
  )
} 

export default RegisteredCoureses