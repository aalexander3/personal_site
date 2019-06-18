import React from 'react'
import ReactDOM from 'react-dom'
import './stylesheets/index.js'
import App from './components/App'
import { createStore } from 'redux'
import { rootReducer } from './reducers/rootReducer'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

const store = createStore(rootReducer,
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
 )

ReactDOM.render(
  <Provider store={ store }>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
)
