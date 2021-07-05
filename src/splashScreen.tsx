import React, {useRef, useEffect} from 'react';
import {StyleSheet, View, Animated, Text} from 'react-native';

import LottieView from 'lottie-react-native';

import Constants, {Colors} from './core/constants';
import {Dimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {hasUserSetPinCode} from '@haskkor/react-native-pincode';

export default function SplashScreen() {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation();

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
    setTimeout(() => {
      navigateToAuth();
    }, 2000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const navigateToAuth = async () => {
    // await deleteUserPinCode(Constants.pinServiceName);

    let hasPin = await hasUserSetPinCode(Constants.pinServiceName);
    console.log('Log :  ~ navigateToAuth ~ hasPin', hasPin);

    hasPin ? navigation.navigate('Login') : navigation.navigate('Register');
  };

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
    backgroundColor: Colors.mainDark,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  splash: {
    marginTop: 60,
    width: Dimensions.get('window').width,
  },
  fadingContainer: {
    paddingHorizontal: 20,
    marginTop: -100,
  },
  fadingText: {
    fontSize: 140,
    fontFamily: 'RosettaBlack',
    color: Colors.mainLight,
  },
});
