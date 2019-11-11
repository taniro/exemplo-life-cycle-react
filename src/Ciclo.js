import React from "react";

class Ciclo extends React.Component {
	constructor() {
		super();
		this.state = {
			cont: 0
		};
		console.log("constructor()");
	}

	shouldComponentUpdate() {
		console.log("shouldComponentUpdate()");
		return true;
	}

	componentDidMount() {
		this.setState({ cont: 1 });
		console.log("componentDidMount()");
	}

	componentDidUpdate() {
		console.log("componentDidUpdate()");
	}

	componentWillUnmount() {
		console.log("componentWillUnmount()");
	}

	render() {
		console.log("render()");
		return <h1>{this.state.cont}</h1>;
	}
}

export default Ciclo;
