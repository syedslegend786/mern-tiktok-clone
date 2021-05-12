import React, { useRef, useState } from 'react'
//
import './App.css';
import Footer from './Footer';
import Sidebar from './Sidebar';
const Video = ({ likes, comments, shares, username, description, song, videoUrl }) => {
    console.log(likes, comments, shares, username, description, song)
    const [playing, setPlaying] = useState(false)
    const videoRef = useRef(null);
    const handlePlayPause = () => {
        if (playing) {
            videoRef.current.pause();
            setPlaying(false)
        } else {
            videoRef.current.play();
            setPlaying(true)
        }
    }
    return (
        <div className='Video'>
            <video onClick={handlePlayPause} ref={videoRef} className='video__screen' loop src={videoUrl}></video>
            <Footer username={username} description={description} song={song} />
            <Sidebar likes={likes} comments={comments} shares={shares} />
        </div>
    )
}

export default Video
