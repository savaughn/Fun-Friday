import React, { Component } from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import {connect} from "react-redux";
import { SAVE_TO_FAVORITES_LIST } from "../../state/ActionTypes";

class Footer extends Component {

    render() {
        return (
            <View style={ styles.header}>
                {
                    this.props.favArray.length > 0 &&
                    <TouchableOpacity
                        onPress={()=>{
                            this.props.dispatch({
                                type: SAVE_TO_FAVORITES_LIST,
                                payload: { favList: this.props.favList, favArray: this.props.favArray },
                            });
                        } }
                    >
                        <Text style={styles.items}>Save Favorites List</Text>
                    </TouchableOpacity>
                }
            </View>
        );
    }
}

const mapStateToProps = ({ favorites }) => ({
    favArray: favorites.favArray,
    favList: favorites.favList,
});

const mapDispatchToProps = dispatch => ({
    dispatch,
});


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

export default connect(mapStateToProps, mapDispatchToProps)(Footer);