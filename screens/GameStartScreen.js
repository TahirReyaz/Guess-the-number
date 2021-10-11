import React, { useState } from 'react'
import { View, Text, Button, StyleSheet, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native'
import Card from '../components/Card'
import Colors from '../constants/Colors'
import Input from '../components/Input'
import NumberContainer from '../components/NumberContainer'
import ButtonContainer from '../components/ButtonContainer'

const GameStartScreen = props => {

  const [input, setInput] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();

  const inputHandler = enteredValue => {
    setInput(enteredValue.replace(/[^0-9]/g, ''));
  }

  const resetHandler = () => {
    setInput('');
    setConfirmed(false);
  }

  const confirmHandler = () => {
    const chosenNumber = parseInt(input);
    if( isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert('Invalid Number!', 'Number has to be between 0 and 99', [{text: 'You had one job', style: 'destructive', onPress: resetHandler}]);
      return;
    }
    setConfirmed(true);
    setInput(''); 
    setSelectedNumber(chosenNumber); // We can still access the input's value which is not empty
    Keyboard.dismiss();
  }

  let confirmedOutput;
  if(confirmed) {
    confirmedOutput =
      <Card style={styles.startGame}>
        <Text>Chosen Number is</Text>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <Button title="Start Game" color={Colors.primary} onPress= {() => props.startGameHandler(selectedNumber)} />
      </Card>
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    <View style={styles.screen}>
      <Text style={styles.title}>Start Game Screen</Text>
      <Card style={styles.inputContainer}>
        <Text>Select a Number</Text>
        <Input value={input} keyboardType="number-pad" maxLength={2} style={styles.input} onChangeText={inputHandler} />
        <ButtonContainer>
          <View style={styles.button}>
            <Button title="Confirm" color={Colors.primary} onPress={confirmHandler} />
          </View>
          <View style={styles.button} >
            <Button title="Reset" color="grey" onPress={resetHandler} />
          </View>
        </ButtonContainer>
      </Card>
      {confirmedOutput}
    </View>
    </TouchableWithoutFeedback>
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
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center'
  },
  input: {
    width: 50,
    textAlign: 'center'
  },
  button: {
      width: '40%'
  },
  startGame: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
    marginTop: 20
  }
});

export default GameStartScreen;