import React from "react";

class App extends React.Component {
	constructor() {
		super();
		this.state = {};
		console.log("constructor()");
		this.handleClick = this.handleClick.bind(this);
	}

	componentDidMount() {
		//obter dados para exibir
		console.log("componentDidMount()");
		//this.setState({}); dispara um update
	}

	componentDidUpdate() {
		console.log("componentDidUpdate()");
	}

	componentWillUnmount() {
		//remover event listeners. Desligar componentes antes dele desaparecer.
		console.log("componentWillUnmount()");
	}

	handleClick() {
		this.setState({});
	}

	render() {
		console.log("render()");
		return (
			<div>
				<h1>Hello</h1>
				<button onClick={this.handleClick}>Click to update</button>
			</div>
		);
	}
}

export default App;
