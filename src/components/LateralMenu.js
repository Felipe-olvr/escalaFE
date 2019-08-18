import React from 'react';
import './styles/LateralMenu.css';

class LateralMenu extends React.Component{
	
	render(){
		
		return(
			<div id="divStyleMenu">
				<p>COMPANIES</p>
				<p id="pUserStyleMenu">USUÁRIOS</p>
				<p>RESETAR SENHA</p>
				<p>SIMULAÇÃO</p>
			</div>
		);
	}
}

export default LateralMenu;
