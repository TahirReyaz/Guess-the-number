import React, { useState, useRef, useEffect } from 'react'
import { View, Text, Button, Alert, StyleSheet } from 'react-native'
import NumberContainer from '../components/NumberContainer'
import Card from '../components/Card'
import ButtonContainer from '../components/ButtonContainer'
import Colors from '../constants/Colors'

const numberGenerator = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    let rndNum = min + Math.floor(Math.random() * (max - min));
    if(rndNum === exclude) {
      return numberGenerator(min, max, exclude);
    } else {
      return rndNum;
    }
}

const GameScreen = props => {
  const [currentGuess, setCurrentGuess] = useState(numberGenerator(1, 100, props.correctNumber));
  const currentMin = useRef(1), currentMax = useRef(100);
  const [rounds, setRounds] = useState(0);

  const { correctNumber, onWin} = props;

  useEffect(() => {
    if(currentGuess === correctNumber) {
      onWin(rounds);
    }
  }, [currentGuess, correctNumber, onWin])

  const nextGuessHandler = dir => {
    if((dir === 'lower' && currentGuess < props.correctNumber) || (dir === 'higher' && currentGuess > props.correctNumber)) {
      Alert.alert('Wrong Choice', 'Dude. It isn\'t so hard that you are commiting such silly mistakes', [{text: 'Call a Psychiatrist', style: 'cancel'}]);
      return;
    }
    if(dir === 'lower') {
      currentMax.current = currentGuess;
    } else {
      currentMin.current = currentGuess;
    }
    setRounds(curRounds => curRounds + 1);
    setCurrentGuess(numberGenerator(currentMin.current, currentMax.current, currentGuess));
  }

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Guess</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <ButtonContainer style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Lower" color={Colors.primary} onPress={nextGuessHandler.bind(this, 'lower')} />
          </View>
          <View style={styles.button}>
            <Button title="Higher" color={Colors.primary} onPress={nextGuessHandler.bind(this, 'higher')} />
          </View>
        </ButtonContainer>
      </Card>
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
    buttonContainer: {
      width: '80%'
    },
    button: {
      width: '40%'
    }
});

export default GameScreen;