import { createRandomSong } from "../data";

function SongPlaylist() {
  // Yapılacaklar:
  // Şarkıların listesini al
  const songPlaylist = [];

  const handleSongAdd = (song) => {
    // Yapılacaklar:
    // Listeye şarkı ekle
  };
  const handleSongRemove = (song) => {
    // Yapılacaklar:
    // Listeden şarkıyı kaldır
  };

  const renderedSongs = songPlaylist.map((song) => {
    return (
      <li key={song}>
        {song}
        <button onClick={() => handleSongRemove(song)} className="button">
          X
        </button>
      </li>
    );
  });

  return (
    <div className="content">
      <div className="table-header">
        <h3 className="subtitle">Şarkı Listesi</h3>
        <div className="buttons">
          <button
            onClick={() => handleSongAdd(createRandomSong())}
            className="button"
          >
            + Listeye Şarkı Ekle
          </button>
        </div>
      </div>
      <ul>{renderedSongs}</ul>
    </div>
  );
}

export default SongPlaylist;
