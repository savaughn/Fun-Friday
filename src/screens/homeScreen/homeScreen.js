import React, { Component } from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { connect } from 'react-redux';
import Header from '../../components/Header/header';
import FavoritesList from '../../components/FavoritesList/favoritesList';

class HomeScreen extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Header />
                <FavoritesList
                    favorites={this.props.favorites}
                    refreshing={this.props.refreshing}
                />
            </View>
        );
    }
}

const mapStateToProps = ({ favorites }) => {
    return {
        favorites: favorites.favorites,
        refreshing: favorites.refreshing,
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        marginTop: 50,
    },
});

export default connect(mapStateToProps)(HomeScreen);
