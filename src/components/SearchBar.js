import React from 'react';
import EscalaList from './EscalaList';
import './styles/SearchBar.css';

class SearchBar extends React.Component {
	constructor(props) {
    	super(props);
    	this.state = {
      		searchItem: ""
    	};
  	}

  	handleChange = (e) => {
		this.setState({ searchItem: e.target.value })
	};

	render(){
		const escala = this.props.data;

		/* teste
		let filteredEscala = escala.filter(
			(item) => ((item.user.toLowerCase() === this.state.searchItem.toLowerCase()) ||
			 (item.email === this.state.searchItem)) &&
			 (item.removed === 'false')
		);
		*/

		/* Filtering rows by user and email,
		   the attribute 'removed' must be 'false'. 
		   It's case insensitive.
		*/
		let filteredEscala = escala.filter(
			(item) => (((item.user.toLowerCase().indexOf(this.state.searchItem.toLowerCase())) !== -1) ||
			 (item.email.toLowerCase().indexOf(this.state.searchItem.toLowerCase()) !== -1)) &&
			 (item.removed === 'false')
		);

		return(
			<div id="divStyleSearchBar">
				<p id="pStyleSearchBar">Usuários</p>
				<p id="inputTextStyleSearchBar">
				<input type="text" size="50" placeholder="Pesquise um usuário" 
					value={this.state.searchItem}
					onChange={this.handleChange} />
				</p>
				<p></p>
				<EscalaList escala={filteredEscala} all={this.props.data}/>
			</div>
		);
	}

}

export default SearchBar;
