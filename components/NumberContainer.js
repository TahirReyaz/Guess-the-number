import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const NumberContainer = props => {

  return (
    <View style={styles.container}>
      <Text style={styles.number}>
          {props.children}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      marginVertical: 10
  },
  number: {
      color: 'white',
      fontSize: 80,
      textShadowColor: 'rgba(0, 0, 0, 0.5)',
      textShadowOffset: {width: -1, height: 1},
      textShadowRadius: 10
  }
});

export default NumberContainer;