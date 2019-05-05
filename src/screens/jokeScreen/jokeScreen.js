import React, { Component } from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { connect } from 'react-redux';
import {GET_RANDOM_JOKE, SAVE_TO_FAVORITES} from "../../state/ActionTypes";

class JokeScreen extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
      this.props.dispatch({
          type: GET_RANDOM_JOKE,
      });
  }

  getJoke = () => {
      this.props.dispatch({
        type: GET_RANDOM_JOKE,
    });
  };

  saveToFavorite = (item) => {
      this.props.dispatch({
          type: SAVE_TO_FAVORITES,
          payload: item,
      });
  };

    keyExtractor = (item) => item.id.toString();

    renderItem = ({item}) => (
        <TouchableOpacity
            onPress={ () => this.saveToFavorite(item) }
        >
            <Text style={ {margin: 10 } }>{`${item.setup} \n${item.punchline}`}</Text>
        </TouchableOpacity>
    );

    render() {
    return (
        <View style={styles.container}>
            <FlatList
                data={ this.props.jokes }
                keyExtractor={this.keyExtractor}
                renderItem={ this.renderItem }
                onRefresh={()=> this.getJoke()}
                refreshing={ this.props.refreshing }
            />
        </View>
    );
  }
}

const mapStateToProps = ({ randomJoke }) => ({
  jokes: randomJoke.jokes,
  refreshing: randomJoke.refreshing,
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


export default connect(mapStateToProps, mapDispatchToProps)(JokeScreen);
