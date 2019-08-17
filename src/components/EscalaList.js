import React from 'react';

class EscalaList extends React.Component{
	renderAllTableRows(){
		let escala = this.props.escala;
		if(this.props.escala.length < 1){
			escala = this.props.all;
		}

		return escala.map((item, i) => {
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
			<table>
	  			<thead>
		  			<tr>
		  				<th>Usuário</th>
		  				<th>Email</th>
		  				<th>Company</th>
		  				<th>Escalas</th>
		  				<th>Status</th>
		  			</tr>
	  			</thead>
	  			<tbody>{this.renderAllTableRows()}</tbody>
  			</table>
			</div>
		)
	}

}

export default EscalaList;