import React from 'react'
import { View, Text, Button, ScrollView, Image, StyleSheet } from 'react-native'
import Colors from '../constants/Colors';

const GameOverScreen = props => {

  return (
    <ScrollView>
    <View style={styles.screen}>
      <Text style={styles.title}>Game Over</Text>
      <Image style={styles.img} resizeMode='contain' source={require('../assets/images/gameover.png')} />
      <Text>Total number of rounds: {props.guesses}</Text>
      <Text>The number was {props.num}</Text>
      <View style={styles.button}>
        <Button title="New Game" color={Colors.primary} onPress={props.onNewGame} />
      </View>
    </View>
    </ScrollView>
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
  },
  img: {
    width: '100%',
    height: 200
  }
});

export default GameOverScreen;