import React, { Component } from 'react';
import { FlatList, TouchableOpacity, Text, View } from 'react-native';
import {connect} from 'react-redux';
import { refreshScreen } from '../../navigator/navigateTo';
import { REMOVE_FROM_FAVORITES } from '../../state/ActionTypes';

class FavoritesList extends Component {

    keyExtractor = (item) => item.id.toString();

    renderItem = ({item}) => (
        <TouchableOpacity
            onPress={ () => {
                this.props.dispatch({
                    type: REMOVE_FROM_FAVORITES,
                    payload: {item, favArray: this.props.favorites},
                });
            } }
        >
            <Text style={{margin: 10}}>{`${item.text}`}</Text>
        </TouchableOpacity>
    );

    render() {
        return (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            {
                this.props.favorites &&
                <FlatList
                    data={this.props.favorites}
                    keyExtractor={this.keyExtractor}
                    renderItem={ this.renderItem }
                    onRefresh={() => refreshScreen(this.props.favorites)}
                    refreshing={this.props.refreshing}
                />
            }
            {
                !this.props.favorites.length &&
                <Text>Favorites List</Text>
            }
            </View>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    dispatch,
});

export default connect(mapDispatchToProps)(FavoritesList);



