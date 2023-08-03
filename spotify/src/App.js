import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import DetailSong from './components/DetailSong';
import ListSong from './components/ListSong';
import { songs } from './Context';
import DataSongs from './data/songs.json'
import LayoutPlaying from './components/LayoutPlaying';
import { useState } from 'react';

function App() {
  const [song, setSongs] = useState(DataSongs[0])


  const handleSetSong = (idSong) =>{
    const song = DataSongs.find(song => song.id === idSong)
    if(!song) 
    setSongs(DataSongs[0])
    else 
    setSongs(song)
    
    
  }
  return (
    <div className="App ">
        <songs.Provider value={{DataSongs, song,handleSetSong}}>
          <Navbar/>
          <div className='grid grid-cols-3 bg-slate-700 h-screen-navbar-player overflow-hidden'>
            <DetailSong/>
            <ListSong/>
          </div>
          <LayoutPlaying></LayoutPlaying>
        </songs.Provider>
    </div>
  );
}

export default App;
