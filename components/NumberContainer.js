import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Colors from '../constants/Colors';

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
      color: Colors.primary,
      fontSize: 22
  }
});

export default NumberContainer;