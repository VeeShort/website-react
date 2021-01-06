import { useState } from 'react';
import './HeadingContent.scss';
import VideoModal from '../VideoModal/VideoModal';

function HeadingContent() {
  const [openVideo, setVideoState] = useState(false);

  return (
    <div className="content-container">
      <div className="content">
        <h1 className="heading">Design a better website template.</h1>
        <p className="par-content">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
        <a href="#" className="download-link">FREE DOWNLOAD</a>
      </div>
      <div className="btn-wrapper">
        <div className="play-link" onClick={() => setVideoState(true)}>
          <span id="playIco">
            <i className="ion-ios-play" />
          </span>
        </div>
      </div>
      {openVideo && <VideoModal open={setVideoState} />}
    </div>
  );
};

export default HeadingContent;
