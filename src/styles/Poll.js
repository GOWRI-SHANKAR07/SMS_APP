import { Colors, fontPixel, pixelSizeHorizontal, pixelSizeVertical, widthPixel, } from "../Constants/Theme";

const { StyleSheet } = require("react-native");

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flex: 1,
        backgroundColor: Colors.white
    },

    headerCont: {
        flexDirection: "row",
        padding: pixelSizeVertical(20),
        borderWidth: 1,
        borderColor: '#ffffff00',
        marginTop: pixelSizeVertical(10),
        bottom: pixelSizeVertical(10),
    },

    headerTxt: {
        color: Colors.black,
        fontSize: fontPixel(23), 
        fontFamily: 'Montserrat-SemiBold',
        marginLeft: pixelSizeHorizontal(60),
    },

    androidShadow: {
        elevation: 5,
        shadowColor: Colors.black
    },

    iosShadow: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },

    inpCont: {
        // borderWidth: 1,
        margin: pixelSizeHorizontal(10),
    },

    innerCont: {
        // borderWidth: 1,
        margin: pixelSizeHorizontal(10),
    },

    titleTxt: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: fontPixel(18)
    },

    inpTxtCont: {
        marginBottom: pixelSizeVertical(20),
    },

    charactersTxt: {
        marginTop: pixelSizeVertical(10),
        color: Colors.greyplaceholder,
        fontFamily: 'Montserrat-Medium'  
    },

    addCont: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: Colors.greyBorder,
        borderRadius: 50,
        width: widthPixel(150),
        alignItems: "center",
        justifyContent: "space-between",
        padding: pixelSizeHorizontal(5),
        paddingLeft: pixelSizeHorizontal(10),
        paddingRight: pixelSizeHorizontal(12),
        marginTop: pixelSizeVertical(20),
    },

    addTxt: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: fontPixel(15),
        color: Colors.greyDark,
    },

    doneBtn: {
        backgroundColor: Colors.darkblue,
        marginTop: pixelSizeVertical(50),
        padding: pixelSizeHorizontal(12),
        borderRadius: 5,
    },

    doneTxt: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: fontPixel(18),
        textAlign: "center",
        color: Colors.white
    }

})

export {  styles };