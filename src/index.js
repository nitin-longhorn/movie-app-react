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
};

class Movie extends React.Component {
  render() {
    return (
      <div style={styles.container}>
        <tr style={styles.flexRow}>
          <img src={this.props.data.image}></img>
          <div>
            {this.props.data.movieName}<br />
            {this.props.data.movieDate}<br />
            {this.props.data.location}
          </div>
         </tr>
      </div>
    );
  }
}

class MovieGrid extends React.Component {
  constructor() {
    super();

    this.state = {
      data: [
        {
          movieName: 'Star Trek',
          image: 'data:image/jpeg;base64,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',
          movieDate: '5/12/2000',
          location: 'Bangalore',
        },
        {
          movieName: 'Midnight in Paris',
          image: 'data:image/jpeg;base64,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',
          movieDate: '6/6/2017',
          location: 'Mountain View',
        },
        {
          movieName: 'Sherlock',
          image: 'http://vignette3.wikia.nocookie.net/bakerstreet/images/d/db/Sherlock_holmes_ritchie.jpg/revision/latest?cb=20130202212947',
          movieDate: '1/20/2010',
          location: 'Dubai',
        },
        {
          movieName: 'Gone Girl',
          image: 'data:image/jpeg;base64,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',
          movieDate: '7/8/2016',
          location: 'Menlo Park',
        },
      ]
    }
  }

  render() {
    
    return (
      <div>
        <h1 style={styles.header}>Movies watched by Nimitha</h1>
        <table>
          <tbody>
            {this.state.data.map((movie, i) => <Movie key = {i} data = {movie} />)}
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
