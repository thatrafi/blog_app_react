import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router } from "react-router-dom";
import {createStore, applyMiddleware, compose} from "redux"
import { Provider } from "react-redux";
import reducer from './reducers'
import thunk from 'redux-thunk'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import './index.css'

import App from './App';

const store = createStore(reducer,compose(applyMiddleware(thunk)));

ReactDOM.render(<Router>
    <Provider store={store}>
        <App/>
    </Provider>
    </Router>, document.getElementById('root'));