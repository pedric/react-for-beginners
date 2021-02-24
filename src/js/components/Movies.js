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
      pageSize: 4,
      currentPage: 1
    }
  }

  componentDidMount = () => {
    this.setState({ genres: getGenres(), movies: getMovies() });
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

  handleFilter = filter => {
    if(filter.toLowerCase() === 'all movies') {
      this.setState({ movies: getMovies() });
    } else {
      const movies = this.state.movies.filter(movie => movie.genre.name.toLowerCase() === filter.toLowerCase() )
    this.setState({ movies });
    }
  }

  render() {
    const { length: count } = this.state.movies;
    const { currentPage, pageSize, movies: allMovies } = this.state;

    const style = {
      background: 'rgba(0,0,0,.05)',
      padding: '20px'
    }

    // if(count <= 0){ return <p>Sorry, no movies found.</p>}

    const paginatedMovies = paginate(allMovies, currentPage, pageSize);

    return (
      <React.Fragment>
        <div style={style}>
          <Filter 
          onFilter={this.handleFilter}
          filters={this.state.genres}
          textProperty="name"
          valueProperty ="_id"
          />
        </div>
        <div style={style}>
          <h2>Movie class component</h2>
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
            itemsCount={count}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange} />
        </div>
      </React.Fragment>
    );
  }
}
 
export default Movies;