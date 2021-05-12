import './App.css';
import Video from './Video';
//
import axios from './axios';
import { useEffect, useState } from 'react';
function App() {
  const [videoMap, serVideoMap] = useState([]);
  useEffect(() => {
    const fetchVideoData = async () => {
      const res = await axios.get('/video');
      serVideoMap(res.data);
    }
    fetchVideoData();
  }, [])
  return (
    <div className='app'>
      <div className='app__snapfunction'>
        {
          videoMap.map((video) => (
            <Video likes={video.likes} comments={video.comments}
              shares={video.shares} username={video.username}
              description={video.description} song={video.song}
              videoUrl={video.videoUrl}
            />
          ))
        }


      </div>
    </div>
  );
}

export default App;
