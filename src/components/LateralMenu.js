import React from 'react';

class LateralMenu extends React.Component{
	getDivStyle = () => {
		return {
			float: 'left',
			background: '#4682B4',
			padding: '10px',
			width: '25%',
			height: '100vh',

			// changing fonts...
			color: '#F0F8FF',
			fontFamily: "verdana",
			fontWeight: 'bold',
			fontSize: '12px'
		}
	}


	render(){
		/*
		const pStyle = {
			backgroundColor: '#483D8B',
		};
		*/

		return(
			<div style={this.getDivStyle()}>
				<p>COMPANIES</p>
				<p>USUÁRIOS</p>
				<p>RESETAR SENHA</p>
				<p>SIMULAÇÃO</p>
			</div>
		);
	}
}

export default LateralMenu;

/*
<div style={this.getDivStyle()}>
	<table>
		<tr><td>COMPANIES</td></tr>
		<tr><td style={pStyle}>USUÁRIOS</td></tr>
		<tr><td>RESETAR SENHA</td></tr>
		<tr><td>SIMULAÇÃO</td></tr>
	</table>
</div>
*/
