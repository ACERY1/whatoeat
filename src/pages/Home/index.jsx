import React from 'react'
import Card from '../../components/Card/index'
import {observer,inject} from 'mobx-react';
import './style.scss'

@inject('appState')
@observer
export default class Home extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
	}
	
	
	render() {
		return (
			<div className="home l-box__verMid">
				<Card />
				<hr className="line-c3__s1  mt20 w8"/>
				<div className="home-buttons l-box__allMid mt20 w8">
					<img className="home-buttons-item" src="/assets/icons/pick.png" alt="pick"/>
				</div>
				<p className="t4-c1__bold mt10 ">CLICK ME!</p>
			</div>
		)
	}
}
