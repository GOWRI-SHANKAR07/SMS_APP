import { rotate } from "@shopify/react-native-skia";
import { heightPixel, pixelSizeVertical, widthPixel } from "../Constants/Theme";

const { StyleSheet, PixelRatio } = require("react-native");


const styles = StyleSheet.create({
    container: {
        flex: 1,
        transform: 'rotate(85deg)',
    },
    donutCont: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    screenCont: {
        // borderWidth: 1,
        marginTop: pixelSizeVertical(10)
    },
    ringChartContainer: {
        width: widthPixel(130),
        height: heightPixel(138),
        justifyContent: "center",
    },
    button: {
        marginTop: 40,
        backgroundColor: "#00A8E8",
        paddingHorizontal: 60,
        paddingVertical: 15,
        borderRadius: 10,
    },
    buttonText: {
        color: "white",
        fontSize: 20,
    },

});

export { styles };