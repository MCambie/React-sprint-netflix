import React, { Component } from "react";
import '../App.css'
import PostData from "../data/data.json";
class Showcard extends Component {
render() {
return (
<div class="card_contaiener">
  {PostData.movie.map((movie, index)=>{
    return <div class="wrapper-card">
      <img src={movie.Poster} alt=""/>
      <h3>{movie.Title}</h3>
      <h2>{movie.Year}</h2>
      <p>{movie.Plot}</p>
    </div>
  })}
</div>
);}}
export default Showcard;
