import React, {useRef, useEffect} from 'react';
import {StyleSheet, View, Animated, Text} from 'react-native';

import LottieView from 'lottie-react-native';

import Constants, {Colors} from './core/constants';

export default function SplashScreen() {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <View style={styles.container}>
      <LottieView
        style={styles.splash}
        // ref={splashAnimation}
        source={Constants.splashLottie7}
        loop={false}
        autoPlay
      />
      <Animated.View
        style={[
          styles.fadingContainer,
          {
            // Bind opacity to animated value
            opacity: fadeAnim,
          },
        ]}>
        <Text style={styles.fadingText}>Mirai</Text>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  splash: {
    width: 600,
  },
  fadingContainer: {
    paddingHorizontal: 20,
  },
  fadingText: {
    fontSize: 28,
    fontFamily: 'RosettaBlack',
    color: Colors.mainLight,
  },
});
