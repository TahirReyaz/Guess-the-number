import React from 'react'
import { View, StyleSheet } from 'react-native'

const Card = props => {

  return (
    <View style={{...styles.card, ...props.style}}>
      {props.children}
    </View>
  );
}

const styles = StyleSheet.create({
    card: {
        // iOS Shadow
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2},
        shadowOpacity: 0.26,
        // Android Shadow
        elevation: 5,
        backgroundColor: 'white',
        borderRadius: 5,
        padding: 15
      },
    
});

export default Card;