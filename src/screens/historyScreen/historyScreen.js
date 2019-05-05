import React, { Component } from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { connect } from 'react-redux';
import { GET_HISTORY_FACT } from "../../state/ActionTypes";

class HistoryScreen extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
      this.props.dispatch({
          type: GET_HISTORY_FACT,
      });
  }

  getHistory = () => {
      this.props.dispatch({
        type: GET_HISTORY_FACT,
    });
  };

  keyExtractor = (item) => item.index.toString();


    render() {
        console.log(this.props.event);
        return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={()=> this.getHistory()}
            >
                <Text style={styles.item}>{this.props.event.currentDate}</Text>
            </TouchableOpacity>
            <FlatList
                data={ this.props.event.filteredEvents }
                keyExtractor={this.keyExtractor}
                renderItem={({item}) => <Text style={ {margin: 10 } }>{`${item.year}: ${item.text}\n`}</Text>}
                onRefresh={()=> this.getHistory()}
                refreshing={ this.props.refreshing }
            />
        </View>
    );
  }
}

const mapStateToProps = ({ randomHistory }) => ({
  event: randomHistory.event,
  refreshing: randomHistory.refreshing,
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


export default connect(mapStateToProps, mapDispatchToProps)(HistoryScreen);
