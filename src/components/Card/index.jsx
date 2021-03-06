import React from 'react'
import PropTypes from 'prop-types';
import './style.scss'
import {observer,inject} from 'mobx-react';

@inject('appState')
@observer
class Card extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			isLoading: true
		}
	}
	
	Musk = () => {
		if (this.props.appState.picIsLoading) {
			return (
				<div className="card-imgBox-musk"/>
			)
		}
		return false
	}
	
	PicLoadedHandler = ()=> {
		this.props.appState.picLoaded()
	}
	
	render() {
		return (
			<div className="card l-box__verMid">
				<div className="card-imgBox mt20">
					{this.Musk()}
					<img className="card-imgBox-icon" src="/assets/icons/upload.png" alt="upload" onClick={this.props.uploadFn}/>
					<img className="card-imgBox-img" src={this.props.url} alt="FOOD" onLoad={this.PicLoadedHandler}/>
				</div>
				<hr className="line-c3__s1 w8 mt20"/>
				<h5 className="t2-c1__normal mt20">{this.props.title}</h5>
				<p className="t5-c3__normal mt10 w8">{this.props.cont}</p>
			</div>
		)
	}
}

export default Card


Card.propTypes = {
	// PropTypes.[type]
	url: PropTypes.string,
	title: PropTypes.string,
	cont: PropTypes.string,
	uploadFn: PropTypes.func
}

Card.defaultProps = {
	url: 'http://cdn.helloyzy.cn/images/bg2.jpg',
	title: '大大泡泡糖',
	cont: '好吃又好玩好吃又好玩好吃又好玩好吃又好玩好吃又好玩好吃又好玩好吃又好玩好吃又好玩好吃又好玩好吃又好玩好吃又好玩好吃又好玩好吃又好玩',
	uploadFn: () => {
		console.log('upload')
	}
}
