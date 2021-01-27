import React, { Component } from 'react';
import { getMovies } from '../../data/movies';

class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      movies: getMovies()
    }
  }
  render() {
    const { length: count } = this.state.movies;

    const movies = this.state.movies.map(movie => (
      <tr key={movie.title}>
        <td>{movie.title}</td>
        <td>{movie.genre.name}</td>
        <td>{movie.numberInStock}</td>
        <td>{movie.dailyRentalRate}</td>
        <td>
          like cmpnt
        </td>
        <td>
          <button>delete btn</button>
        </td>
      </tr>
      )
    )

    if(count <= 0){ return <p>Sorry, no movies found.</p>}

    return (
      <React.Fragment>
        <p>{count} movies found</p>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th/>
              <th/>
            </tr>
          </thead>
          <tbody>
              {movies}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}
 
export default Movies;