import React from 'react';
import PINCode from '@haskkor/react-native-pincode';

import {StyleSheet, View} from 'react-native';
import Constants from '../../core/constants';

export default function Register() {
  return (
    <View style={styles.container}>
      <PINCode
        status={'choose'}
        pinCodeKeychainName={Constants.pinServiceName}
        passwordLength={6}
        touchIDDisabled
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
});
