import React from 'react'

export default class Home extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
	}
	
	
	
	render() {
		return (
			<div>
				<p className="t1-c1__bold">hello</p>
				<p className="t2-c2__normal mt10">hello</p>
				<p className="t3-c3__bold">hello</p>
				<p className="t4-c2__light">hello</p>
				<p className="t5-c1__light">hello</p>
			</div>
		)
	}
}
