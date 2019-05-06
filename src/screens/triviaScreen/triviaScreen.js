import React, { Component } from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { connect } from 'react-redux';
import { GET_RANDOM_TRIVIA, SAVE_TO_FAVORITES } from '../../state/ActionTypes';

class TriviaScreen extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if (!this.props.trivia.length) {
            this.getTrivia();
        }
    }

    getTrivia = () => {
        this.props.dispatch({
            type: GET_RANDOM_TRIVIA,
        });
    };

    saveToFavorite = (item) => {
        this.props.dispatch({
            type: SAVE_TO_FAVORITES,
            payload: {item, favArray: this.props.favorites},
        });
    };

    keyExtractor = (item) => item.id.toString();

    renderItem = ({item}) => (
        <TouchableOpacity
            onPress={ () => this.saveToFavorite(item) }
        >
            <Text style={ {margin: 10 } }>{`${item.category}: ${item.question}\nCorrect Answer:${item.correctAnswer}\nMultiple Choice: ${item.multipleChoice}`}</Text>
        </TouchableOpacity>
    );


    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={ this.props.trivia }
                    keyExtractor={this.keyExtractor}
                    renderItem={ this.renderItem }
                    onRefresh={()=> this.getTrivia()}
                    refreshing={ this.props.refreshing }
                />
            </View>
        );
    }
}

const mapStateToProps = ({ randomTrivia, favorites }) => ({
    trivia: randomTrivia.trivia,
    refreshing: randomTrivia.refreshing,
    favorites: favorites.favorites,
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
    item: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
        marginTop: 5,
    },
});


export default connect(mapStateToProps, mapDispatchToProps)(TriviaScreen);
