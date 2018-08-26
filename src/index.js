import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/index.css';
import App from './components/App';
import { createStore } from 'redux'
import { rootReducer } from './reducers/rootReducer'
import { Provider } from 'react-redux'
import { BrowserRouter as Router,  } from 'react-router-dom'

const store = createStore(rootReducer,
   window.devToolsExtension ? window.devToolsExtension() : f => f
 )

ReactDOM.render(
  <Provider store={ store }>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
