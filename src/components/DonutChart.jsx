import React from "react";
import {
    Canvas,
    Path,
    Skia,
} from "@shopify/react-native-skia";
import { View } from "react-native";
import { styles } from "../styles/DonutChart";

function DonutChart({
    strokeWidth,
    radius,
    percentageComplete,
    descTxt1,
}) {
    // inner radius of the circle
    const innerRadius = radius - strokeWidth / 2;
    // creating skia path
    const path = Skia.Path.Make();
    // creating a circle using the path
    path.addCircle(radius, radius, innerRadius);

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
                    start={0}
                    end={percentageComplete}
                />
            </Canvas>
        </View>
    );
}

export default DonutChart;