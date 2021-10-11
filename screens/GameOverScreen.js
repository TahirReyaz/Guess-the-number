import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import Colors from '../constants/Colors';

const GameOverScreen = props => {

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Game Over</Text>
      <Text>{props.num}</Text>
      <Button title="New Game" color={Colors.primary} onPress={props.onNewGame} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    marginVertical: 10
  },
  button: {
    width: '40%'
  }
});

export default GameOverScreen;