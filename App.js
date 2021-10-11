import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import GameStartScreen from './screens/GameStartScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen'

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [totalRounds, setTotalRounds] = useState(0);

  const startGame = selectedNumber => {
    setUserNumber(selectedNumber);
    setTotalRounds(0);
  }
  const endGame = num => {
    setTotalRounds(num);
  }
  const newGame = () => {
    setUserNumber();
    screen = <GameStartScreen startGameHandler={startGame} />;
  }

  let screen = <GameStartScreen startGameHandler={startGame} />;
  if(userNumber && totalRounds <= 0) {
    screen = <GameScreen correctNumber={userNumber} onWin={endGame} />;
  } else if(totalRounds > 0) {
    screen = <GameOverScreen num={totalRounds} onNewGame={newGame} />
  }

  return (
    <View style={styles.screen}>
      <StatusBar style="auto" />
      <Header title="GUESS THE NUMBER" />
      {screen}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
