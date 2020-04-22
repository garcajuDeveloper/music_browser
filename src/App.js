import React, {useState, useEffect} from 'react';
import axios from 'axios';
import LyricBrowserForm from './components/lyric_browser_form';
import Song from './components/song';
import ArtistInfo from './components/artist_info';
import ArtistImage from './components/artist_image';

function App() {

  const [search, saveSearch] = useState({});
  const [lyric, saveLyric] = useState('');
  const [artistInfo, saveArtistInfo] = useState({});

  useEffect(() => {
    if(Object.keys(search).length === 0) return;

    const lyricApiProcess = async () => {
      const { artist, song } = search;
      const lyricApiUrl = `https://api.lyrics.ovh/v1/${artist}/${song}`;
      const artistApiUrl = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artist}`;

      const [lyricSong, artistBio] = await Promise.all([
        axios(lyricApiUrl),
        axios(artistApiUrl)
      ]);
      console.log(artistBio.data.artists[0]);
      saveLyric(lyricSong.data.lyrics);
      saveArtistInfo(artistBio.data.artists[0]);
    } 
    lyricApiProcess();
  }, [search]);

  return (
    <div className="tile is-ancestror">
      <div className="tile is-vertical is-8"> 
        <div className="tile">
          <div className="tile is-parent is-vertical is-5">
            <article className="tile is-child notification is-primary">
              <h1 className="title is-1">Sing it!</h1>
              <p className="subtitle">Lyric Browser & music info</p>
            </article>
            <article className="tile is-child notification is-warning">
              <LyricBrowserForm
                saveSearch = {saveSearch}
              />
            </article>
          </div>
          <ArtistImage 
            artistImage = {artistInfo.strArtistFanart}
            artistName = {artistInfo.strArtist}
          />
        </div>
        <ArtistInfo
          artistName = {artistInfo.strArtist}
          artistStyle = {artistInfo.strStyle}
          artistBiography = {artistInfo.strBiographyEN}
        />
      </div>
      <Song 
          title = {search.song}
          lyric = {lyric}
      />
    </div>
  );
}

export default App;
