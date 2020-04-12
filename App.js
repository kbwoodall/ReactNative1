import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ButtonStuff from './button.js';
import { StateProvider } from './state.js';

const ShowText = () => {
  return <Text style={styles.instructions}>K Woodall Calculator</Text>
}

export default function App() {
  const initialState = {
    theme: { primary: 'green', msg: 'Ready for calculation' }
  };

  const reducer = (state, action) => {
    console.log("action " + action);
    console.log("reducer");
    switch (action.type) {
      case 'changeTheme':
        return {
          ...state,
          theme: action.newTheme
        };
      default:
        return state;
    }
  };
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
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
    </StateProvider>
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


//Current color is: <Text>{state.currentColor}</Text>
