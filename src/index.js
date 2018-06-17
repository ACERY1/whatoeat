import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "mobx-react";

import './styles/commo.scss'
import './styles/animate.css'

import Route from './router'
import AppState from './store'

ReactDOM.render(
	<Provider appState={new AppState()}>{Route}</Provider>,
	document.getElementById('root')
);
