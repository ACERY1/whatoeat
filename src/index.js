import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "mobx-react";
// import {BrowserRouter as Router} from 'react-router-dom';

import './styles/commo.scss'
import './styles/animate.css'

import Route from './router/index.jsx'
import store from './store/index.js'

ReactDOM.render(
	<Provider appState={store}>{Route}</Provider>,
	document.getElementById('root')
);
