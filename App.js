import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ButtonStuff from './button.js';

const ShowText = () => {
  return <Text style={styles.instructions}>K Woodall Calculator</Text>
}

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.topchild}>
        <ShowText />
      </View>
      <View style={styles.child}>
        <ButtonStuff />
      </View>
      <View style={styles.nextchild}>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'coral',
  },
  child: {
    flex: 4,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'coral'
  },
  nextchild: {
    flex: 4,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'coral'
  },
  topchild: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray'
  },

  instructions: {
    fontSize: 20,
    marginTop: 17,
    textAlign: 'center',
    color: '#333333'
  }
});

