import React from 'react';
import PINCode from '@haskkor/react-native-pincode';

import {StyleSheet, View} from 'react-native';
import Constants, {Colors} from '../../core/constants';
import {useNavigation} from '@react-navigation/native';

export default function Login() {
  const navigation = useNavigation();

  const onRightPinEnter = () => {
    navigation.navigate('Main');
  };
  return (
    <View style={styles.container}>
      <PINCode
        status={'enter'}
        pinCodeKeychainName={Constants.pinServiceName}
        passwordLength={6}
        touchIDDisabled
        finishProcess={onRightPinEnter}
        styleMainContainer={styles.pincodeContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pincodeContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.mainDark,
  },
});
