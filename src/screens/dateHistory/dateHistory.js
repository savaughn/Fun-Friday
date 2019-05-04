import React, { Component } from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { connect } from 'react-redux';
import { GET_HISTORY_FACT } from "../../state/ActionTypes";

class DateHistory extends Component {
  constructor(props) {
    super(props);
  }

  getHistory = () => {
      console.log('onPress');
      this.props.dispatch({
        type: GET_HISTORY_FACT,
    });
  };

  keyExtractor = (item) => item.index.toString();


    render() {
    console.log('in screen', this.props.event);
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={()=> this.getHistory()}
            >
                <Text style={styles.instructions}>Get HISTORY FACT</Text>
            </TouchableOpacity>
            <FlatList
                data={ this.props.event }
                keyExtractor={this.keyExtractor}
                renderItem={({item}) => <Text style={ {margin: 10 } }>{`${item.year}: ${item.text}\n`}</Text>}
            />
        </View>
    );
  }
}

const mapStateToProps = ({ dateHistory }) => ({
  event: dateHistory.event,
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


export default connect(mapStateToProps, mapDispatchToProps)(DateHistory);
