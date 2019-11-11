import React from "react";
import Condicional from "./Condicional";

class Principal extends React.Component {
	constructor() {
		super();
		this.state = {
			isLoading: true
		};
	}

	componentDidMount() {
		setTimeout(() => {
			this.setState({ isLoading: false });
		}, 1000);
	}

	render() {
		return (
			<div>
				<Condicional isLoading={this.state.isLoading} />{" "}
			</div>
		);
	}
}

export default Principal;
