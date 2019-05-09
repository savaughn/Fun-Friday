import React from 'react';
import { Router, Scene, Actions } from 'react-native-router-flux';
import JokeScreen from '../screens/jokeScreen/jokeScreen';
import HistoryScreen from '../screens/historyScreen/historyScreen';
import HomeScreen from '../screens/homeScreen/homeScreen';
import TriviaScreen from '../screens/triviaScreen/triviaScreen';
import FavoritesScreen from '../screens/favoritesScreen/favoritesScreen';
import SplashScreen from "../screens/splashScreen/splashScreen";

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
                key='splashScreen'
                component={ SplashScreen }
                hideNavBar
            />
            <Scene
                key='homeScreen'
                component={ HomeScreen }
                hideNavBar
            />
            <Scene
                key='jokeScreen'
                component={ JokeScreen }
                title='Jokes'
            />
            <Scene
                key='historyScreen'
                component={ HistoryScreen }
                title='Today in History'
            />
            <Scene
                key='triviaScreen'
                component={ TriviaScreen }
                title='Trivia'
            />
            <Scene
                key='favoritesScreen'
                component={ FavoritesScreen }
                title='Past Favorites Lists'
            />
        </Scene>
    </Router>
);

export default Navigator;
