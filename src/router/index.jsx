/* Router */
import {BrowserRouter as Router} from 'react-router-dom';
import {Switch, Route} from 'react-router';
import React from 'react';

import routerConfig from './config'

/**
 * 将config对象扁平化
 * @param config
 * @return {Array}
 */
function recursiveRouteConfig(config = []) {
	const routes = []
	const configRouteObject = (parentPath, routeItem, parentComponent) => {
		if (!routeItem.path || !routeItem.component) {
			throw new Error('[Config RouteObject Error]: routerItem Params Error')
		}
		let routeObject = {
			path: (parentPath + routeItem.path).replace(/\/+/g, '/'),
			component: routeItem.component
		}
		if (parentComponent) {
			routeObject['parent'] = parentComponent
		}
		routes.push(routeObject)
		
		if (Array.isArray(routeItem.children)) {
			routeItem.children.forEach(item => {
				configRouteObject(routeItem.path, item, routeItem.component)
			})
		}
	}
	config.forEach(r => {
		configRouteObject('', r, null)
	})
	return routes
}

function recursiveRenderRoute(flatRoutes = []) {
	const routers = []
	flatRoutes.forEach(route => {
		if (route.parent) {
			routers.push(
				<Route
					key={route.path}
					exact
					path={route.path}
					render={(props) => {
						return React.createElement(
							route.parent,
							props,
							React.createElement(route.component, props)
						)
					}}
				/>
			)
		} else {
			routers.push(
				<Route
					key={route.path}
					exact
					path={route.path}
					component={route.component}
				/>
			)
		}
		
	})
	return <Switch>{routers}</Switch>
}

const routes = recursiveRenderRoute(recursiveRouteConfig(routerConfig))
export default <Router>{routes}</Router>