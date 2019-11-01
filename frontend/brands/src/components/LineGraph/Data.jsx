import React, { Component } from 'react';
import LineGraph from './LineGraph.jsx';

export default class Data extends Component {
  createFakeData(){
    // This function creates data that doesn't look entirely random
    const data = []
    
    for (let x = 0; x <= 30; x++) {
      const random = Math.random();
      const temp = data.length > 0 ? data[data.length-1].y : 50;
      const y = random >= .45 ? temp + Math.floor(random * 20) : temp - Math.floor(random * 20);
      data.push({x,y})
    }
    return data;
  }

  render() {
    return (
      <div className="Data">
        <div className="header">react svg line chart [part 1]</div>
        <LineGraph data={this.createFakeData()} />
        <LineGraph data={this.createFakeData()} color={'#F44336'}  />
      </div>
    );
  }
}