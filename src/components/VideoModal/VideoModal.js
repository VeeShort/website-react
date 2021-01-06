import './VideoModal.scss';

function VideoModal({ open }) {
  return (
    <div className="video-wrapper">
      <button
        className="close-video-btn"
        onClick={() => { open(false); }}
      >
        <span><i className="ion-close" /></span>
      </button>
      <iframe
        src="https://player.vimeo.com/video/93951774?color=f0d000&badge=0"
      />
    </div>
  );
}

export default VideoModal;
