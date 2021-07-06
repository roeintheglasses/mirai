import React from 'react';
import {StyleSheet, View, SafeAreaView} from 'react-native';
import {Colors, Size} from '../../../core/constants';
import {TextArea, TextField, Button} from 'react-native-ui-lib';

function AddNote() {
  return (
    <View style={styles.container}>
      {/* <TextField title={'Title'} titleColor={Colors.mainRed} /> */}
      <TextArea
        style={styles.textArea}
        center={false}
        containerStyle={styles.textAreaContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: Colors.mainDark,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: Size.mainVerticlePadding,
  },
  textAreaContainer: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: '100%',
    height: '100%',
  },
  textArea: {
    color: Colors.mainLight,
    textAlign: 'left',
  },
});

export default AddNote;
