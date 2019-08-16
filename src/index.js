import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';

class EscalaFE extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			escala: []
		};
	}

	componentDidMount() {
    	fetch('http://homestead.local/escala')
      		.then(response => response.json())
      		.then(escala => this.setState({ escala }))
      		.catch(e => {
    			console.log(e);
    			return e;
  			}); 		
  	}

  	renderTableRow(){
		return this.state.escala.map((item, i) => {
			return(
				<tr key={i}>
				    <td>{item.user}</td>
				    <td>{item.email}</td>
				    <td>{item.company}</td>
				    <td>{item.escalas}</td>
				    <td>{item.status}</td>
				</tr>
			)
		})
	}

  	render(){
  		return(
  			<div>
  			<h3>Usuários</h3>
  			<table id="userTable">
	  			<thead>
		  			<tr>
		  				<th>Usuário</th>
		  				<th>Email</th>
		  				<th>Company</th>
		  				<th>Escalas</th>
		  				<th>Status</th>
		  			</tr>
	  			</thead>
	  			<tbody>{this.renderTableRow()}</tbody>
  			</table>
  			</div>
  		);
  	}

}

//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<EscalaFE />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
