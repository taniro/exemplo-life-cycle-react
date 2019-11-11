import React from "react";
import Personagem from "./Personagem";

class Pokemon extends React.Component {
	constructor() {
		super();
		this.state = {
			isLoading: false,
			isLoaded: false,
			pokemon: {}
		};
	}

	componentDidMount() {
		this.setState({ isLoading: true });
		fetch("https://pokeapi.co/api/v2/pokemon/")
			.then(response => response.json())
			.then(data => {
				this.setState({
					isLoading: false,
					pokemon: data.results,
					isLoaded: true
				});
			});
	}

	render() {
		let pokes = [];
		if (this.state.isLoaded) {
			pokes = this.state.pokemon.map(it => (
				<Personagem nome={it.name} key={it.name} />
			));
		}

		return (
			<div>
				{this.state.isLoading && <h2>Loading</h2>}
				<div> {pokes}</div>
			</div>
		);
	}
}

export default Pokemon;
