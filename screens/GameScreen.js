import React, { useState, useRef, useEffect } from 'react'
import { View, Text, Alert, ScrollView, Dimensions, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import NumberContainer from '../components/NumberContainer'
import Card from '../components/Card'
import ButtonContainer from '../components/ButtonContainer'
import MainButton from '../components/MainButton'
import defaultStyles from '../constants/default-styles'

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

const renderListItem = (value, numOfRound) => (
  <View key={value} style={styles.listItem}>
    <Text>#{numOfRound}</Text>
    <Text>{value}</Text>
  </View>
);

const GameScreen = props => {
  const initialGuess = numberGenerator(1, 100, props.correctNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const currentMin = useRef(1), currentMax = useRef(100);
  const [pastGuesses, setPastGuesses] = useState([initialGuess]);

  const { correctNumber, onWin} = props;

  useEffect(() => {
    if(currentGuess === correctNumber) {
      onWin(pastGuesses.length);
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
      currentMin.current = currentGuess + 1;
    }
    const nextNumber = numberGenerator(currentMin.current, currentMax.current, currentGuess);
    setPastGuesses(curPastGuesses => [nextNumber, ...curPastGuesses]);
    setCurrentGuess(nextNumber);
  }

  return (
    <View style={styles.screen}>
      <Text style={defaultStyles.title}>Guess</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <ButtonContainer style={styles.buttonContainer}>
          <MainButton onPress={nextGuessHandler.bind(this, 'lower')}>
            <Ionicons name="md-remove" color="white" size={24} />          
          </MainButton>
          <MainButton onPress={nextGuessHandler.bind(this, 'higher')}>
            <Ionicons name="md-add" color="white" size={24} />          
          </MainButton>
        </ButtonContainer>
      </Card>
      <View style={styles.list}>
        <ScrollView>
          {pastGuesses.map((guess, i) => renderListItem(guess, pastGuesses.length - i))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  buttonContainer: {
    width: '80%'
  },
  button: {
    width: Dimensions.get('window').width * 0.4
  },
  list: {
    width: '80%',
    flex: 1
  },
  listItem: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 15,
    marginVertical: 10,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
});

export default GameScreen;