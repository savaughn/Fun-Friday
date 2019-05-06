import React, { Component } from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { connect } from 'react-redux';
import { GET_HISTORY_FACT, SAVE_TO_FAVORITES } from "../../state/ActionTypes";

class HistoryScreen extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
      if (!this.props.event.length) {
          this.getHistory();
      }
  }

  getHistory = () => {
      this.props.dispatch({
        type: GET_HISTORY_FACT,
    });
  };

    saveToFavorite = (item) => {
        this.props.dispatch({
            type: SAVE_TO_FAVORITES,
            payload: {item, favArray: this.props.favorites},
        });
    };

  keyExtractor = (item) => item.id.toString();

    renderItem = ({item}) => (
        <TouchableOpacity
            onPress={ () => this.saveToFavorite(item) }
        >
            <Text style={ {margin: 10 } }>{`${item.year}: ${item.text}`}</Text>
        </TouchableOpacity>
    );


    render() {
        return (
        <View style={styles.container}>
            <Text style={styles.item}>{this.props.event.currentDate}</Text>
            <FlatList
                data={ this.props.event.filteredEvents }
                keyExtractor={this.keyExtractor}
                renderItem={ this.renderItem }
                onRefresh={()=> this.getHistory()}
                refreshing={ this.props.refreshing }
            />
        </View>
    );
  }
}

const mapStateToProps = ({ randomHistory, favorites }) => ({
  event: randomHistory.event,
  refreshing: randomHistory.refreshing,
  favorites: favorites.favorites,
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
