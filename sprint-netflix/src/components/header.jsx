import React, { Component } from "react";
import { NavLink } from "react-router-dom";
class Header extends Component {
active = {
fontWeight: "bold",
color: "red"
};
header = {
display: "flex",
justifyContent: "space-evenly",
listStyle: "none"
};
render() {
return (
<div style={this.header}>
<NavLink to="/homepage" activeStyle={this.active}>
Home
</NavLink>
<NavLink to="/showcard" activeStyle={this.active}>
Showcard
</NavLink>
</div>
);}}
export default Header;
