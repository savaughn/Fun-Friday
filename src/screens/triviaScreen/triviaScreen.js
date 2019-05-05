import React, { Component } from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { connect } from 'react-redux';
import { GET_RANDOM_TRIVIA } from '../../state/ActionTypes';

class TriviaScreen extends Component {
    constructor(props) {
        super(props);
    }

    getTrivia = () => {
        this.props.dispatch({
            type: GET_RANDOM_TRIVIA,
        });
    };

    keyExtractor = (item) => item.index.toString();


    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={()=> this.getTrivia()}
                >
                    <Text style={styles.instructions}>Get Random trivia</Text>
                </TouchableOpacity>
                <FlatList
                    data={ this.props.trivia }
                    keyExtractor={this.keyExtractor}
                    renderItem={({item}) => <Text style={ {margin: 10 } }>{`${item.category}: ${item.question}\nCorrect Answer:${item.correctAnswer}\nMultiple Choice: ${item.multipleChoice}`}</Text>}
                />
            </View>
        );
    }
}

const mapStateToProps = ({ randomTrivia }) => ({
    trivia: randomTrivia.trivia,
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
        marginTop: 5,
    },
});


export default connect(mapStateToProps, mapDispatchToProps)(TriviaScreen);
