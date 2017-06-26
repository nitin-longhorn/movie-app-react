import React from 'react';
import ReactDOM from 'react-dom';

const styles = {
  container: {
    flex: 1,
  },
  flexRow: {
    flexDirection: 'row',
  },
  header: {
    textAlign: 'center',
  },
  movieDetails: {
    fontWeight: 'bold',
  }
};

class Movie extends React.Component {
  constructor(prop) {
    super();

    this.state = {
      movie: prop,
    };
  }

  removeMovie(id) {
    var movie = this.state.movie.data;

    var request = new Request('http://localhost:3000/api/remove/' + id, {
      method: 'DELETE',
    });

    fetch(request)
      .then(response => {
        response.json()
          .then(data => {
            console.log(data);
          });
      });
  }

  render() {
    var movie = this.state.movie;
    return (
      <tr>
        <td>
          <img src="data:image/jpeg;base64,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" alt="movie_image"></img>
        </td>
        <td>
          <label>Title: <span style={styles.movieDetails}>{movie.data.movie_name}</span></label> <br />
          <label>Date watched: <span style={styles.movieDetails}>{movie.data.movie_date}</span></label> <br />
          <label>Location: <span style={styles.movieDetails}>{movie.data.location}</span></label> <br /><br />
          <button>Edit</button> &nbsp;&nbsp;
          <button onClick={this.removeMovie.bind(this, movie.data.id)}>Delete</button>
        </td>
      </tr>
    );
  }
}

class MovieGrid extends React.Component {
  constructor() {
    super();

    this.state = {
      title: 'Movies Watched by Nimitha',
      movies: [],
    }
  }

  // Make AJAX calls here
  componentDidMount() {
    console.log('COMPONENT HAS MOUNTED!');

    fetch('http://localhost:3000/api/movies')
      .then(response => {
        response.json()
          .then(data => {
            this.setState({
              movies: data,
            })
          });
      });
  }

  addMovie(event) {
    // Prevents form from submitting
    event.preventDefault();
    let country_data = {
      movie_name: this.refs.movieName.value,
      movie_date: this.refs.movieDate.value,
      location: this.refs.movieLocation.value,
      id: Math.random().toFixed(3) * 1000,
    };

    var request = new Request('http://localhost:3000/api/new-movie', {
      method: 'POST',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      body: JSON.stringify(country_data),
    });

    let movies = this.state.movies;
    movies.push(country_data);
    console.log('Movies');
    console.log(movies);
    this.setState({
      movies: movies,
    });

    //xmlhttprequest()
    fetch(request)
      .then(response => {
        response.json()
          .then(data => {
          })
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    let title = this.state.title;
    let movies = this.state.movies;
    
    return (
      <div>
        <h1 style={styles.header}>{title}</h1>
        <form ref="movieForm">
          <input ref="movieName" placeholder="movie name"></input>
          <input ref="movieDate" placeholder="when"></input>
          <input ref="movieLocation" placeholder="where"></input>
          <button onClick={this.addMovie.bind(this)}>Add Movie</button>
        </form>
        <br />
        <table>
          <tbody>
            {movies.map((movie, i) => <Movie key = {i} data = {movie} />)}
          </tbody>
        </table>
      </div>
    );
  }
}

ReactDOM.render(
  <MovieGrid />,
  document.getElementById('root')
);
