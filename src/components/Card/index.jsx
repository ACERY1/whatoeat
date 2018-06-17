import React from 'react'
import './style.scss'

class Index extends React.Component {
	state = {
		url: '',
		title: '大大泡泡糖',
		cont: '好吃又好玩'
	}
	
	
	render () {
		return (
			<div className="card l-box__verMid">
				<div className="card-imgBox mt20">
					<img className="card-imgBox-img" src={this.state.url} alt="FOOD"/>
				</div>
				<hr className="line-c1__s2"/>
				<h5 className="t2-c1__normal mt20">{this.state.title}</h5>
				<p className="t5-c3__normal mt10">{this.state.cont}</p>
			</div>
		)
	}
}

export default Index