import React from "react";

import {
    Canvas,
    Path,
    SkFont,
    Skia,
    SkiaMutableValue,
    Text,
    useComputedValue,
    useFont,
} from "@shopify/react-native-skia";
import { StyleSheet, View } from "react-native";
import { styles } from "../styles/DonutChart";
import { Colors } from "../Constants/Theme";

function DonutChart({
    strokeWidth,
    radius,
    percentageComplete,
    font,
    targetPercentage,
    smallerFont,
    descTxt1,
    descTxt2
}) {
    const innerRadius = radius - strokeWidth / 2;
    const targetText = `${targetPercentage * 100}`;

    const path = Skia.Path.Make();
    path.addCircle(radius, radius, innerRadius);

    const width = 100;
    const titleWidth = 50;
    const start = 0;

    return (
        <View style={styles.container}>
            <Canvas style={styles.container}>
                <Path
                    path={path}
                    color={descTxt1 ? "red" : "darkblue"}
                    style="stroke"
                    strokeJoin="round"
                    strokeWidth={strokeWidth}
                    strokeCap="round"
                    start={start}
                    end={percentageComplete}
                />
            </Canvas>
        </View>
    );
}

export default DonutChart;