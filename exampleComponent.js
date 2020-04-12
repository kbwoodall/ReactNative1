// exampleComponent.js
import React, { useContext } from 'react';
import { store } from './store.js';

const ExampleComponent = () => {
    const globalState = useContext(store);
    const { dispatch } = globalState;

    dispatch({ type: 'action description' })
    console.log("state is " + globalState.state);
    //return null;
};