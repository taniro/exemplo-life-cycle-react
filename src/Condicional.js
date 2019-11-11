import React from "react";

class Condicional extends React.Component {
	render() {
		if (this.props.isLoading) {
			return (
				<div>
					<h1>Loading...</h1>
				</div>
			);
		}
		return (
			<div>
				<h1>Hello</h1>
			</div>
		);
	}
}

export default Condicional;
