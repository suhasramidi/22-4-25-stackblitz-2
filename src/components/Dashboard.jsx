import React from 'react';
import MovieCard from './MovieCard';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  // Dummy movie data for demonstration
  const movies = [
    {
      id: 1,
      title: 'Inception',
      director: 'Christopher Nolan',
      genre: 'Sci-Fi',
      releaseYear: 2010,
      synopsis: 'A thief who steals corporate secrets through dream-sharing technology is planted with the inverse task of planting an idea into the mind of a CEO.',
      posterImageUrl: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTY5OTM0Mw@@._V1_FMjpg_UX1000_.jpg',
    },
    {
      id: 2,
      title: 'The Shawshank Redemption',
      director: 'Frank Darabont',
      genre: 'Drama',
      releaseYear: 1994,
      synopsis: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
      posterImageUrl: 'https://m.media-amazon.com/images/M/MV5BMDFkODBmYjktZTk0ZC00OGMxLWFhYjUtOTBmNDBjNmI0MzMwXkEyXkFqcGdeQXVyOTQxNzM0OTI@._V1_FMjpg_UX1000_.jpg',
    },
  ];

  return (
    <div style={styles.container}>
      <div style={styles.toolbar}>
        <h1>Movie Collection</h1>
        <Link to="/add-movie" style={styles.addButton}>Add Movie</Link>
      </div>
      <div style={styles.movieList}>
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '960px',
    margin: '20px auto',
    padding: '20px',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
  },
  addButton: {
    backgroundColor: '#007bff',
    color: 'white',
    padding: '10px 15px',
    borderRadius: '4px',
    textDecoration: 'none',
    fontSize: '16px',
  },
  movieList: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px',
  },
};

export default Dashboard;