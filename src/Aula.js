import React from "react";
import Opcional from "./Opcional";

class Aula extends React.Component {
	constructor() {
		super();
		this.state = {
			isLoading: true
		};
	}

	componentDidMount() {
		setTimeout(() => {
			this.setState({ isLoading: false });
		}, 2000);
	}

	render() {
		console.log(this.state.isLoading);
		return this.state.isLoading ? (
			<h1> Loading</h1>
		) : (
			<div>
				<Opcional nome="Taniro" />
			</div>
		);
	}
}

export default Aula;
