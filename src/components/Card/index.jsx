import React from 'react'
import PropTypes from 'prop-types';
import './style.scss'

class Card extends React.Component {
	render () {
		return (
			<div className="card l-box__verMid">
				<div className="card-imgBox mt20">
					<img className="card-imgBox-img" src={this.props.url} alt="FOOD"/>
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
	cont: PropTypes.string
}

Card.defaultProps = {
	url: 'http://cdn.helloyzy.cn/images/bg2.jpg',
	title: '大大泡泡糖',
	cont: '好吃又好玩好吃又好玩好吃又好玩好吃又好玩好吃又好玩好吃又好玩好吃又好玩好吃又好玩好吃又好玩好吃又好玩好吃又好玩好吃又好玩好吃又好玩'
}
