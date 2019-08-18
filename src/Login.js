import React from 'react';
import LateralMenu from './components/LateralMenu';
import SearchBar from './components/SearchBar';

const LoggedIn = (escala) => {
	return (
		<div>
	  		<LateralMenu />
	        <SearchBar data={escala}/>
	  	</div>
	);
}

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

class Login extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			escala: [],
			username: [], /* all the usernames are active emails from escala */
			password: "123",
			isLogged: false
		};
		
	}

	/* Getting json file from backend application */
	componentDidMount() {
    	fetch('http://homestead.local/escala')
      		.then(response => response.json())
      		.then(escala => this.setState({ escala }))
      		.then(username => this.setState({
      			username: this.state.escala
      			.filter( (item) => (item.status === 'ativo'))
      			.map( (item, i) => { return item.email; })
      		}))
      		.catch(e => {
        		console.log(e);
        	return e;
    	});

  	}

  	signIn(username, password) {
  		let success = false;
  		for(let i = 0; i < this.state.username.length; i++){
  			if((username === this.state.username[i]) && 
  				(password === this.state.password))
  			{
  				console.log("Logado!");
  				success = true;
  				this.setState({ isLogged: true});
  			}
  		}
  		if(success === false) 
  			console.log("Usuário ou senha errada!");
  	}

	render(){
		/* Adding the attribute 'removed' to json object before sending it to
	    others componentes */
    	const escala = this.state.escala;
    	escala.map( (item, i) => {
      		return ( item['removed'] = 'false' )
    	});

		return (
			<div>
			{
				(this.state.isLogged) ? 
				LoggedIn(this.state.escala)
				:
				<LoginScreen onSignIn={this.signIn.bind(this)} data={this.state.escala}/>
			}
			</div>
		)

	}

}

export default Login;
