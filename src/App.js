import React from 'react';
import './App.css';
import StartWizard from './components/StartWizard'
import DCFCalculator from './components/DCFCalculator';

class App extends React.Component {
  state = {}

  completeForm = (value) => {
    
    this.setState({...value})
  }
  render() {
    return (
      <div className="App">
        <h1>Royalty Valuation Calculator</h1>
        {this.state.valuation ? <DCFCalculator/> : <StartWizard/>}
      </div>
    );
  }
}

export default App;
