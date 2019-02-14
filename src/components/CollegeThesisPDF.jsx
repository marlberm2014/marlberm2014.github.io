import React, { Component } from 'react';
import PaperWorks from '../paperworks/Marl-Bermudo-OJ-Abesamis-thesis.pdf';

function createComponet() {
  return <embed src={PaperWorks} width="100%" height="97%" />;
}

export default class CollegeThesisPDF extends Component {
  render() {
    return createComponet();
  }
}
