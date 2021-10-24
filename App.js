import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, Text, View } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import Header from './components/Header';
import GameStartScreen from './screens/GameStartScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });
};

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [totalRounds, setTotalRounds] = useState(0);
  const [fontLoaded, setFontLoaded] = useState(false);

  if(!fontLoaded) {
    return (
      <AppLoading 
        startAsync={fetchFonts} 
        onFinish={() => setFontLoaded(true)} 
        onError={(err) => console.log(err)} 
      />
    );
  }

  const startGame = selectedNumber => {
    setUserNumber(selectedNumber);
    setTotalRounds(0);
  }
  const endGame = num => {
    setTotalRounds(num);
  }
  const newGame = () => {
    setTotalRounds(0);
    setUserNumber(null);
    screen = <GameStartScreen startGameHandler={startGame} />;
  }

  let screen = <GameStartScreen startGameHandler={startGame} />;
  if(userNumber && totalRounds <= 0) {
    screen = <GameScreen correctNumber={userNumber} onWin={endGame} />;
  } else if(totalRounds > 0) {
    screen = <GameOverScreen guesses={totalRounds} num={userNumber} onNewGame={newGame} />
  }

  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar style="auto" />
      <Header title="GUESS THE NUMBER" />
      {screen}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
