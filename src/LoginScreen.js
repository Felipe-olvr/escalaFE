import React from 'react';

class LoginScreen extends React.Component {

	handleLogin(e){
		e.preventDefault();
		let username = this.refs.username.value;
		let password = this.refs.password.value;
		this.props.onSignIn(username, password);
	}

	render(){
		const divStyleLogin = {
			margin: '20px',
			borderStyle: 'solid',
			borderWidth: '1px',
			padding: '10px',
			background: '#EEE',
			width: '40%'
		};

		return (
			<div style={divStyleLogin}>
			<h1>Escala Front-End App</h1>
			<form onSubmit={this.handleLogin.bind(this)}>
				<p><b>Usuário: </b>
				<input type="text" ref="username" size="30" placeholder=""/></p>
				<p><b>Senha: </b>
				<input type="password" ref="password" size="30" placeholder=""/></p>
				<p><input type="submit" value="Login"/></p>
			</form>
			</div>
		);
	}
}

export default LoginScreen;
