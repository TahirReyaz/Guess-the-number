import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Colors from '../constants/Colors';

const Header = props => {

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 70,
        paddingTop: 36,
        backgroundColor: Colors.primary,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: 'white',
        fontSize: 18,
        textDecorationLine: 'underline',
        fontFamily: 'open-sans-bold'
    }
});

export default Header;