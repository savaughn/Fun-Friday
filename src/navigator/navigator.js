import React from 'react';
import { Router, Scene, Actions } from 'react-native-router-flux';
import JokeScreen from '../screens/jokeScreen/jokeScreen';
import HistoryScreen from '../screens/historyScreen/historyScreen';
import HomeScreen from '../screens/homeScreen/homeScreen';
import TriviaScreen from '../screens/triviaScreen/triviaScreen';

const onBackPress = () => {
    if (Actions.state.index === 0) {
        return false;
    }
    Actions.pop();
    return true;
};

const Navigator = () => (
    <Router backAndroidHandler={ () => onBackPress() }>
        <Scene key='root'>
            <Scene
                key='homeScreen'
                component={ HomeScreen }
                hideNavBar
            />
            <Scene
                key='jokeScreen'
                component={ JokeScreen }
            />
            <Scene
                key='historyScreen'
                component={ HistoryScreen }
            />
            <Scene
                key='triviaScreen'
                component={ TriviaScreen }
            />
        </Scene>
    </Router>
);

export default Navigator;
