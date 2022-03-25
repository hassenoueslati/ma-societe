import React, { Component } from 'react'

export default class Presentation extends Component {
state ={
    title :"Qui somme nous !",
    contact : {
        nom: "Ma Société",
        email: "Contact@societe.com",
        logo : <img src="logo512.png" width="20%" alt="MaSociete"/>
    },
    departs:[
        {id: 1, nom:'Commercial'},
        {id: 2, nom: 'Developpement'},
        {id: 3, nom: 'Maintenance'}
    ]
}
  render() {
    return (
      <div>
          <h1>{this.state.title}</h1>
          <table>
              <tr>
                  <td>{this.state.contact.logo}</td>
                  <td>
                      <li>{this.state.contact.nom}</li>
                      <li>{this.state.contact.email}</li>
                  </td>
              </tr>
          </table>
          <h2>List des département</h2>
          <table>
              {this.state.departs.map((d,i)=>
                  <tr key={i}>
                        <td>{d.id}</td>
                        <td>{d.nom}</td>
                  </tr>
              )}
          </table>
      </div>
    )
  }
}
