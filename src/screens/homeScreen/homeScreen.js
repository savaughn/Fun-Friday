import React, { Component } from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { Actions } from 'react-native-router-flux';

class HomeScreen extends Component {
    goToJokeScreen = () => {
        Actions.push('jokeScreen');
    };

    goToHistoryScreen = () => {
        Actions.push('historyScreen');
    };

    goToTriviaScreen = () => {
        Actions.push('triviaScreen');
    };

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={()=> this.goToJokeScreen()}
                >
                    <Text style={styles.instructions}>Jokes</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={()=> this.goToHistoryScreen()}
                >
                    <Text style={styles.instructions}>History Facts</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={()=> this.goToTriviaScreen()}
                >
                    <Text style={styles.instructions}>Random Trivia</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});


export default HomeScreen;
