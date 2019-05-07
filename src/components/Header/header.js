import React, { Component } from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import { navigateTo } from '../../navigator/navigateTo';

class Header extends Component {

    render() {
        return (
            <View style={ styles.header}>
                <TouchableOpacity
                    onPress={()=> navigateTo('jokeScreen')}
                >
                    <Text style={styles.items}>Jokes</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={()=> navigateTo('historyScreen')}
                >
                    <Text style={styles.items}>Today in History</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={()=> navigateTo('triviaScreen')}
                >
                    <Text style={styles.items}>Trivia</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={()=> navigateTo('favoritesScreen')}
                >
                    <Text style={styles.items}>Favorites</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    items: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

export default Header;
