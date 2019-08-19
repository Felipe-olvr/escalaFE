import React from 'react';
import './styles/EscalaList.css';

class EscalaList extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			escala: [],
			currentPage: 1,
	        rowsPerPage: 2,
	        filteredEscalaLength: 0
		};
		this.handleClick = this.handleClick.bind(this);
	}
	

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
			console.log(item.user + " foi removido(a)!");
		}
		
	}

	handleClick(e) {
        this.setState({
          currentPage: Number(e.target.id)
        });
      }

	renderTableRows(){
		let escala = this.props.escala;

		/* If escala is empty, all the rows will be shown on the screen */
		if(!this.props.escala.length > 0){
			escala = this.props.all;
		}

		escala = escala.filter( (item) => 
			item.removed === 'false'
		)

		/* Calculating the first and last element of each page */
		const indexOfLastItem = this.state.currentPage * this.state.rowsPerPage;
		const indexOfFirstItem = indexOfLastItem - this.state.rowsPerPage;
		escala = escala.slice(indexOfFirstItem, indexOfLastItem);

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
		//
		const page = [];
		for(let i = 1; i <= Math.ceil(this.state.filteredEscalaLength / this.state.rowsPerPage); i++){
			page.push(i);
		}
		console.log(Math.ceil(3/2));

		//
		const renderPageNum = page.map( (num) => {
			return (
				<li key={num} onClick={this.handleClickPage} >{num}</li>
			)
		})

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

  			<div>
				<ul>{renderPageNum}</ul>
			</div>

			</div>
		)
	}

}

export default EscalaList;