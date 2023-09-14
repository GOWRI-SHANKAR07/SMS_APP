import { useCallback, useEffect } from 'react';
import { Text, View, StyleSheet, SafeAreaView } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import AppStack from './src/stack/AppStack';
import { pixelSizeVertical } from './src/Constants/Theme';

SplashScreen.preventAutoHideAsync();

export default function App() {
  // loading fonts
  const [fontsLoaded] = useFonts({
    'Montserrat-Medium': require('./src/assets/fonts/Montserrat-Medium.ttf'),
    'Montserrat-Bold': require('./src/assets/fonts/Montserrat-Bold.ttf'),
    'Montserrat-SemiBold': require('./src/assets/fonts/Montserrat-SemiBold.ttf'),
  });

  // checking whether the font is loaded to inkoke a func
  useEffect(() => {
    if (fontsLoaded) {
      onLayoutRootView();
    }
  }, [fontsLoaded])

  // conditional layout handling
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  } else {
    return (
      <View style={styles.container}>
        <AppStack />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: pixelSizeVertical(25)
  },
});
