// import { useEffect, useState } from 'react';
// import MovieCard from './MovieCard';
// import './App.css';
// import SearchIcon from './search.svg'; // Correct path

// const API_URL = 'http://www.omdbapi.com/?apikey=a135d4fa';
// const movie1={
//   2
// : 
// {Title: 'Spiderman',
//    Year: '1990',
//     imdbID: 'tt0100669', 
// Type: 'movie',
//  Poster: 'N/A'}
// }
// const App = () => {
//  const [movies, setMovies]=useState([]);
// const [searchTerm,setSearchTerm]= useState('');
//   const searchMovies = async (title) => {
//     const response = await fetch(`${API_URL}&s=${title}`);
//     const data = await response.json();
//     setMovies(data.Search); // Log the search results
//   };

//   useEffect(() => {
//     searchMovies('Spiderman');
//   }, []);

//   return (
//     <div className="app">
//       <h1>Movie Land</h1>
//       <div className="search">
//         <input 
//         placeholder="Search for Movies"
//         value ={searchTerm}
//         onChange={(e)=>setSearchTerm(e.target.value)}/>
//        <img 
// src={SearchIcon}
// alt="search"
// onClick={() => searchMovies(searchTerm)}
// />
        

//       </div>
// {
//   movies?.length>0
//   ?(
// <div className="container">
//         {movies.map((movie)=>(<MovieCard movie={movie}/>)
//          )}
// </div>
//   ):
//   (
//     <div className='empty'>
//       <h2>No movies found</h2>
//       </div>

//   )
// }
     
//     </div>
//   );
// };

// export default App;


import { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import './App.css';
import SearchIcon from './search.svg';

const API_URL = 'http://www.omdbapi.com/?apikey=a135d4fa';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const searchMovies = async (title) => {
    try {
      const response = await fetch(`${API_URL}&s=${title}`);
      const data = await response.json();
      if (data.Search) {
        setMovies(data.Search);
      } else {
        setMovies([]);
        console.error('No movies found:', data.Error);
      }
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  useEffect(() => {
    searchMovies('Spiderman');
  }, []);

  return (
    <div className="app">
      <h1>Movie Land</h1>
      <div className="search">
        <input
          placeholder="Search for Movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;

