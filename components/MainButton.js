import React from 'react'
import { View, Text, TouchableOpacity, TouchableNativeFeedback, Platform, StyleSheet } from 'react-native'
import Colors from '../constants/Colors';

const MainButton = props => {
  let ButtonComponent = TouchableOpacity;
  if(Platform.OS === 'android' && Platform.Version >= 21) {
    ButtonComponent = TouchableNativeFeedback;
  }

  return (
    <ButtonComponent activeOpacity={0.6} onPress={props.onPress}>
      <View style={styles.button}>
        <Text style={styles.text}>{props.children}</Text>
      </View>
    </ButtonComponent>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    marginVertical: 10,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 3
  },
  text: {
    color: 'white',
    fontSize: 18
  }
});

export default MainButton;