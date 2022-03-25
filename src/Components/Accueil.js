import React, { Component } from 'react'

const message =<h1>"Bienvenue à notre site de la société : Ma société !"</h1>;
export default class accueil extends Component {
    
  render() {
    return (
      <div>
          {message}
          <h1>Bienvenue :{this.props.nom}</h1>
      </div>
    )
  }
}

