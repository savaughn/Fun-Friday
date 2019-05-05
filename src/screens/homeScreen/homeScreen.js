import React, { Component } from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

class HomeScreen extends Component {
    constructor(props) {
        super(props);
    }

    goToJokeScreen = () => {
        Actions.push('jokeScreen');
    };

    goToHistoryScreen = () => {
        Actions.push('historyScreen');
    };

    goToTriviaScreen = () => {
        Actions.push('triviaScreen');
    };

    keyExtractor = (item) => item.id.toString();

    render() {
        return (
            <View style={styles.container}>
                <View style={ styles.header}>
                    <TouchableOpacity
                        onPress={()=> this.goToJokeScreen()}
                    >
                        <Text style={styles.items}>Jokes</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={()=> this.goToHistoryScreen()}
                    >
                        <Text style={styles.items}>Today in History</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={()=> this.goToTriviaScreen()}
                    >
                        <Text style={styles.items}>Trivia</Text>
                    </TouchableOpacity>
                </View>
                {
                    this.props.favorites &&
                    <FlatList
                        data={ this.props.favorites }
                        keyExtractor={this.keyExtractor}
                        renderItem={({item}) => <Text style={ {margin: 10 } }>{`${item.text}`}</Text>}
                    />
                }
            </View>
        );
    }
}

const mapStateToProps = ({ favorites }) => ({
    favorites: favorites.favorites,
});

const mapDispatchToProps = dispatch => ({
    dispatch,
});


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        marginTop: 50,
    },
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


export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
