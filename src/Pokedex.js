import React from "react";

class Pokedex extends React.Component {
	constructor() {
		super();
		this.state = {
			isLoading: true,
			isLoaded: false,
			pokemon: []
		};
	}

	componentDidMount() {
		fetch("https://pokeapi.co/api/v2/pokemon/1")
			.then(response => response.json())
			.then(data =>
				this.setState({
					isLoading: false,
					isLoaded: true,
					pokemon: data
				})
			);
	}

	render() {
		return <h1>Hello, {this.state.pokemon.name}</h1>;
	}
}

export default Pokedex;
