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
	
	
	getNewFood = () => {
		this.props.appState.getNewFood()
	}
	
	getPrevFood = () => {
		this.props.appState.prevHistory()
	}
	
	render() {
		return (
			<div className="home l-box__verMid">
				<Card
					url={this.props.appState.food.imgUrl}
					cont={this.props.appState.food.desc}
					title={this.props.appState.food.name}
					// uploadFn={this.props.appState.name}
				/>
				<hr className="line-c3__s1  mt20 w8"/>
				<div className="home-buttons l-box__row mt20 w8">
					<img className="home-buttons-item mg40" src="/assets/icons/prev.png" alt="pick"  onClick={this.getPrevFood}/>
					<img className="home-buttons-item mg40" src="/assets/icons/pick2.png" alt="pick"  onClick={this.getNewFood}/>
				</div>
				{/*<p className="t4-c1__bold mt10" onClick={this.getNewFood}>CLICK ME!</p>*/}
			</div>
		)
	}
}
