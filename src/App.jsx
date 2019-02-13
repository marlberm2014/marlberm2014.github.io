import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import CollegeThesisPDF from './components/CollegeThesisPDF';

function createComponent() {
  return (
    <div className="App">
      <Navigation />
      <CollegeThesisPDF />
    </div>
  );
}

class App extends Component {
  render() {
    return createComponent();
  }
}

export default App;
