import React from 'react';
import LateralMenu from './components/LateralMenu';
import SearchBar from './components/SearchBar';
import LoginScreen from './LoginScreen';
import { FiLogOut } from "react-icons/fi";

const LoggedIn = ({escala, username, signOut}) => {
	
	const headBarStyle = {
		textAlign: 'right',
		background: '#000080',
		color: '#FFFFFF',
		padding: '12px'
	}

	return (
		<div>
			<div style={headBarStyle}>
			{username} <span onClick={signOut} style={{cursor:'pointer'}}><FiLogOut /></span>
			</div>
	  		
	  		<LateralMenu />
	        
	        <SearchBar data={escala}/>
	  	</div>
	);
}

class Login extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			escala: [],
			usernames: [], /* all the usernames are active emails from escala */
			users: [],
			passwords: "123",
			isLogged: "false",
			username: ""
		};

		
	}

	/* Getting json file from backend application */
	componentDidMount() {
    	fetch('http://homestead.local/escala')
      		.then(response => response.json())
      		.then(escala => this.setState({ escala }))
      		.then(username => this.setState({
      			usernames: this.state.escala
      			.filter( (item) => (item.status === 'ativo'))
      			.map( (item, i) => { return item.email; })
      		}))
      		.then(users => this.setState({
      			users: this.state.escala
      			.filter( (item) => (item.status === 'ativo'))
      			.map( (item, i) => { return item.user; })
      		}))
      		.catch(e => {
        		console.log(e);
        	return e;
    	});

  	}

  	signIn(username, password) {
  		let success = false;
  		for(let i = 0; i < this.state.usernames.length; i++){
  			if((username === this.state.usernames[i]) && 
  				(password === this.state.passwords))
  			{
  				success = true;
  				this.setState({ 
  					isLogged: "true",
  					username: this.state.users[i]
  				});
  				console.log(this.state.users[i] + " está logado!");
  			}
  		}
  		if(success === false) 
  			console.log("Usuário ou senha errada!");
  	}

  	signOut(){
  		this.setState({
  			isLogged: "false",
  			username: ""
  		})
  		console.log(this.state.username + " saiu do sistema.");
  	}

	render(){

		/* Adding the attribute 'removed' to json object before sending it to
	    others componentes */
    	const escala = this.state.escala;
    	escala.map( (item, i) => {
      		return ( item['removed'] = 'false' )
    	});

    	/*
    	 Uncomment the multi-line comment below to test with a bigger quantity
    	 of rows and replace escala={this.state.escala} by escala={test}
    	*/
    	/*
    	const test = new Array(35)
    	.fill({company: "Escala", created_at: "2019-08-15 17:33:54", 
    		email: "lippe252@gmail.com",
			escalas: "0",
			id: 1,
			removed: "false",
			status: "ativo",
			updated_at: "2019-08-15 17:33:54",
			user: "Felipe Oliveira"});
		*/

		return (
			<div>
			{
				(this.state.isLogged === "true") ?
				<LoggedIn escala={this.state.escala} username={this.state.username}
				signOut={this.signOut.bind(this)} />
				:
				<LoginScreen 
					onSignIn={this.signIn.bind(this)} data={this.state.escala}/>
			}
			</div>
		)
	}
}

export default Login;
