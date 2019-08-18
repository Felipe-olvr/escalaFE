import React from 'react';
import LateralMenu from './components/LateralMenu'
import SearchBar from './components/SearchBar'

class App extends React.Component{
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

  render(){

    /* Adding the attribute 'removed' to json object before sending it to
    others componentes */
    const escala = this.state.escala;
    escala.map( (item, i) => {
      return (
        item['removed'] = 'false'
      )
    })

    /*
    if(escala.length > 0){
      console.log(escala[1].user)
      escala[1].removed = 'true'
    }
    */

    return(
      <div>
        <LateralMenu />
        <SearchBar data={escala}/>
      </div>
    );
  }
}


export default App;
