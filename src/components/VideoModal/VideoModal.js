import './VideoModal.scss';

function VideoModal() {
  return (
    <div className="video-wrapper">
      <div className="video-modal" />
      <button className="close-video-btn"><span><i className="ion-close" /></span></button>
      <div className="video-player">
        <iframe
          src="https://player.vimeo.com/video/93951774?color=f0d000&badge=0"
          width="1200"
          height="720"
          frameborder="0"
          allow="autoplay; fullscreen"
          allowfullscreen
        />
      </div>
    </div>
  );
}

export default VideoModal;
