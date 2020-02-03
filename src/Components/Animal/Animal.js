import React, { Component } from 'react'
import MenuBar from '../Common/MenuBar'

export default class Animal extends Component {
  constructor(props) {
    super(props)

    this.state = {
         
    }
  }

  render() {
    return (
      <div>
        <MenuBar>
        <h2>Animal's Page</h2>
        </MenuBar>
      </div>
    )
  }
}
