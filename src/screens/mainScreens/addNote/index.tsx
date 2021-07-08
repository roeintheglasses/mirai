import React from 'react';
import {useState} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {Colors} from '../../../core/constants';

function AddNote() {
  const [noteTitle, setNoteTitle] = useState<string>('');
  const [note, setNote] = useState<string>('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.actionBarContainer}>
        <Text> Action Bar</Text>
      </View>
      <View style={styles.contentContainer}>
        <TextInput
          style={[styles.textInput, styles.textInputTitle]}
          onChangeText={(value: any) => {
            setNoteTitle(value);
          }}
          value={noteTitle}
          autoCorrect={false}
          enablesReturnKeyAutomatically={true}
          textAlign={'center'}
          textAlignVertical={'top'}
          textBreakStrategy={'highQuality'}
          placeholder={'Title'}
        />
        <KeyboardAwareScrollView style={styles.noteAreaContainer}>
          <TextInput
            style={[styles.textInput, styles.textInputNote]}
            onChangeText={(value: any) => {
              setNote(value);
            }}
            value={note}
            multiline
            autoCorrect={false}
            enablesReturnKeyAutomatically={true}
            textAlign={'left'}
            textAlignVertical={'top'}
            textBreakStrategy={'highQuality'}
            placeholder={'Note'}
          />
        </KeyboardAwareScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.mainDark,
    alignItems: 'center',
    justifyContent: 'center',
    width: Dimensions.get('window').width,
  },
  actionBarContainer: {
    flex: 0.1,
    width: '100%',
    borderColor: Colors.mainLight,
    borderWidth: 1,
  },
  contentContainer: {
    flex: 0.9,
    width: '100%',
    borderColor: Colors.mainLight,
    borderWidth: 1,
  },
  titleAreaContainer: {
    flex: 0.1,
    borderColor: Colors.mainLight,
    width: '100%',
    height: 20,
    borderWidth: 1,
  },
  noteAreaContainer: {
    flex: 0.9,
    borderColor: Colors.mainLight,
    width: '100%',
    height: Dimensions.get('window').height * 0.7,
    borderWidth: 1,
  },
  textInput: {
    color: Colors.mainLight,
    margin: 12,
    width: '100%',
  },
  textInputTitle: {
    color: Colors.mainActiveRed,
    fontSize: 25,
    paddingVertical: 0,
  },
  textInputNote: {
    color: Colors.mainLight,
    fontSize: 12,
  },
});

export default AddNote;
