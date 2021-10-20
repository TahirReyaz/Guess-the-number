import React from 'react'
import { View, StyleSheet } from 'react-native'

const ButtonContainer = props => {

  return (
    <View style={{...styles.buttonContainer, ...props.style}}>
      {props.children}
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 15
  }
});

export default ButtonContainer;