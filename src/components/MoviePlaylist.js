import { createRandomMovie } from "../data";

function MoviePlaylist() {
  // Yapılacaklar:
  // Filmlerin listesini al
  const moviePlaylist = [];

  const handleMovieAdd = (movie) => {
    // Yapılacaklar:
    // Listeye film ekle
  };
  const handleMovieRemove = (movie) => {
    // Yapılacaklar:
    // Listeden şarkıyı kaldır
  };

  const renderedMovies = moviePlaylist.map((movie) => {
    return (
      <li key={movie}>
        {movie}
        <button onClick={() => handleMovieRemove(movie)} className="button">
          X
        </button>
      </li>
    );
  });

  return (
    <div className="content">
      <div className="table-header">
        <h3 className="subtitle">Film Listesi</h3>
        <div className="buttons">
          <button
            onClick={() => handleMovieAdd(createRandomMovie())}
            className="button"
          >
            + Listeye Film Ekle
          </button>
        </div>
      </div>
      <ul>{renderedMovies}</ul>
    </div>
  );
}

export default MoviePlaylist;
