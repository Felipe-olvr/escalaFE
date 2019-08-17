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
    return(
      <div>
        <LateralMenu />
        <SearchBar data={this.state.escala}/>
      </div>
    );
  }
}


export default App;
