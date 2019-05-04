import React from 'react';
import { Router, Scene, Actions } from 'react-native-router-flux';
import Dashboard from '../screens/dashboard/dashboard';

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
                key='dashboard'
                component={ Dashboard }
                hideNavBar
            />
        </Scene>
    </Router>
);

export default Navigator;
