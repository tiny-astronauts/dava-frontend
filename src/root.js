import React, {Component} from 'react';
import App from './components/App';
import promiseMiddleware from 'redux-promise-middleware';
import rootReducer from './reducers/rootReducer';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';

const configureStore = function(initialState) {
  const store = createStore(
    rootReducer,
    applyMiddleware(
      promiseMiddleware()
    )
  );
  if (module.hot) {
    module.hot.accept('./reducers/rootReducer.js', () => {
      const nextRootReducer = require('./reducers/rootReducer').default;
      store.replaceReducer(nextRootReducer);
    })
  };
  return store;
}

export default class Root extends Component {
  render() {
    return (
      <div>
        <Provider store={configureStore({})}>
          <App />
        </Provider>
      </div>
    );
  }
}
