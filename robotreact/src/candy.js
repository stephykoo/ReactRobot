import React, {Component} from 'react'

class Candy extends Component {
  render() {
// console.log(this.props)
    var gummy =
    this.props.shapes.map(function(element,i){
      return (
        <li key={i}>{element}</li>
      )
    })

  return (
    <div>
      <h1>{this.props.brand}</h1>
      <p>{this.props.color}</p>
      <h2>Shapes</h2>
      <ul>
      {gummy}
      </ul>
    </div>
  )
}
}

export default Candy;
