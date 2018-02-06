import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Candy from './candy.js'

class App extends Component {
  constructor(props){
    super(props)
    this.state= {
      candyList: [
        {
          brand: "Swedish Fish",
          color: "red",
          shapes: ["fish"]
        },
        {
          brand: "Haribo Sour Gummy Bear",
          color: "variety",
          shapes: ["bear", "round", "big"]
        }
      ],
      goodRobotText: "",
      badRobotText: "",
      kanyeRobot: ""
    }
  }


handleChange(e) {
  // console.log(e.target.value)
  this.setState({goodRobotText: e.target.value})
}

handleChangeTwo(e) {
  var save = e.target.value.split("")
  for(let i=0; i<save.length; i++){
    save[i]= "B"
  }
  console.log(save);

  this.setState({badRobotText:save})


}

handleKanye(e) {
  this.setState({kanyeRobot: e.target.value})
}

  render() {
    var candy =
    this.state.candyList.map(function(element,index){
      return (
      <Candy key={index} brand={element.brand}
      color={element.color} shapes={element.shapes} />
    )
  })
    return (
      <main>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Robo Active Listening</h1>
        </header>
        <p className="App-intro">
          {candy}
        </p>

        <input type="text" onChange={this.handleChange.bind(this)} />
        <h4><b><u>Good Robot</u></b></h4>
      <h3> I hear you saying {this.state.goodRobotText}. Is that correct? </h3>
        <input type="text" onChange={this.handleChangeTwo.bind(this)} />
      <h4><b><u>Bad Robot</u></b></h4>
      <h3> I hear you saying {this.state.badRobotText}. Is that correct? </h3>
        <input type="text" onChange={this.handleKanye.bind(this)} />
      <h4><b><u>Kanye Robot</u></b></h4>
    <h3> I hear you saying {this.state.kanyeRobot}. Is that correct? </h3>

  </div>
      </main>
    )
  }
}


export default App;
