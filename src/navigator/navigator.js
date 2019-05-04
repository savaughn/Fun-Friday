import React from 'react';
import { Router, Scene, Actions } from 'react-native-router-flux';
import JokeScreen from '../screens/jokeScreen/jokeScreen';
import DateHistory from '../screens/dateHistory/dateHistory';
import HomeScreen from '../screens/homeScreen/homeScreen';

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
                key='home'
                component={ HomeScreen }
                hideNavBar
            />
            <Scene
                key='jokes'
                component={ JokeScreen }
            />
            <Scene
                key='dateHistory'
                component={ DateHistory }
            />
        </Scene>
    </Router>
);

export default Navigator;
