import React from 'react';
import './styles/EscalaList.css';

class EscalaList extends React.Component{
	state = {
		escala: []
	};

	checkStatus(status){
		if(status === 'ativo'){
			return (
				<td className="hiddenCols" style={{color: '#008000'}}>
				<div id="greenCircle"></div>
				ativo</td>
			)
		}else{
			return (
				<td className="hiddenCols" style={{color: '#FF0000'}}>
				<div id="redCircle"></div>
			    inativo</td>
			)
		}
	}

	removeUser(item, e){
		if(this.props.all.length > 0){
			for(let k = 0; k < this.props.all.length; k++){
				if(this.props.all[k].user === item.user){ 
					this.props.all[k].removed = 'true';
				}
			}

			const escalaCopy = this.state.escala.filter(
				(item) => item.removed === 'true');
			this.setState({ escala: escalaCopy });
			console.log(item.user + " was removed!");
		}
		
	}

	renderTableRows(){
		let escala = this.props.escala;
		if(!this.props.escala.length > 0){
			escala = this.props.all;
		}

		escala = escala.filter( (item) => 
			item.removed === 'false'
		)

		return escala.map((item, i) => {
			return(
				<tr key={i}>
				    <td>{item.user}</td>
				    <td>{item.email}</td>
				    <td className="hiddenCols">{item.company}</td>
				    <td className="hiddenCols">{item.escalas}</td>
				    {this.checkStatus(item.status)}
				    <td><input type="button" value="Excluir" onClick={(e) => this.removeUser(item, e)}/></td>
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
		  				<th>USUÁRIO</th>
		  				<th>E-MAIL</th>
		  				<th className="hiddenCols">COMPANY</th>
		  				<th className="hiddenCols">ESCALAS</th>
		  				<th className="hiddenCols">STATUS</th>
		  				<th></th>
		  			</tr>
	  			</thead>
	  			<tbody>{this.renderTableRows()}</tbody>
  			</table>
			</div>
		)
	}

}

export default EscalaList;