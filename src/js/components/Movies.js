import React, { Component } from 'react';
import { getMovies } from '../../data/movies';
import { getGenres } from '../../data/genres';
import Pagination from './Pagination';
import Filter from './Filter';
import  { paginate } from '../utils/paginate';

class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      movies: [],
      genres: [],
      currentGenre: false,
      pageSize: 4,
      currentPage: 1
    }
  }

  componentDidMount = () => {
    const genres = [{ name: 'All Genres' }, ...getGenres()];
    const movies = getMovies();
    this.setState({ genres, movies });
  }

  handleSave = movie => {
    const movies = [...this.state.movies]
    const index = movies.indexOf(movie)
    movies[index] = { ...movies[index] }
    movies[index].liked = !movies[index].liked
    this.setState({ movies })
  }

  handlePageChange = page => {
    console.log(page);
    this.setState({ currentPage: page });
  }

  handleDelete = movie => {
    const movies = this.state.movies.filter(m => m !== movie)
    this.setState({ movies })
  }

  selectGenre = genre => {
      this.setState({ currentGenre: genre, currentPage: 1 });
  }

  render() {
    const { length: count } = this.state.movies;
    const { currentPage, pageSize, movies: allMovies, currentGenre } = this.state;

    const style = {
      background: 'rgba(0,0,0,.05)',
      padding: '20px'
    }

    const filteredMovies = currentGenre && currentGenre._id
    ? allMovies.filter(m => m.genre._id === currentGenre._id)
    : allMovies;

    // if(count <= 0){ return <p>Sorry, no movies found.</p>}

    const paginatedMovies = paginate(filteredMovies, currentPage, pageSize);

    return (
      <React.Fragment>
        <div style={style}>
          <Filter 
          onFilter={this.selectGenre}
          genres={this.state.genres}
          activeGenre={this.state.currentGenre}
          />
        </div>
        <div style={style}>
          <h2>Movie class component</h2>
          <p>{filteredMovies.length} movies found</p>
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
              {paginatedMovies.map(movie => (
                <tr key={movie.title}>
                  <td>{movie.title}</td>
                  <td>{movie.genre.name}</td>
                  <td>{movie.numberInStock}</td>
                  <td>{movie.dailyRentalRate}</td>
                  <td onClick={() => this.handleSave(movie)}>{movie.liked ? 'saved' : 'save'}</td>
                  <td>
                    <button onClick={() => this.handleDelete(movie)}>Delete</button>
                  </td>
                </tr>
                )
              )}
            </tbody>
          </table>
          <Pagination 
            itemsCount={filteredMovies.length}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange} />
        </div>
      </React.Fragment>
    );
  }
}
 
export default Movies;