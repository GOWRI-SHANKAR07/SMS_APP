import {
    Easing,
    runTiming,
    useFont,
    useValue,
  } from "@shopify/react-native-skia";
  import React, { useEffect } from "react";
  import { PixelRatio, Pressable, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { styles } from "../styles/DonutChart";
import DonutChart from "./DonutChart";
import { Colors } from "../Constants/Theme";

  
  const radius = PixelRatio.roundToNearestPixel(60);
  const STROKE_WIDTH = 8;
   
  export const ProgressChart = ({ descTxt1, descTxt2 }) => {  
    useEffect(() => {
     animateChart();
    }, [])
    

    const targetPercentage = 7.94 / 10;
    const animationState = useValue(0);
  
    const animateChart = () => {
      animationState.current = 0;
      runTiming(animationState, targetPercentage, {
        duration: 1250,
        easing: Easing.inOut(Easing.cubic),
      });
    };
  
    const font = useFont(require("../assets/fonts/Roboto-Medium.ttf"), 20);
    const smallerFont = useFont(require("../assets/fonts/Roboto-Medium.ttf"), 15);
    
    if (!font || !smallerFont) {
      return <View />;
    }
  
    return (
      <View style={styles.screenCont}>
        <View style={styles.ringChartContainer}>
          <DonutChart
            backgroundColor={Colors.greyBorder}
            radius={radius}
            strokeWidth={STROKE_WIDTH}
            percentageComplete={animationState}
            targetPercentage={targetPercentage}  
            descTxt1={descTxt1}
            descTxt2={descTxt2}
            font={font}
            smallerFont={smallerFont}
          /> 
        </View>
        {/* <TouchableOpacity onPress={animateChart} style={styles.button}>
          <Text style={styles.buttonText}>Animate !</Text>
        </TouchableOpacity> */}
      </View>
    ); 
  };
  
  export default ProgressChart;