import React, { Component } from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { connect } from 'react-redux';
import Header from '../../components/Header/header';
import FavoritesList from '../../components/FavoritesList/favoritesList';
import Footer from "../../components/Footer/footer";

class HomeScreen extends Component {
    constructor(props) {
        super(props);
        console.log('current', this.props.favArray);
        console.log('past', this.props.favList);
    }

    render() {
        return (
            <View style={ styles.container }>
                <Header />
                <FavoritesList
                    favorites={ this.props.favArray }
                    refreshing={ this.props.refreshing }
                />
                <Footer
                    favorites={ this.props.favArray }
                />
            </View>
        );
    }
}

const mapStateToProps = ({ favorites }) => {
    return {
        favArray: favorites.favArray,
        favList: favorites.favList,
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
