import React, {Component} from 'react';
import { Provider } from 'react-redux';
import Navigator from './navigator/navigator';
import { getStore } from './state'
import { INITIALIZE_APP } from './state/ActionTypes';

const store = getStore();

type Props = {};
export default class App extends Component<Props> {
  constructor(props){
      super();
  }

    componentWillMount() {
        console.disableYellowBox = true;
        store.dispatch({
            type: INITIALIZE_APP,
        });
    }

  render() {
      return (
          <Provider store={ store }>
              <Navigator />
          </Provider>
    );
  }
}
