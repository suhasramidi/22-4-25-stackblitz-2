import React from 'react';
import { Link } from 'react-router-dom';

const AddMovieForm = () => {
  return (
    <div style={styles.container}>
      <h1>Add New Movie</h1>
      <form style={styles.form}>
        <div style={styles.formGroup}>
          <label htmlFor="title" style={styles.label}>Title:</label>
          <input type="text" id="title" name="title" style={styles.input} />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="director" style={styles.label}>Director:</label>
          <input type="text" id="director" name="director" style={styles.input} />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="genre" style={styles.label}>Genre:</label>
          <select id="genre" name="genre" style={styles.select}>
            <option value="">Select Genre</option>
            <option value="action">Action</option>
            <option value="comedy">Comedy</option>
            <option value="drama">Drama</option>
            <option value="sci-fi">Sci-Fi</option>
            <option value="fantasy">Fantasy</option>
            <option value="horror">Horror</option>
            <option value="thriller">Thriller</option>
            <option value="animation">Animation</option>
          </select>
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="releaseYear" style={styles.label}>Release Year:</label>
          <input type="number" id="releaseYear" name="releaseYear" style={styles.input} />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="synopsis" style={styles.label}>Synopsis:</label>
          <textarea id="synopsis" name="synopsis" rows="4" style={styles.textarea}></textarea>
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="posterImageUrl" style={styles.label}>Poster Image URL:</label>
          <input type="url" id="posterImageUrl" name="posterImageUrl" style={styles.input} />
        </div>
        <div style={styles.buttonGroup}>
          <button type="submit" style={styles.submitButton}>Submit</button>
          <Link to="/" style={styles.cancelButton}>Cancel</Link>
        </div>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '600px',
    margin: '20px auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  formGroup: {
    marginBottom: '15px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    fontWeight: 'bold',
  },
  input: {
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    fontSize: '16px',
    width: '100%',
    boxSizing: 'border-box',
  },
  select: {
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    fontSize: '16px',
    width: '100%',
    boxSizing: 'border-box',
  },
  textarea: {
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    fontSize: '16px',
    width: '100%',
    boxSizing: 'border-box',
  },
  buttonGroup: {
    marginTop: '20px',
    display: 'flex',
    gap: '10px',
    justifyContent: 'flex-end',
  },
  submitButton: {
    backgroundColor: '#007bff',
    color: 'white',
    padding: '10px 15px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
  },
  cancelButton: {
    backgroundColor: '#f0f0f0',
    color: '#333',
    padding: '10px 15px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
    textDecoration: 'none',
  },
};

export default AddMovieForm;