/* Router */
import {BrowserRouter as Router} from 'react-router-dom';
import {Switch, Route} from 'react-router';
import React from 'react';

import routerConfig from './config'

function recursiveRenderRoute(config = []) {
	const routers = []
	
	const renderRoute = (parentPath, routerItem) => {
		if (!routerItem.path || !routerItem.component ) {
			throw new Error('[Router Error]: routerItem Params Error')
		}
		routers.push(
			<Route
				exact
				path={(parentPath+routerItem.path).replace(/\/+/g, '/')}
				key={(parentPath+routerItem.path).replace(/\/+/g, '/')}
				component={routerItem.component}
			/>
		)
		if (Array.isArray(routerItem.children)) {
			routerItem.children.forEach(r => {
				renderRoute(routerItem.path ,r)
			})
		}
		
	}
	
	config.forEach(item => {
		renderRoute('', item)
	})
	
	return <Switch>{routers}</Switch>
}

const routes = recursiveRenderRoute(routerConfig)
export default <Router>{routes}</Router>