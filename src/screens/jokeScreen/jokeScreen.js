import React, { Component } from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { connect } from 'react-redux';
import {GET_RANDOM_JOKE} from "../../state/ActionTypes";

class JokeScreen extends Component {
  constructor(props) {
    super(props);
  }

  getJoke = () => {
      console.log('onPress');
      this.props.dispatch({
        type: GET_RANDOM_JOKE,
    });
  };

  render() {

    return (
        <View style={styles.container}>
          <Text style={styles.welcome}>{this.props.setup}</Text>
          <Text style={styles.instructions}>{this.props.punchline}</Text>
            <TouchableOpacity
            onPress={()=> this.getJoke()}
            >
                <Text style={styles.instructions}>Get Joke</Text>
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


export default connect(mapStateToProps, mapDispatchToProps)(JokeScreen);
