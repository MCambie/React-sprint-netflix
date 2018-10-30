import React, { Component } from "react";
import PostData from "../data/data.json";
class Showcard extends Component {
render() {
return (
<div>
  {PostData.movie.map((movie, index)=>{
    return <h1>{movie.Title}</h1>
  })}
  </div>
);}}
export default Showcard;
