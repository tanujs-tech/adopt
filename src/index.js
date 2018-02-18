import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import './index.css'
import App from './app'
import registerServiceWorker from './registerServiceWorker'
import reducer from './reducers'
import createSagaMiddleware from 'redux-saga'
import { reducer as formReducer } from 'redux-form'
import { rootSaga } from './sagas'

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
  form: formReducer
})

const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSaga)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()
