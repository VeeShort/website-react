import React, { useState } from 'react';
import './HeadingContent.scss';

function HeadingContent() {
  const [openVideo, setVideoState] = useState(false);
  const changeVideoState = () => {
    setVideoState(!openVideo);
  };
  return (
    <div className="content-container">
      <div className="content">
        <h1 className="heading">Design a better website template.</h1>
        <p className="par-content">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
        <a href="#" className="download-link">FREE DOWNLOAD</a>
      </div>
      <div className="btn-wrapper">
        <a href="#" className="play-link">
          <span id="playIco" onClick={changeVideoState}>
            <i className="ion-ios-play" />
          </span>
        </a>
      </div>
    </div>
  );
};

export default HeadingContent;
