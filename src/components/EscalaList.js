import React from 'react';
import './styles/EscalaList.css'

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
				    <td className="hiddenCols">{item.company}</td>
				    <td className="hiddenCols">{item.escalas}</td>
				    <td className="hiddenCols">{item.status}</td>
				</tr>
			)
		})
	}

	render(){
		return(
			<div>
			<table id="escalaTable">
	  			<thead>
		  			<tr>
		  				<th>Usuário</th>
		  				<th>Email</th>
		  				<th className="hiddenCols">Company</th>
		  				<th className="hiddenCols">Escalas</th>
		  				<th className="hiddenCols">Status</th>
		  			</tr>
	  			</thead>
	  			<tbody>{this.renderAllTableRows()}</tbody>
  			</table>
			</div>
		)
	}

}

export default EscalaList;