import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import Colors from '../constants/Colors';

const GameOverScreen = props => {

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Game Over</Text>
      <Text>Total number of rounds: {props.guesses}</Text>
      <Text>The number was {props.num}</Text>
      <View style={styles.button}>
        <Button title="New Game" color={Colors.primary} onPress={props.onNewGame} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 20,
    marginVertical: 10
  },
  button: {
    width: '40%',
    marginVertical: 10
  }
});

export default GameOverScreen;