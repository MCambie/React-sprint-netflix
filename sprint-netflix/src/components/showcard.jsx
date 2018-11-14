import React, {Component} from 'react';
import moviesData from './../movie.json';
import Header from './header';

class ShowCard extends Component {
      constructor(props){
      super(props)
      this.state = {
          searchStringUser: "",
          movies: moviesData.movie
        }
      }
      handleChange(e){
          this.setState({searchStringUser: e.target.value});
      }
  render() {
      const movieFilter = this.state.movies.filter((searchText) => {
          let search = searchText.Actors + " " + searchText.Title+ " " + searchText.Plot+ " " + searchText.Year;
          return search.match(this.state.searchStringUser);
      })
    return (

        <div className="card_contaiener">
          <Header userInput={this.state.searchStringUser} Funct={this.handleChange.bind(this)}/>

            <div className="movie-container">

            {movieFilter.map((movie)=>{
              return <div className="wrapper-card">
                <img src={movie.Poster} alt=""/>
                <h3>{movie.Title}</h3>
                <h4>{movie.Year}</h4>
                <p className="actors">{movie.Actors}</p>
                <p>{movie.Plot}</p>
              </div>
            })}
          </div>

      </div>
    );
  }
}


export default ShowCard;
