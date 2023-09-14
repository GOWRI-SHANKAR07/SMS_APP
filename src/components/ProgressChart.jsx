import {
  Easing,
  runTiming,
  useFont,
  useValue,
} from "@shopify/react-native-skia";
import React, { useEffect } from "react";
import { PixelRatio, View, } from "react-native";
import { styles } from "../styles/DonutChart";
import DonutChart from "./DonutChart";
import { Colors } from "../Constants/Theme";

// radius of the progress circle
const radius = PixelRatio.roundToNearestPixel(60);
const STROKE_WIDTH = 8;

export const ProgressChart = ({ descTxt1 }) => {
  // invoking the animateChart() while mounting
  useEffect(() => {
    animateChart();
  }, [])

  // progress circle percentage
  const targetPercentage = 7.94 / 10;
  const animationState = useValue(0);
  // circular progress animation handled
  const animateChart = () => {
    animationState.current = 0;
    runTiming(animationState, targetPercentage, {
      duration: 1250,
      easing: Easing.inOut(Easing.cubic),
    });
  };

  // custom fontfamily & size handled
  const font = useFont(require("../assets/fonts/Roboto-Medium.ttf"), 20);
  const smallerFont = useFont(require("../assets/fonts/Roboto-Medium.ttf"), 15);

  // conditonal checking
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
          descTxt1={descTxt1}
        />
      </View>
    </View>
  );
};

export default ProgressChart;