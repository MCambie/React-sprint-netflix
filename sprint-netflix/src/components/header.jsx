import React, {Component} from 'react'

class Header extends Component {
  render() {
      return (
          <header>
          <input type="text" placeholder="search" value={this.props.userInput} onChange={this.props.Funct} />
          </header>
      )
  }
}


export default Header;
