import React, { Component } from 'react';
import { FlatList, TouchableOpacity, Text, View } from 'react-native';
import { refreshScreen } from '../../navigator/navigateTo';

class Header extends Component {

    keyExtractor = (item) => item.id.toString();

    render() {
        return (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            {
                this.props.favorites &&
                <FlatList
                    data={this.props.favorites}
                    keyExtractor={this.keyExtractor}
                    renderItem={({item}) => <Text style={{margin: 10}}>{`${item.text}`}</Text>}
                    onRefresh={() => refreshScreen()}
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

export default Header;



