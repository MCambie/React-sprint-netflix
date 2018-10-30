import React, { Component } from "react";
import PostData from "../data/data.json";
class Showcard extends Component {
render() {
return (
<div class="card_contaiener">
  <div class="search">
  {PostData.movie.map((movie, index)=>{
    return <div class="wrapper-card">
      <img src={movie.Poster} alt=""/>
      <h3>{movie.Title}</h3>
      <h2>{movie.Year}</h2>
      <p>{movie.Plot}</p>
    </div>
  })}
</div>
</div>
);}}
export default Showcard;
