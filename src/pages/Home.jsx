import React from 'react'

export default class Home extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
	}
	
	
	
	render() {
		return (
			<div>
				<div>
					hello this is home page
				</div>
				{this.props.children}
			</div>
		)
	}
}
