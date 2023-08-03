import React, { useContext } from 'react'
import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css';
import { songs } from '../Context';


export default function LayoutPlaying() {
  const {song,handleSetSong} = useContext(songs)
  const handleClickNext = () =>{
      handleSetSong(song.id +1)
  }

  const handleClickPrevious = () =>{
    handleSetSong(song.id -1)
    
  }
  return (
    <div><AudioPlayer src={song.url} className='play-music' showSkipControls={true} showJumpControls={false}
    onClickNext={handleClickNext}
    onClickPrevious={handleClickPrevious}
    /></div>
  )
}
