import React from "react";

class Email extends React.Component {
	constructor() {
		super();
		this.state = {
			novosEmails: ["teste", "teste", "teste", "teste"]
		};
	}

	render() {
		return (
			this.state.novosEmails.length > 0 && (
				<div>
					<h1>Você possui {this.state.novosEmails.length} emails não lidos.</h1>
				</div>
			)
		);
	}
}

export default Email;
