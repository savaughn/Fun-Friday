import React, { Component } from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

class HomeScreen extends Component {
    constructor(props) {
        super(props);
    }

    getJoke = () => {
        Actions.push('jokes');
    };

    getHistoryFact = () => {
        Actions.push('dateHistory');
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>{this.props.setup}</Text>
                <Text style={styles.instructions}>{this.props.punchline}</Text>
                <TouchableOpacity
                    onPress={()=> this.getJoke()}
                >
                    <Text style={styles.instructions}>Jokes</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={()=> this.getHistoryFact()}
                >
                    <Text style={styles.instructions}>History Facts</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const mapStateToProps = ({ randomJoke }) => ({
    setup: randomJoke.setup,
    punchline: randomJoke.punchline,
});

const mapDispatchToProps = dispatch => ({
    dispatch,
});


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


export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
