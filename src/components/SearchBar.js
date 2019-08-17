import React from 'react';
import EscalaList from './EscalaList';

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
		const divStyle = {
			padding: '10px',
			marginLeft: '6.25cm',
			background: '#EEE'
		};

		const pStyle = {
			color: '#1E90FF',
			fontWeight: 'bold',
			fontFamily: 'arial'
		};

		// Filters rows by user and email, it's case insensitive
		const escala = this.props.data;
		let filteredEscala = escala.filter(
			(item) => (item.user.toLowerCase() === this.state.searchItem.toLowerCase()) ||
			 (item.email === this.state.searchItem)
		);

		return(
			<div style={divStyle}>
				<p style={pStyle}>Usuários</p>
				<input type="text" size="75" placeholder="Pesquise um usuário" 
					value={this.state.searchItem}
					onChange={this.handleChange} />
				<p></p>
				<EscalaList escala={filteredEscala} all={this.props.data}/>
			</div>
		);
	}

}

export default SearchBar;
