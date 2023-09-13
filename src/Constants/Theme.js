import { useWindowDimensions } from "react-native";
import { Dimensions } from 'react-native';
import { PixelRatio } from 'react-native';

// colors
export const Colors = {
    primary: '#385fc3', //Blue
    secondary: '#121a14',

    black: '#000',
    white: '#FFFFFF',
    black2: '#585858',
    green: '#00e600',
    red: '#cc0000',

    grey: '#F6F4F4',
    greyDark: '#717070',
    greyBorder: '#939393',
    greyplaceholder: '#A3A3A3',
    greyMessage: '#E1E1E1',
    arrow: '#C9C9C9',

    bottomGradient:
        'linear-gradient(180deg, rgba(196, 196, 196, 0) 0%, rgba(178, 178, 178, 0.0442647) 43.23%, rgba(108, 108, 108, 0.215) 70.83%, rgba(37, 37, 37, 0.389659) 84.9%, rgba(0, 0, 0, 0.48) 100%);',
    avatarbg: '#F3F3F3',
    avatarbr: '#EBEBEB',
    search: '#9C9C9C',
    prefer: '#8C8C8C',
    project: '#FF0000',
    discrip: '#585858',
};

const {
    primary,
    secondary,
    teritary,
    black,
    grey,
    white,
    greyplaceholder,
    avatarbg,
    avatarbr,
    search,
    prefer,
    grey2,
    project,
    discrip,
} = Colors;

// fonts
export const Fonts = {
    PoppinsBold: 'Poppins-Bold',
    PoppinsLight: 'Poppins-Light',
    PoppinsRegular: 'Poppins-Regular',
    PoppinsMedium: 'Poppins-Medium',
    PoppinsSemiBold: 'Poppins-SemiBold',
    Roboto: 'Roboto-Light',
};

const {
    PoppinsBold,
    PoppinsLight,
    PoppinsMedium,
    PoppinsRegular,
    PoppinsSemiBold,
    Roboto,
} = Fonts;

const {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT
} = Dimensions.get('window');

const widthBaseScale = SCREEN_WIDTH / 414;
const heightBaseScale = SCREEN_HEIGHT / 896;


function normalize(size, based = 'width') {
    const newSize = (based === 'height') ?
        size * heightBaseScale : size * widthBaseScale;
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
}

//for width  pixel
const widthPixel = (size) => {
    return normalize(size, 'width');
};
//for height  pixel
const heightPixel = (size) => {
    return normalize(size, 'height');
};
//for font  pixel
const fontPixel = (size) => {
    return heightPixel(size);
};
//for Margin and Padding vertical pixel
const pixelSizeVertical = (size) => {
    return heightPixel(size);
};
//for Margin and Padding horizontal pixel
const pixelSizeHorizontal = (size) => {
    return widthPixel(size);
};

export {
    widthPixel,
    heightPixel,
    fontPixel,
    pixelSizeVertical,
    pixelSizeHorizontal
};