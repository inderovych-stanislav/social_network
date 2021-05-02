import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import rootReducer from "./reducers/rootReducer";
import createSagaMiddleware from 'redux-saga';
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import rootSaga from "./sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware();
const middlewares = [];

middlewares.push(sagaMiddleware);

if (process.env.NODE_ENV === `development`) {
    const { logger } = require(`redux-logger`);
    middlewares.push(logger);
}

const store = createStore(
    rootReducer,
    applyMiddleware(...middlewares)
);
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>,
  document.getElementById('root')
);

