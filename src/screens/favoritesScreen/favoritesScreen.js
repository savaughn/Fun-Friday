import React, { Component } from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { connect } from 'react-redux';
import { REMOVE_FROM_FAVORITES_LIST } from '../../state/ActionTypes';
import {refreshScreen} from "../../navigator/navigateTo";

class FavoritesScreen extends Component {
  constructor(props) {
    super(props);
  }

  keyExtractor = (item) => item.id.toString();
  keyExtractor2 = (item) => item.id.toString();

    renderItem = ({item}) => (
        <TouchableOpacity
            onPress={ () => {
                this.props.dispatch({
                    type: REMOVE_FROM_FAVORITES_LIST,
                    payload: {item, favList: this.props.favList},
                });
            }}
        >
            <Text>{`${item.date}`}</Text>
            <FlatList
                data={ item.list }
                keyExtractor={this.keyExtractor2}
                renderItem={ ({item}) => (<Text style={{margin: 10}}>{`${item.text}`}</Text>)}
            />
        </TouchableOpacity>
    );


    render() {
        return (
        <View style={styles.container}>
            <FlatList
                data={ this.props.favList }
                keyExtractor={this.keyExtractor}
                renderItem={ this.renderItem }
                onRefresh={() => refreshScreen(this.props.favList)}
                refreshing={ this.props.refreshing }
            />
        </View>
    );
  }
}

const mapStateToProps = ({ favorites }) => ({
    favList: favorites.favList,
    refreshing: favorites.refreshing,
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


export default connect(mapStateToProps, mapDispatchToProps)(FavoritesScreen);
